import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const Container = ({
  children,
  size = "md",
}: {
  children: ReactNode;
  size: string;
}) => (
  <div
    className={cn(
      "mx-auto px-4",
      size === "lg" && "max-w-4xl",
      size === "md" && "max-w-2xl",
    )}
  >
    {children}
  </div>
);
