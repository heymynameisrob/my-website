"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { Section } from "@/components/section";

export const HomeBio = () => (
  <Section delay={0.2}>
    <p className="font-medium">Bio</p>
    <p className="text-secondary font-serif tracking-normal">
      I design and build professional software. For 10 years, I've worked mostly
      with early-stage startups, particularly in healthcare and life science but
      also in B2B and ecommerce among others.
    </p>
    <p className="text-secondary font-serif tracking-normal">
      Away from the screen, I like to travel. Particularly on motorcycles or via
      camper van. I also enjoy hiking, collecting records, and reading. I live
      in Nottingham with my wife, Harriet and my rabbit, Daisy.
    </p>
  </Section>
);
