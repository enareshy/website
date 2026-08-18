import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(120),
  company: z.string().min(2).max(120),
  email: z.string().email().max(200),
  role: z.string().min(2).max(120),
  industry: z.string().min(1).max(120),
  challenge: z.string().min(10).max(4000),
  phone: z.string().max(40).optional().or(z.literal('')),
  website: z.string().max(200).optional().or(z.literal('')),
});

const RATE_LIMIT_MS = 60_000;
const ipTimestamps = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (ipTimestamps.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_MS);
  recent.push(now);
  ipTimestamps.set(ip, recent);
  return recent.length > 5;
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: 'Validation failed.' }, { status: 422 });
  }

  const { name, company, email, role, industry, challenge, phone, website } = parsed.data;

  if (website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL ?? 'contactus@hiindsight.com';
  const resendKey = process.env.RESEND_API_KEY;

  if (resendKey) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Hiindsight Website <onboarding@resend.dev>`,
        to: [toEmail],
        subject: `New inquiry from ${name} (${company})`,
        text: [
          `Name: ${name}`,
          `Company: ${company}`,
          `Email: ${email}`,
          `Role: ${role}`,
          `Industry: ${industry}`,
          phone ? `Phone: ${phone}` : null,
          '',
          'Challenge:',
          challenge,
        ]
          .filter(Boolean)
          .join('\n'),
      }),
    });
    if (!res.ok) {
      return NextResponse.json({ ok: false, error: 'Failed to send.' }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true });
}
