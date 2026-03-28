import { NextResponse } from 'next/server';

// Newsletter signups are now handled client-side via Firebase.
// This route is kept as a fallback / health check.
export async function POST() {
  return NextResponse.json({ message: 'Use client-side Firebase SDK for newsletter signups.' }, { status: 200 });
}
