import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { portfolio } from "@/data/portfolio";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const siteUrl = getSiteUrl();
const previewImage = new URL("/opengraph-image", siteUrl).toString();
const title = `${portfolio.profile.name} | ${portfolio.profile.title}`;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: title,
    template: `%s | ${portfolio.profile.name}`,
  },
  description: portfolio.profile.summary,
  alternates: {
    canonical: "/",
  },
  authors: [{ name: portfolio.profile.name }],
  creator: portfolio.profile.name,
  applicationName: `${portfolio.profile.name} Portfolio`,
  openGraph: {
    title,
    description: portfolio.profile.summary,
    type: "website",
    url: "/",
    siteName: `${portfolio.profile.name} Portfolio`,
    images: [
      {
        url: previewImage,
        width: 1200,
        height: 630,
        alt: `${portfolio.profile.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: portfolio.profile.summary,
    images: [previewImage],
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
