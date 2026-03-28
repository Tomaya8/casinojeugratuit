import { NextRequest, NextResponse } from 'next/server';

const recentSignups = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const MAX_SIGNUPS_PER_WINDOW = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const lastTime = recentSignups.get(ip);
  if (lastTime && now - lastTime < RATE_LIMIT_WINDOW) {
    return true;
  }
  recentSignups.set(ip, now);
  // Clean old entries periodically
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

  const { email } = body;

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'Adresse email invalide' }, { status: 400 });
  }

  // TODO: Integrate with Brevo / Mailchimp API
  // Example Brevo integration:
  // const res = await fetch('https://api.brevo.com/v3/contacts', {
  //   method: 'POST',
  //   headers: {
  //     'api-key': process.env.BREVO_API_KEY!,
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     email,
  //     listIds: [parseInt(process.env.BREVO_LIST_ID!)],
  //     updateEnabled: true,
  //   }),
  // });
  console.log('Newsletter signup:', email);

  return NextResponse.json({ success: true, message: 'Inscription réussie' });
}
