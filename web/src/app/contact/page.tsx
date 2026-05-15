import { CtaBand } from "@/components/CtaBand";
import { PageIntro } from "@/components/PageIntro";
import { engagementOptions, mailHref } from "@/lib/site-content";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Contact",
  description: "Contact Chart Room AI about fractional AI transformation leadership.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Connect" title="Start with the AI decision that needs momentum.">
        <p>
          Email remains the quickest path. Share the initiative, what is blocked, who owns the
          decision, and what outcome would make the next conversation worthwhile.
        </p>
      </PageIntro>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 lg:max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6 text-lg leading-relaxed text-chart-ink">
              <p className="rounded-xl border border-chart-gold/35 bg-chart-surface p-6">
                Useful first notes usually include the business decision, current initiative stage,
                stakeholder map, risk or compliance constraints, timeline, and whether an NDA is
                needed before details are shared.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={mailHref}
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-chart-teal px-6 py-3 text-base font-semibold text-white shadow-md transition hover:brightness-[0.93]"
                >
                  Email about an AI initiative
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

            <div className="rounded-2xl border border-chart-navy/10 bg-chart-surface p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-chart-teal">
                Common starting points
              </p>
              <div className="mt-5 grid gap-4">
                {engagementOptions.map((item) => (
                  <article key={item.title} className="rounded-xl border border-chart-navy/10 bg-white p-5">
                    <h2 className="text-lg font-bold tracking-tight text-chart-navy">{item.title}</h2>
                    <p className="mt-2 leading-relaxed text-chart-ink/90">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Prefer a short note first?" body="Send the decision you are trying to make, the initiative status, and who needs to be aligned." />
    </>
  );
}
