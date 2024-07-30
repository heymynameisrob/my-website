"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const ContactFormButton = ({
  layoutId,
  onClick,
  children,
}: {
  layoutId: string;
  onClick: () => void;
  children: ReactNode;
}) => {
  return (
    <Button
      className="rounded-full bg-white border border-black/10 shadow-none text-neutral-900"
      asChild
    >
      <motion.button
        layoutId={layoutId}
        onClick={onClick}
        key="button"
        className="outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-opacity-50 focus:ring-2 focus:ring-primary focus:ring-opacity-50"
      >
        <motion.span
          layoutId="title"
          className="block !text-sm !tracking-tight"
        >
          {children}
        </motion.span>
      </motion.button>
    </Button>
  );
};
