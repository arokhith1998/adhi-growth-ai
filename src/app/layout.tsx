import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adhithya Rokhith Bhaskar - Growth Marketing & AI Leader",
  description:
    "Growth Marketing & AI Leader — Digital, SEM, SEO, Paid Media + AI-powered product building. Anthropic certified.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans">
        {children}
        {/* tw-safelist */}
        <span className="hidden bg-violet-500/10 border-violet-500/40 border-violet-500/30 text-violet-300 text-violet-200 bg-violet-400" aria-hidden />
        <Analytics />
      </body>
    </html>
  );
}
