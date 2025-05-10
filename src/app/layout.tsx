import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KSSMedia | NYC Digital Agency for Branding, Web, and Marketing",
  description:
    "KSSMedia is a full-service digital agency based in New York City. We specialize in web design, SEO, advertising, branding, video production, and email marketing.",
  keywords: [
    "NYC Digital Agency",
    "Web Design",
    "SEO Services",
    "Branding",
    "Video Production",
    "Advertising",
    "Email Marketing",
    "E-Commerce",
    "Content Marketing",
  ],
  openGraph: {
    title: "KSSMedia | NYC Digital Agency",
    description:
      "NYC-based agency helping businesses grow through digital strategy, design, branding, SEO, and multimedia creation.",
    url: "https://kssmedia.com",
    siteName: "KSSMedia",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "KSSMedia | NYC Digital Agency",
    description:
      "KSSMedia helps businesses grow with web design, branding, SEO, and more.",
  },
  metadataBase: new URL("https://kssmedia.com"),
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <main role="main">{children}</main>
      </body>
    </html>
  );
}
