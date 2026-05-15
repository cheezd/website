import Link from "next/link";
import Image from "next/image";
import { routes } from "@/lib/site-content";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-chart-navy/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 lg:max-w-6xl">
        <Link
          href="/"
          className="inline-flex min-h-11 shrink-0 items-center gap-3 font-semibold tracking-tight text-chart-navy transition-opacity hover:opacity-90"
        >
          <Image
            src="/brand/chart-room-ai-header-mark.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
          {siteConfig.name}
        </Link>
        <nav
          aria-label="Primary"
          className="hidden gap-x-5 gap-y-2 text-sm font-medium text-chart-ink md:flex md:justify-end"
        >
          {routes.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center rounded underline-offset-4 transition-colors hover:text-chart-teal hover:underline decoration-chart-teal/80"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <details className="group relative shrink-0 md:hidden">
          <summary className="inline-flex min-h-11 cursor-pointer list-none items-center rounded-md border border-chart-navy/30 px-4 text-sm font-semibold text-chart-navy transition hover:bg-chart-surface [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <nav
            aria-label="Mobile primary"
            className="absolute right-0 top-12 w-64 rounded-xl border border-chart-navy/10 bg-white p-3 text-sm font-medium text-chart-ink shadow-lg"
          >
            {routes.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center rounded-md px-3 underline-offset-4 transition-colors hover:bg-chart-surface hover:text-chart-teal hover:underline decoration-chart-teal/80"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
