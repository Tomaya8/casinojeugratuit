import { NextRequest, NextResponse } from 'next/server';

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

  // TODO: Integrate with email service (Brevo transactional, SendGrid, etc.)
  console.log('Contact form:', { name, email, message: message.slice(0, 100) });

  return NextResponse.json({ success: true, message: 'Message envoyé avec succès' });
}
