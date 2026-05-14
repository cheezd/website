import Link from "next/link";
import { mailHref } from "@/lib/site-content";
import { siteConfig } from "@/lib/site-config";

type CtaBandProps = {
  title?: string;
  body?: string;
};

export function CtaBand({
  title = "Start with the business question.",
  body = "Share the initiative, constraints, stakeholders, and timing. We will help determine whether Chart Room AI is the right partner.",
}: CtaBandProps) {
  return (
    <section className="bg-chart-navy text-white">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-14 md:grid-cols-[1fr_auto] md:items-center lg:max-w-6xl">
        <div>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-white/75">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <a
            href={mailHref}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-chart-teal px-6 py-3 text-base font-semibold text-white shadow-md transition hover:brightness-[0.93]"
          >
            Email {siteConfig.name}
          </a>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/50 px-6 py-3 text-base font-semibold text-white transition hover:bg-white hover:text-chart-navy"
          >
            Contact options
          </Link>
        </div>
      </div>
    </section>
  );
}
