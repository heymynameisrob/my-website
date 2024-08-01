import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const Prose = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "relative",
      "prose prose-sm md:prose-base",
      "prose-h1:font-medium",
      "prose-h1:tracking-tight prose-h2:tracking-[-0.01em]",
      "prose-h1:font-medium prose-h2:font-medium prose-h3:font-medium",
      "prose-h2:text-lg prose-h3:text-lg prose-h3:text-secondary",
      "prose-p:text-secondary prose-p:tracking-normal prose-strong:text-primary",
      "prose-pre:border prose-pre:border-black/10 dark:prose-pre:border-white/10",
      "prose-li:text-secondary prose-strong:font-medium",
      "prose-kbd:bg-ui prose-kbd:text-secondary prose-kbd:border prose-kbd:border-primary prose-kbd:border-b-2 prose-kbd:text-xs prose-kbd:font-mono",
      className,
    )}
  >
    {children}
  </div>
);
