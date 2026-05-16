import { siteConfig } from "@/lib/site-config";

export function ContactForm() {
  return (
    <form
      id="diagnostic-form"
      action={siteConfig.formEndpoint}
      method="POST"
      className="rounded-3xl border border-chart-gold/30 bg-white p-6 shadow-xl shadow-chart-navy/10 md:p-8"
    >
      <input type="hidden" name="_subject" value="Chart Room AI diagnostic request" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-chart-teal">
          Request the diagnostic
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-chart-navy">
          Tell us where the AI initiative is stuck.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-chart-ink/75">
          You will get a candid operator-to-operator response. No pitch sequence, no newsletter
          trap.
        </p>
      </div>

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-semibold text-chart-navy">
          Name
          <input
            required
            name="name"
            autoComplete="name"
            className="min-h-12 rounded-md border border-chart-navy/15 px-4 text-base font-normal text-chart-ink shadow-sm"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-chart-navy">
          Work email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="min-h-12 rounded-md border border-chart-navy/15 px-4 text-base font-normal text-chart-ink shadow-sm"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-chart-navy">
          Firm / role
          <input
            name="firm_role"
            autoComplete="organization-title"
            className="min-h-12 rounded-md border border-chart-navy/15 px-4 text-base font-normal text-chart-ink shadow-sm"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-chart-navy">
          What needs momentum?
          <textarea
            required
            name="initiative"
            rows={5}
            className="rounded-md border border-chart-navy/15 px-4 py-3 text-base font-normal text-chart-ink shadow-sm"
            placeholder="Current stage, blockers, timeline, stakeholders, and what would make the conversation useful."
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-chart-navy px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-chart-navy/90"
      >
        Request AI Readiness Diagnostic
      </button>
      <p className="mt-3 text-xs leading-relaxed text-chart-ink/60">
        Prefer a live calendar? Set NEXT_PUBLIC_BOOKING_URL to route this CTA directly to
        Calendly or another scheduler.
      </p>
    </form>
  );
}
