"use client";

import { motion } from "framer-motion";

export const MagicText = ({
  title,
  delay,
}: {
  title: string;
  delay?: number;
}) => {
  const text = title.split(" ");

  if (text.length < 1) return null;

  return (
    <>
      <span className="sr-only">Latest work</span>
      {text.map((el, i) => (
        <motion.i
          className="not-italic"
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            delay: i / 10 + (delay || 0),
          }}
          key={i}
        >
          {el}{" "}
        </motion.i>
      ))}
    </>
  );
};
