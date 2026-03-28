import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

export async function POST(request: NextRequest) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Requête invalide' }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!name || name.trim().length < 2) {
    return NextResponse.json({ error: 'Nom requis (2 caractères minimum)' }, { status: 400 });
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'Adresse email invalide' }, { status: 400 });
  }

  if (!message || message.trim().length < 10) {
    return NextResponse.json({ error: 'Message requis (10 caractères minimum)' }, { status: 400 });
  }

  try {
    await addDoc(collection(db, 'contact_messages'), {
      name: name.trim(),
      email: email.toLowerCase(),
      message: message.trim(),
      sentAt: new Date().toISOString(),
      read: false,
    });

    return NextResponse.json({ success: true, message: 'Message envoyé avec succès !' });
  } catch (error) {
    console.error('Firebase error:', error);
    return NextResponse.json({ error: 'Erreur serveur. Réessayez plus tard.' }, { status: 500 });
  }
}
