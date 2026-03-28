import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

const recentSignups = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const lastTime = recentSignups.get(ip);
  if (lastTime && now - lastTime < RATE_LIMIT_WINDOW) return true;
  recentSignups.set(ip, now);
  if (recentSignups.size > 1000) {
    for (const [key, time] of recentSignups) {
      if (now - time > RATE_LIMIT_WINDOW) recentSignups.delete(key);
    }
  }
  return false;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Trop de requêtes. Réessayez dans une minute.' }, { status: 429 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Requête invalide' }, { status: 400 });
  }

  const { email, source } = body;

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'Adresse email invalide' }, { status: 400 });
  }

  try {
    // Check if email already exists
    const emailsRef = collection(db, 'newsletter_subscribers');
    const q = query(emailsRef, where('email', '==', email.toLowerCase()));
    const existing = await getDocs(q);

    if (!existing.empty) {
      return NextResponse.json({ success: true, message: 'Vous êtes déjà inscrit(e).' });
    }

    // Save to Firestore
    await addDoc(emailsRef, {
      email: email.toLowerCase(),
      source: source || 'website',
      subscribedAt: new Date().toISOString(),
      ip: ip,
      active: true,
    });

    return NextResponse.json({ success: true, message: 'Inscription réussie !' });
  } catch (error) {
    console.error('Firebase error:', error);
    return NextResponse.json({ error: 'Erreur serveur. Réessayez plus tard.' }, { status: 500 });
  }
}
