import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Email invalide' }, { status: 400 });
  }

  // TODO: Integrate with Brevo / Mailchimp API
  // For now, log the email
  console.log('Newsletter signup:', email);

  return NextResponse.json({ success: true, message: 'Inscription réussie' });
}
