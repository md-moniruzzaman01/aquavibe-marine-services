import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import DepthIndicator from "../components/DepthIndicator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────────────────
  title: {
    default: "Sultan Fleet Serves – Best Ship Spare Parts Supplier in BD",
    template: "%s | Sultan Fleet Serves",
  },
  description:
    "Sultan Fleet Serves is Bangladesh's leading ship chandler. We supply marine spare parts, lube oil, bunker, provisions & ship stores across Chittagong, Mongla & Payra ports. 24/7 service.",

  // ── Canonical & Base URL ──────────────────────────────────────────────
  metadataBase: new URL("https://sultanfleetserve.com"),
  alternates: {
    canonical: "/",
  },

  // ── Keywords ──────────────────────────────────────────────────────────
  keywords: [
    "ship chandler Bangladesh",
    "ship spare parts supplier BD",
    "marine fender supply Bangladesh",
    "ship store supply Chittagong",
    "bunker supply Bangladesh",
    "marine lube oil Bangladesh",
    "provision supply Chittagong",
    "ship repair services Bangladesh",
    "ship manning Bangladesh",
    "Aquavibe Marine Services",
    "ship chandler Chittagong",
    "ship chandler Mongla",
    "ship chandler Payra",
    "bond store supply Bangladesh",
    "crane grab rental service",
    "shipping logistics Bangladesh",
  ],

  // ── Open Graph ────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    url: "https://sultanfleetserve.com",
    siteName: "Aquavibe Marine Services",
    title: "Aquavibe Marine Services – Best Ship Spare Parts Supplier in BD",
    description:
      "Bangladesh's leading ship chandler. Marine spare parts, lube oil, bunker, provisions & ship repair services across Chittagong, Mongla & Payra. Available 24/7.",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png", // place a 1200×630px image in /public
        width: 1200,
        height: 630,
        alt: "Aquavibe Marine Services – Ship Chandler in Bangladesh",
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Aquavibe Marine Services – Best Ship Spare Parts Supplier in BD",
    description:
      "Bangladesh's leading ship chandler. Marine spare parts, lube oil, bunker, provisions & ship repair across Chittagong, Mongla & Payra ports.",
    images: ["/og-image.png"],
  },

  // ── Robots ────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Icons ─────────────────────────────────────────────────────────────
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "sultanfleetserve.com/favicon.png",
        sizes: "32x32",
      },
    ],
  },

  // ── App Info ──────────────────────────────────────────────────────────
  applicationName: "Sultan Fleet Serves",
  authors: [
    {
      name: "Sultan Fleet Serve s",
      url: "https://sultanfleetserve.com",
    },
  ],
  generator: "Next.js",
  category: "Marine & Shipping Services",

  // ── Verification (add your tokens from Google Search Console etc.) ────
  verification: {
    google: "your-google-verification-token",
    // yandex: "your-yandex-token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col justify-between ">
        <Header />
        <DepthIndicator/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
