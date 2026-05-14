import { CtaBand } from "@/components/CtaBand";
import { PageIntro } from "@/components/PageIntro";
import { mailHref } from "@/lib/site-content";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Contact",
  description: "Contact Chart Room AI about fractional AI transformation leadership.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Connect" title="Start a routed conversation.">
        <p>
          Email remains the quickest path. Share context, timeline, stakeholder map, constraints,
          NDAs needed, and desired outcomes.
        </p>
      </PageIntro>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 lg:max-w-6xl">
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-chart-ink">
            <p className="rounded-xl border border-chart-gold/35 bg-chart-surface p-6">
              We also welcome inbound on <strong>speaking</strong>,{" "}
              <strong>non-executive advisory</strong>, and <strong>board-related</strong>{" "}
              conversations where AI, technology risk, or modernization depth is material.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={mailHref}
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-chart-teal px-6 py-3 text-base font-semibold text-white shadow-md transition hover:brightness-[0.93]"
              >
                {siteConfig.contactEmail}
              </a>
              {siteConfig.linkedInHref ? (
                <a
                  href={siteConfig.linkedInHref}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex min-h-11 items-center justify-center rounded-md border-2 border-chart-navy px-6 py-3 text-base font-semibold text-chart-navy hover:bg-chart-navy hover:text-white"
                >
                  LinkedIn profile
                </a>
              ) : (
                <span className="inline-flex min-h-11 items-center rounded-md border-2 border-dashed border-chart-navy/35 px-6 py-3 text-base font-medium text-chart-ink/60">
                  Set <code className="mx-1 text-xs">NEXT_PUBLIC_LINKEDIN_URL</code> to surface LinkedIn
                </span>
              )}
              {siteConfig.calHref ? (
                <a
                  href={siteConfig.calHref}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex min-h-11 items-center justify-center rounded-md border-2 border-chart-gold/90 px-6 py-3 text-base font-semibold text-chart-navy hover:bg-chart-gold/90"
                >
                  Book time
                </a>
              ) : null}
              {siteConfig.resumeHref ? (
                <a
                  href={siteConfig.resumeHref}
                  rel={siteConfig.resumeHref.startsWith("http") ? "noopener noreferrer" : undefined}
                  target={siteConfig.resumeHref.startsWith("http") ? "_blank" : undefined}
                  className="inline-flex min-h-11 items-center justify-center rounded-md border-2 border-chart-navy/50 px-6 py-3 text-base font-semibold text-chart-navy hover:bg-chart-navy hover:text-white"
                >
                  Download resume (PDF)
                </a>
              ) : (
                <span className="inline-flex min-h-11 items-center rounded-md border-2 border-dashed border-chart-navy/25 px-6 py-3 text-base font-medium text-chart-ink/55">
                  Add <code className="mx-1 rounded bg-chart-navy/5 px-1 py-0.5 text-xs">NEXT_PUBLIC_RESUME_URL</code>
                </span>
              )}
            </div>

            <p className="text-sm text-chart-ink/70">
              Public knobs live in <code className="rounded bg-chart-navy/5 px-1.5 py-0.5 text-xs">.env.local</code>:{" "}
              <code className="rounded bg-chart-navy/5 px-1.5 py-0.5 text-xs">NEXT_PUBLIC_CONTACT_EMAIL</code>,{" "}
              <code className="rounded bg-chart-navy/5 px-1.5 py-0.5 text-xs">NEXT_PUBLIC_LINKEDIN_URL</code>, and{" "}
              <code className="rounded bg-chart-navy/5 px-1.5 py-0.5 text-xs">NEXT_PUBLIC_RESUME_URL</code>.
            </p>
          </div>
        </div>
      </section>

      <CtaBand title="Prefer a short note first?" body="Send a concise email with the decision you are trying to make, the initiative status, and who needs to be aligned." />
    </>
  );
}
