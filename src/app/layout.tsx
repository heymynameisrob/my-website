import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/theme-provider";

import "microtip/microtip.css";
import "./globals.css";
import { cn } from "@/lib/utils";

const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif" });

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
          serif.variable,
          GeistMono.variable,
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
