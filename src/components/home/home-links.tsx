"use client";
import React from "react";
import { motion } from "framer-motion";

export const HomeLinks = () => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.6,
      duration: 0.15,
      ease: [0.4, 0, 0.2, 1],
      type: "tween",
    }}
    className="w-full flex flex-col gap-4 lg:gap-6"
  >
    <p className="font-medium">Links</p>
    <div className="flex items-center gap-4 text-primary has-[:hover]:text-secondary">
      <a
        className="underline hover:text-primary"
        href="https://github.com/heymynameisrob"
      >
        Github
      </a>
      <a
        className="underline hover:text-primary"
        href="https://www.linkedin.com/in/heymynameisrob/"
      >
        LinkedIn
      </a>
      <a
        className="underline hover:text-primary"
        href="https://twitter.com/heymynameisrob"
      >
        Twitter
      </a>
    </div>
  </motion.div>
);
