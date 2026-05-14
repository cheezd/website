import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const seoDescription =
  "Chart Room AI delivers fractional AI Transformation Leadership from a former fintech CTO and Acting CEO with 31 years of experience. Strategic roadmaps & executive guidance.";

export const metadata: Metadata = {
  title: {
    default: "Chart Room AI | Fractional AI Transformation Leadership",
    template: "%s | Chart Room AI",
  },
  description: seoDescription.substring(0, 155),
  openGraph: {
    title: "Chart Room AI | Fractional AI Transformation Leadership",
    description: seoDescription,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
