import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Betrayal Companion",
  description:
    "The definitive companion app for Betrayal at House on the Hill — haunt lookup, rulings, and dice roller.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <nav className="sticky top-0 z-50 border-b border-stone-200 bg-stone-900 shadow-sm">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <Link
              href="/"
              className="nav-brand text-lg font-bold tracking-tight text-stone-100"
            >
              <span className="text-red-500">B</span>etrayal Companion
            </Link>
            <div className="flex gap-5 text-sm font-medium">
              <Link
                href="/original/haunts"
                className="text-stone-400 transition hover:text-stone-100"
              >
                Haunts
              </Link>
              <Link
                href="/original/rulings"
                className="text-stone-400 transition hover:text-stone-100"
              >
                Rulings
              </Link>
            </div>
          </div>
        </nav>
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <footer className="border-t border-stone-200 py-6 text-center text-xs text-stone-400">
          Fan project. Not affiliated with Avalon Hill or Hasbro.
        </footer>
      </body>
    </html>
  );
}
