"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

export const AnimIcons = ({
  firstIcon,
  secondIcon,
  variants,
  className,
}: {
  firstIcon: ReactNode;
  secondIcon: ReactNode;
  variants?: any;
  className?: string;
}) => (
  <motion.div initial="default" whileHover="hover" className={className}>
    <div className="relative size-5 cursor-default">
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        variants={
          variants[0] || {
            default: { opacity: 1, rotate: 0 },
            hover: { opacity: 0, rotate: 90 },
          }
        }
        transition={{
          type: "spring",
          duration: 0.2,
          bounce: 0,
        }}
      >
        {firstIcon}
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        variants={
          variants[1] || {
            default: { opacity: 0, rotate: -90 },
            hover: { opacity: 1, rotate: 0 },
          }
        }
        transition={{
          type: "spring",
          duration: 0.2,
          bounce: 0,
        }}
      >
        {secondIcon}
      </motion.div>
    </div>
  </motion.div>
);
