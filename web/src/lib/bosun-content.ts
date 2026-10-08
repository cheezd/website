import { bosunConfig } from "@/lib/bosun-config";

export const bosunNav = [
  { href: "#problem", label: "The Problem" },
  { href: "#what-it-does", label: "What It Does" },
  { href: "#websites", label: "Websites" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#plans", label: "Plans" },
  { href: "#get-started", label: "Get Started" },
] as const;

export const bosunHero = {
  eyebrow: "Meet Bosun, your office teammate",
  headlineLead: "Get your",
  headlineHighlight: "evenings",
  headlineTail: "back.",
  subheadline:
    "An office teammate that handles your email, calendar, and bills, so you can stay on the job. You just tell it what you need in plain English.",
  primaryCta: "Book a free 15-minute call",
  secondaryCta: "See plans",
} as const;

export const bosunWhatABosunIs = `On a ship, the bosun (${bosunConfig.pronunciation}) is the officer who keeps the deck and gear in order so everything's ready when it's needed. Bosun does the same for your office: mail filed, calendar straight, bills tracked.`;

export const bosunTrustBar = [
  "Built for small trade and service businesses",
  "You approve everything that goes out",
  "Business-hours support from a real person",
] as const;

export const bosunProblem = {
  title: "You run the jobs. The office work follows you home.",
  body: "Landscapers, lawn care crews, power washers, cleaners, handymen, and small contractors with 1 to 10 people: the work gets done during the day, and the office work waits until night.",
  cards: [
    {
      title: "Nights at the kitchen table",
      body: "Email, scheduling, and paperwork pile up until the day's jobs are done.",
    },
    {
      title: "Quote requests sit unanswered",
      body: "A new request comes in while you're on a job, and by the time you reply, the moment may have passed.",
    },
    {
      title: "Unpaid invoices slip",
      body: "Bills and invoices are scattered across your inbox, so following up falls behind.",
    },
    {
      title: "Looking too small for bigger bids",
      body: "Without a website, or with only a Facebook page, a solid crew can look smaller than it is.",
    },
  ],
} as const;

export const bosunDay = {
  title: "A day with Bosun",
  example: "Example: a lawn care owner",
  slots: [
    {
      when: "Morning",
      time: "6:30 AM",
      body: "Your morning brief: today's jobs, appointments, and anything urgent in email.",
    },
    {
      when: "Midday",
      time: "12:00 PM",
      body: "Replies to new quote requests are drafted. You read them, tap approve, and they go out.",
    },
    {
      when: "Afternoon",
      time: "3:30 PM",
      body: "A list of unpaid invoices is ready, so you know exactly who to follow up with.",
    },
    {
      when: "Evening",
      time: "7:00 PM",
      body: "Done. No paperwork at the kitchen table tonight.",
    },
  ],
} as const;

export const bosunCapabilities = {
  title: "What Bosun does for your office",
  tiles: [
    {
      title: "Email, handled",
      body: "Keeps your inbox tidy: files mail into folders, flags what needs you, and drafts replies. You approve before anything is sent.",
    },
    {
      title: "Calendar, straight",
      body: "Gets estimates and jobs onto the calendar, finds open times, and sets reminders.",
    },
    {
      title: "Bills, tracked",
      body: "Pulls invoices, receipts, and bills from your email into one running list.",
    },
    {
      title: "Routines on autopilot",
      body: "Runs tasks on a schedule, like a morning summary or a weekly unpaid-invoice list.",
    },
    {
      title: "Research, fast",
      body: "Looks things up on the web: a supplier, a price, a permit question.",
    },
    {
      title: "Docs on request",
      body: "Creates quotes, spreadsheets, and summaries. Just ask from your phone or computer.",
    },
  ],
} as const;

export const bosunWebsite = {
  title: "A website that wins bigger jobs.",
  body: "A simple website makes a small crew look established. We build it from Chart Room's template, with a quote form that sends requests straight to your email.",
  price: "$1,500",
  priceNote: "fixed price, up to 10 hours",
  points: [
    "4 to 5 pages built from Chart Room's template",
    "A quote form that sends to your email",
    "You own your domain and your content",
  ],
} as const;

export const bosunSteps = [
  {
    title: "Set up",
    body: "We set up Bosun on your own account and get it ready for your business.",
  },
  {
    title: "Train",
    body: "About 2 hours of hands-on training. No special tech skills needed.",
  },
  {
    title: "Support",
    body: "A monthly check-up with your approval, and help from a real person during business hours.",
  },
] as const;

export type BosunPlan = {
  name: string;
  monthly: string;
  prepaidYear: string;
  includedHelp: string;
  hourlyRate: string;
  response: string;
  features: readonly string[];
  recommended?: boolean;
};

const everyPlanIncludes = [
  "Hosting, domain, and SSL",
  "Monthly Bosun check-up, with your approval",
  "Monthly website health report",
] as const;

export const bosunPlans: readonly BosunPlan[] = [
  {
    name: "Basic",
    monthly: "$49",
    prepaidYear: "$490",
    includedHelp: "None",
    hourlyRate: "$125",
    response: "Within 2 business days",
    features: everyPlanIncludes,
  },
  {
    name: "Standard",
    monthly: "$99",
    prepaidYear: "$990",
    includedHelp: "30 min",
    hourlyRate: "$110",
    response: "Next business day",
    recommended: true,
    features: [
      ...everyPlanIncludes,
      "Monthly quote-request summary",
      "Facebook post drafts (2 a month)",
    ],
  },
  {
    name: "Plus",
    monthly: "$199",
    prepaidYear: "$1,990",
    includedHelp: "1 hr (includes a 30-min screen-share)",
    hourlyRate: "$100",
    response: "Same business day if received by noon",
    features: [
      ...everyPlanIncludes,
      "Monthly quote-request summary",
      "Facebook post drafts (4 a month)",
    ],
  },
];

export const bosunHostingOnly = {
  name: "Hosting only",
  monthly: "$39",
  prepaidYear: "$390",
  includedHelp: "None",
  hourlyRate: "$150",
  response: "Next business day, outages only",
} as const;

export const bosunStartupFees = {
  title: "One-time startup fee",
  note: "Covers your website build and Bosun setup.",
  rows: [
    { plan: "Month-to-month", fee: "$1,800" },
    { plan: "Basic, annual", fee: "$1,500" },
    { plan: "Standard, annual", fee: "$1,000" },
    { plan: "Plus, annual", fee: "$500" },
  ],
} as const;

export const bosunPlanNotes = [
  "Price locked for 12 months on annual plans.",
  "A prepaid year gets 2 months free and is not refunded.",
  "Annual plans add a seasonal refresh twice a year, up to 1 hour each.",
] as const;

export const bosunInCharge = {
  title: "You stay in charge.",
  points: [
    {
      title: "It never sends on its own",
      body: "Bosun drafts the reply; you approve it. Nothing goes out until you say so.",
    },
    {
      title: "It moves mail, never deletes it",
      body: "Mail gets filed into folders and flagged. Nothing is thrown away.",
    },
    {
      title: "If it's down, nothing breaks",
      body: "Nothing it does is business-critical. You can always do it the normal way, by hand.",
    },
  ],
} as const;

export const bosunFaq = [
  {
    question: "What do I pay for separately?",
    answer:
      "Bosun runs on an AI assistant set up on your own account. You pay for that account and its assistant upgrade directly, along with your email service. Those aren't billed by Chart Room AI.",
  },
  {
    question: "Do I own my website?",
    answer:
      "Yes. You own your domain and your content. If you ever want to move your site elsewhere, the handoff fee is $250.",
  },
  {
    question: "What if I cancel?",
    answer:
      "Leaving an annual plan early costs that plan's discount plus 50% of the remaining months. A prepaid year is not refunded.",
  },
  {
    question: "Is support available around the clock?",
    answer:
      "No. Support is during business hours, from a real person. Response times depend on your plan.",
  },
  {
    question: "How do I pay?",
    answer:
      "Zelle or ACH at no extra cost. Credit cards carry a 2.9% surcharge; debit and prepaid cards have none.",
  },
] as const;

export const bosunCta = {
  title: "Ready for a teammate who handles the office?",
  body: "Let's talk about setting up Bosun for your business. Share a few details and we will follow up to set up a free 15-minute call.",
} as const;
