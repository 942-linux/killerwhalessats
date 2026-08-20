import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://killerwhales.sats"),
  title: "killerwhales.sats - On Bitcoin ₿",
  description:
    "Một chỉ mục độc lập gồm các ý tưởng, ghi chép và quan sát quanh Bitcoin, thị trường và công nghệ.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "killerwhales.sats - On Bitcoin ₿",
    description:
      "Ghi chép, quan sát và những lối rẽ sâu quanh Bitcoin.",
    url: "/",
    siteName: "killerwhales.sats",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "killerwhales.sats - On Bitcoin ₿",
    description:
      "Ghi chép, quan sát và những lối rẽ sâu quanh Bitcoin.",
    creator: "@normallitt",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1efe9" },
    { media: "(prefers-color-scheme: dark)", color: "#151513" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <Script
          src="/theme-init.js"
          strategy="beforeInteractive"
          nonce={nonce}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
