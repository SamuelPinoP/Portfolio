import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { portfolio } from "@/data/portfolio";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: `${portfolio.profile.name} | ${portfolio.profile.title}`,
    template: `%s | ${portfolio.profile.name}`,
  },
  description: portfolio.profile.summary,
  authors: [{ name: portfolio.profile.name }],
  creator: portfolio.profile.name,
  applicationName: `${portfolio.profile.name} Portfolio`,
  openGraph: {
    title: `${portfolio.profile.name} | ${portfolio.profile.title}`,
    description: portfolio.profile.summary,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${portfolio.profile.name} | ${portfolio.profile.title}`,
    description: portfolio.profile.summary,
  },
  robots: {
    index: true,
    follow: true,
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
