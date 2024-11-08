"use client";

import React from "react";
import { MotionConfig } from "framer-motion";

import { LinkBadge } from "@/components/link-badge";
import { MagicText } from "@/components/magic-text";
import { FadeIn } from "@/components/motion/fade-in";
import { Avatar } from "@/components/ui/avatar";
import { SocialLinks } from "@/components/social-links";

import { cn } from "@/lib/utils";

export function HomeBio() {
  return (
    <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.4 }}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 md:flex-row-reverse md:justify-end md:items-center">
          <FadeIn delay={0.4}>
            <Avatar src="https://ucarecdn.com/13ed369a-bf01-40cb-a951-d8e4a572f257/-/scale_crop/300x300/" />
          </FadeIn>
          <h1 className="font-serif text-primary !text-[2.25rem] cursor-default md:!leading-none dark:text-white">
            <MagicText title="Hey my name is Rob" />
          </h1>
        </div>
        <section className={cn("flex flex-col gap-4 z-0")}>
          <FadeIn delay={0.6}>
            <p className="text-secondary max-w-prose">
              I'm a design engineer based in the UK. I work alsmost exclusively
              with early-stage, B2B startups. I also ship a few of my own
              products, usually for free. I also like to travel, ride
              motorcycles, and collect records.
            </p>
          </FadeIn>
          <FadeIn delay={0.8}>
            <p className="text-secondary max-w-prose">
              Currently working at{" "}
              <span className="px-1.5">
                <LinkBadge href="https://artificial.io">
                  <span className="flex items-center justify-center w-4 h-4 rounded bg-white">
                    <img
                      src={
                        "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://artificial.io&size=16"
                      }
                      alt="Artificial"
                      className="w-3 h-3 object-fit object-cover rounded"
                    />
                  </span>
                  <small className="font-medium">Artificial</small>
                </LinkBadge>
              </span>
              until January 2025
            </p>
          </FadeIn>
        </section>
        <SocialLinks />
      </div>
    </MotionConfig>
  );
}
