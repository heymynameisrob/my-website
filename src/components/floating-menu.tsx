"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingMenu = () => {
  return (
    <div className="fixed z-50 bottom-9 left-0 right-0 grid place-items-center pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
          duration: 0.15,
          ease: [0.4, 0, 0.2, 1],
          type: "tween",
        }}
        className={cn(
          "dark relative bg-ui inline-flex flex-row items-center gap-1 justify-between p-1 rounded-full transition-all pointer-events-auto before:pointer-events-none dark:before:bg-gradient-to-b before:from-white/[0.04] before:absolute before:inset-0 before:z-[1] before:rounded-full",
          "shadow-[0px_1px_0px_1px_rgba(255,_255,_255,_0.03)_inset,_0px_103px_29px_0px_rgba(0,_0,_0,_0.00),_0px_66px_26px_0px_rgba(0,_0,_0,_0.04),_0px_37px_22px_0px_rgba(0,_0,_0,_0.13),_0px_16px_16px_0px_rgba(0,_0,_0,_0.21),_0px_4px_9px_0px_rgba(0,_0,_0,_0.25)]",
        )}
      >
        <Button variant="secondary" size="sm" asChild>
          <Link href="/">Home</Link>
        </Button>
        <Button variant="secondary" size="sm">
          <a href="mailto:robhough@hey.com">Contact</a>
        </Button>
        <Button variant="secondary" size="sm">
          <a href="https://github.com/heymynameisrob">Github</a>
        </Button>
      </motion.div>
    </div>
  );
};
