"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => (
    <div className="my-px">
      <SeparatorPrimitive.Root
        ref={ref}
        orientation={orientation}
        decorative={decorative}
        className={cn("h-px bg-transparent dark:bg-black", className)}
        {...props}
      />
      <SeparatorPrimitive.Root
        ref={ref}
        orientation={orientation}
        decorative={decorative}
        className={cn("h-px bg-black/10 dark:bg-white/5", className)}
        {...props}
      />
    </div>
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
