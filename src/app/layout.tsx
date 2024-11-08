import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistMono } from "geist/font/mono";
import { Toaster } from "sonner";
import Providers from "@/providers";
import { cn } from "@/lib/utils";

import "microtip/microtip.css";
import "./globals.css";

const serif = localFont({
  display: "swap",
  src: "/Jessen-Cicero12.woff2",
  variable: "--font-serif",
});

const switzer = localFont({
  display: "swap",
  src: "/Switzer-Variable.woff2",
  variable: "--font-sans",
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
          switzer.variable,
          GeistMono.variable,
          serif.variable,
          "bg-background text-primary antialiased font-sans",
        )}
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
