import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { sendVerificationEmail } from '@/app/lib/sendEmail';

export async function POST(req: NextRequest) {
  const { email } = await req.json();


  const token = crypto.randomBytes(32).toString('hex');
  const expires = new Date(Date.now() + 1000 * 60 * 60); // 1 hour

  const verificationUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/verify-email?token=${token}`;
  await sendVerificationEmail(email, verificationUrl);

  return NextResponse.json({ message: 'Verification email sent' }, { status: 200 });
}