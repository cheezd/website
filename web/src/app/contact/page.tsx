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
              ) : null}
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
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Prefer a short note first?" body="Send a concise email with the decision you are trying to make, the initiative status, and who needs to be aligned." />
    </>
  );
}
