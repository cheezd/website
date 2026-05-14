/**
 * Public site knobs — prefer env overrides for local/production without committing secrets.
 */

export const siteConfig = {
  name: "Chart Room AI",
  tagline: "Helping you navigate your AI Transformation",

  positioningShort:
    "Chart Room AI delivers fractional AI Transformation Leadership from a former fintech CTO and Acting CEO with 31 years of experience. We help financial services and technology companies navigate complexity and capture sustainable, governed AI-driven growth.",

  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@chartroomai.com",

  linkedInHref: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? null,

  calHref: process.env.NEXT_PUBLIC_BOOKING_URL ?? null,

  /** Absolute URL or root-relative path e.g. `/Marc-Cheatham-Chart-Room-AI.pdf` */
  resumeHref: process.env.NEXT_PUBLIC_RESUME_URL ?? null,
} as const;
