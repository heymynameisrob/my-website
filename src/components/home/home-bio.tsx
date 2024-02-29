"use client";
import React from "react";
import { motion } from "framer-motion";

export const HomeBio = () => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.3,
      duration: 0.15,
      ease: [0.4, 0, 0.2, 1],
      type: "tween",
    }}
    className="w-full max-w-[85%] space-y-4"
  >
    <p className="font-medium">Rob Hough</p>
    <p className="text-secondary">
      I’ve been practicing building products for around 10 years. Spending most
      of that working in the early-stages, getting new products off the ground.
    </p>
    <p className="text-secondary">
      Away from the screen, I like to travel. Particularly on motorcycles and in
      my camper van. I also enjoy hiking, collecting records, and playing
      guitar. I live in Nottingham with my wife, Harriet and my rabbit, Daisy.
    </p>
  </motion.div>
);
