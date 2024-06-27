import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center whitespace-nowrap justify-center rounded-full text-sm leading-4 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-background border border-primary shadow hover:opacity-90",
        accent:
          "bg-accent text-white border border-accent hover:opacity-90 shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.50),_0px_1px_2px_0px_rgba(35,_35,_35,_0.12),_0px_0.5px_0px_0px_rgba(255,_255,_255,_0.25)_inset] hover:opacity-90",
        destructive: "bg-red-600 text-white hover:bg-destructive/90",
        secondary:
          "bg-ui border-[0.5px] border-primary text-primary hover:bg-ui-mid shadow-none",
        ghost: "hover:bg-ui-mid",
        link: "underline-offset-4 hover:underline text-accent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "text-sm h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
