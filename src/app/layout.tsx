import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/theme-provider";

import "microtip/microtip.css";
import "./globals.css";
import { cn } from "@/lib/utils";

const baskervile = localFont({
  display: "swap",
  src: "/Baskervville-Regular.woff2",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "heymynameisrob",
  description: "My personal website yeah bitch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          baskervile.variable,
          "bg-background text-primary antialiased font-sans",
        )}
      >
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
