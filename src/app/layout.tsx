import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";

import 'microtip/microtip.css'
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={cn(inter.className, GeistMono.variable, "bg-background text-primary antialiased")}>
      <ThemeProvider
        attribute="class"        
        enableSystem
        disableTransitionOnChange
      >          
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
