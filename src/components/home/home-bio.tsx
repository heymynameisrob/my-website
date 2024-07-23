"use client";
import React from "react";
import { Section } from "@/components/section";

export const HomeBio = () => (
  <Section delay={0.2}>
    <p className="text-secondary font-sans tracking-normal">
      I design and build professional software. For almost 10 years, I've worked
      mostly with early-stage companies, particularly in B2B SaaS, Health, Life
      Science, and Commerce.
    </p>
    <p className="text-secondary font-sans tracking-normal">
      In that time, I've helped them earn millions by building quality things
      that customers actually want. All of it with purposeful research, robust
      code, and creative and considerate design work. Every inch of that work
      was done with amazing people, who I've learned so much from. <br />{" "}
      <a
        className="text-primary underline"
        href="mailto:robhough@hey.com?subject=Know+anyone+who+can+..."
      >
        Some of them are looking for work.
      </a>
    </p>
    <p className="text-secondary font-sans tracking-normal">
      Away from the screen, I like to travel. Particularly on motorcycles or by
      campervan. I also enjoy hiking, collecting records, and reading. I live in
      the leafy city of Nottingham with my wife, Harriet and my rabbit, Daisy
      (RIP).
    </p>
  </Section>
);
