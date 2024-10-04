"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { cn } from "@/lib/utils";

export interface IAnimTextProps {
  delay?: number;
  children: any;
  className?: string;
}

export default function AnimText({
  delay,
  children,
  className,
}: IAnimTextProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    children.slice(0, latest),
  );

  useEffect(() => {
    const controls = animate(count, children.length, {
      type: "tween",
      delay: delay,
      duration: 1,
      ease: "easeOut",
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <span className="sr-only">{children}</span>
      <motion.div className={cn("!text-inherit", className)}>
        {displayText}
      </motion.div>
    </div>
  );
}
