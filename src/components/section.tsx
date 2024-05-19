"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Section = ({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay,
      duration: 0.15,
      ease: [0.4, 0, 0.2, 1],
      type: "tween",
    }}
    className={cn("w-full max-w-[85%] space-y-4 lg:space-y-6", className)}
  >
    {children}
  </motion.div>
);
