import { NextResponse } from 'next/server';

// Contact form submissions are now handled client-side via Firebase.
// This route is kept as a fallback / health check.
export async function POST() {
  return NextResponse.json({ message: 'Use client-side Firebase SDK for contact form.' }, { status: 200 });
}
