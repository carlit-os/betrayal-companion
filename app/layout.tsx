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
    "Haunt lookup, edge case rulings, and dice roller for Betrayal at House on the Hill.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <nav className="sticky top-0 z-50 border-b border-stone-800/60 bg-stone-950/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3.5">
            <Link
              href="/"
              className="text-base font-semibold tracking-tight text-stone-200"
            >
              Betrayal Companion
            </Link>
            <div className="flex gap-6 text-sm">
              <Link
                href="/original/haunts"
                className="text-stone-500 transition hover:text-stone-200"
              >
                Haunts
              </Link>
              <Link
                href="/original/rulings"
                className="text-stone-500 transition hover:text-stone-200"
              >
                Rulings
              </Link>
            </div>
          </div>
        </nav>
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <footer className="border-t border-stone-800/40 py-8 text-center text-xs text-stone-600">
          Fan project. Not affiliated with Avalon Hill or Hasbro.
        </footer>
      </body>
    </html>
  );
}
