'use client';

import { useState } from 'react';
import { z } from 'zod';

const industries = [
  'Automotive',
  'Aerospace & Defence',
  'Energy',
  'Heavy Machinery',
  'Industrial Manufacturing',
  'Other',
];

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  company: z.string().min(2, 'Please enter your company.'),
  email: z.string().email('Please enter a valid business email.'),
  role: z.string().min(2, 'Please enter your role.'),
  industry: z.string().min(1, 'Please select an industry.'),
  challenge: z.string().min(10, 'Please describe your challenge in a few words.'),
  phone: z.string().optional(),
  website: z.string().optional(),
});

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get('name') ?? ''),
      company: String(data.get('company') ?? ''),
      email: String(data.get('email') ?? ''),
      role: String(data.get('role') ?? ''),
      industry: String(data.get('industry') ?? ''),
      challenge: String(data.get('challenge') ?? ''),
      phone: String(data.get('phone') ?? ''),
      website: String(data.get('website') ?? ''),
    };

    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        if (issue.path[0]) fieldErrors[String(issue.path[0])] = issue.message;
      }
      setErrors(fieldErrors);
      setState('error');
      setMessage('Please correct the highlighted fields.');
      return;
    }

    setErrors({});
    setState('submitting');
    setMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setState('success');
        setMessage('Thank you. A Hiindsight expert will respond shortly.');
        form.reset();
      } else {
        setState('error');
        setMessage('Something went wrong. Please try again or email us directly.');
      }
    } catch {
      setState('error');
      setMessage('Something went wrong. Please try again or email us directly.');
    }
  }

  const field = 'flex flex-col gap-1.5';
  const label = 'text-sm font-medium text-ink-700';
  const input =
    'w-full rounded-md border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 focus:outline-none focus:ring-2 focus:ring-signal-500';

  return (
    <form onSubmit={handleSubmit} noValidate className="card">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className={field}>
          <label htmlFor="name" className={label}>
            Name *
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required className={input} aria-invalid={!!errors.name} />
          {errors.name ? <p className="text-xs text-red-600">{errors.name}</p> : null}
        </div>
        <div className={field}>
          <label htmlFor="company" className={label}>
            Company *
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" required className={input} aria-invalid={!!errors.company} />
          {errors.company ? <p className="text-xs text-red-600">{errors.company}</p> : null}
        </div>
        <div className={field}>
          <label htmlFor="email" className={label}>
            Business Email *
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={input} aria-invalid={!!errors.email} />
          {errors.email ? <p className="text-xs text-red-600">{errors.email}</p> : null}
        </div>
        <div className={field}>
          <label htmlFor="role" className={label}>
            Role *
          </label>
          <input id="role" name="role" type="text" autoComplete="organization-title" required className={input} aria-invalid={!!errors.role} />
          {errors.role ? <p className="text-xs text-red-600">{errors.role}</p> : null}
        </div>
        <div className={field}>
          <label htmlFor="industry" className={label}>
            Industry *
          </label>
          <select id="industry" name="industry" required className={input} aria-invalid={!!errors.industry}>
            <option value="">Select an industry</option>
            {industries.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
          {errors.industry ? <p className="text-xs text-red-600">{errors.industry}</p> : null}
        </div>
        <div className={field}>
          <label htmlFor="phone" className={label}>
            Phone <span className="font-normal text-ink-400">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={input} />
        </div>
        <div className={`${field} sm:col-span-2`}>
          <label htmlFor="challenge" className={label}>
            Challenge *
          </label>
          <textarea
            id="challenge"
            name="challenge"
            rows={5}
            required
            className={`${input} resize-y`}
            placeholder="Describe the challenge you want to address — e.g., BOM management, PLM transformation, digital manufacturing, AI for quality."
            aria-invalid={!!errors.challenge}
          />
          {errors.challenge ? <p className="text-xs text-red-600">{errors.challenge}</p> : null}
        </div>
      </div>

      <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {message ? (
        <p
          role={state === 'error' ? 'alert' : 'status'}
          className={`mt-5 rounded-md px-4 py-3 text-sm ${
            state === 'success' ? 'bg-data-50 text-data-800' : 'bg-red-50 text-red-700'
          }`}
        >
          {message}
        </p>
      ) : null}

      <button type="submit" disabled={state === 'submitting'} className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60">
        {state === 'submitting' ? 'Sending…' : 'Talk to an Expert'}
      </button>
    </form>
  );
}
