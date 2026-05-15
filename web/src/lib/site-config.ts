/**
 * Public site knobs — prefer env overrides for local/production without committing secrets.
 */

export const siteConfig = {
  name: "Chart Room AI",
  tagline: "Helping you navigate your AI Transformation",

  positioningShort:
    "Chart Room AI delivers fractional AI Transformation Leadership from a former Fintech CTO and CEO with 31 years of experience. We help financial services and technology companies navigate complexity and capture sustainable, governed AI-driven growth.",

  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@chartroomai.com",

  linkedInHref:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/marc-cheatham-83b35b22/",

  calHref: process.env.NEXT_PUBLIC_BOOKING_URL ?? null,

  resumeHref:
    process.env.NEXT_PUBLIC_RESUME_URL ?? "/Marc-Cheatham-Resume.pdf",

  /** Most recent CTO / acting CEO chapter — employer name disclosed on site */
  priorVentureName: "Caravel Concepts",

  /** One-line sector label (appears in Experience meta + About) */
  priorVentureTagline: "B2B fintech software",
} as const;
