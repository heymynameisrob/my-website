"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CornerDownLeft } from "lucide-react";

export const PostIsland = () => (
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
    >
      <div className="dark z-50 p-1 origin-bottom flex flex-col justify-center items-center overflow-hidden bg-clip-padding bg-ui shadow-lg border border-primary rounded-[24px] text-primary pointer-events-auto">
        <Button variant="accent" size="sm" asChild>
          <Link
            href="/"
            className="no-underline inline-flex justify-center gap-1"
          >
            <CornerDownLeft size={15} className="opacity-80" />
            Go back
          </Link>
        </Button>
      </div>
    </motion.div>
  </div>
);
