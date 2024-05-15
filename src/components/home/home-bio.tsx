"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";

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
    className="w-full max-w-[85%] space-y-3"
  >
    <p className="font-medium">About</p>
    <p className="text-secondary">
     I design and build professional software. Mostly for early-stage startups, particularly in healthcare and life science - but also in B2B and ecommerce amongst others. Recently, I lead design at <a href="https://lantum.com" rel="noopener noreferrer" target="_blank" className="underline text-accent">Lantum</a>.
    </p>
    <p className="text-secondary">
      Away from the screen, I like to travel. Particularly on motorcycles or via
      camper van. I also enjoy hiking, collecting records, and reading. I live in Nottingham with my wife, Harriet and my rabbit, Daisy.
    </p>
    <Button size="sm" variant="accent" asChild className="!mt-6 gap-2">      
      <a href="mailto:robhough@hey.com">
        <EnvelopeOpenIcon />
        Contact me
        </a>
    </Button>
  </motion.div>
);
