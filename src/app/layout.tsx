import CursorGlow from "@/components/CursorGlow";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Mona_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fandi Aziz Pratama - Web Developer",
    template: "%s | Fandi Aziz Pratama",
  },
  description:
    "Web Developer based in Indonesia, focused on building efficient, production-ready web applications with Next.js, React, Laravel, and Express.js - plus modern cross-platform mobile apps with Flutter.",
  keywords: [
    "Fandi Aziz Pratama",
    "Web Developer",
    "Frontend Developer",
    "Fullstack Developer",
    "Next.js",
    "React",
    "Laravel",
    "Express.js",
    "Flutter",
    "Portfolio",
    "Indonesia",
  ],
  authors: [{ name: "Fandi Aziz Pratama" }],
  creator: "Fandi Aziz Pratama",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Fandi Aziz Pratama - Web Developer",
    description:
      "Web Developer building clean, responsive, and production-ready web apps with Next.js, React, and Laravel - with a strong eye for detail and user experience.",
    siteName: "Fandi Aziz Pratama",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fandi Aziz Pratama - Web Developer",
    description:
      "Web Developer building clean, responsive, and production-ready web apps with Next.js, React, and Laravel.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${monaSans.variable} font-mona-sans antialiased scroll-smooth bg-black text-default`}
      >
        <CursorGlow />
        {children}
        {/* <ScrollTriggered /> */}
      </body>
    </html>
  );
}
