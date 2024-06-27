import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const Prose = ({ children }: { children: ReactNode }) => (
  <div
    className={cn(
      "prose prose-base",
      "prose-h1:tracking-tight prose-h2:tracking-tight",
      "prose-h1:font-medium prose-h2:font-medium prose-h3:font-medium",
      "prose-h2:text-lg prose-h3:text-lg prose-h3:text-secondary",
      "prose-p:text-secondary prose-p:tracking-normal prose-strong:text-primary",
      "prose-pre:border prose-pre:border-black/10 dark:prose-pre:border-white/10",
      "prose-li:text-secondary",
    )}
  >
    {children}
  </div>
);
