"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export interface IAnimTextProps {
  delay?: number;
  children: any;
}

export default function AnimText({ delay, children }: IAnimTextProps) {
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
      ease: "easeInOut",
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <p className="header-inline-text">
      <span className="sr-only">{children}</span>
      <motion.span>{displayText}</motion.span>
    </p>
  );
}
