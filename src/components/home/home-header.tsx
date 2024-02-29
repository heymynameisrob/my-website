"use client";
import { motion } from "framer-motion";
import { NowPlaying } from "@/components/now-playing/now-playing";

export const HomeHeader = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
      type: "tween",
    }}
    className="py-2 flex flex-col gap-6 lg:gap-8"
  >
    <div className="flex">
      <NowPlaying />
    </div>
    <div className="flex flex-col gap-4 lg:gap-6 max-w-[87%]">
      <p className="font-medium">Hey, my name is Rob 👋</p>
      <p className="text-secondary">
        I&apos;m a product designer based in the UK. I&apos;ve been practicing design for
        around 10 years, spending most of that time getting new products off the
        ground.
      </p>
      <p className="text-secondary">
        Currently, I&apos;m leading design at Lantum where I work on workforce
        management tools for healthcare providers.
      </p>
      <p className="text-secondary">
        Away from the screen, I like to travel. Particularly on motorcycles and
        in my camper van. I also enjoy hiking, collecting records, and playing
        guitar. I live in Nottingham with my wife, Harriet and my rabbit, Daisy.
      </p>
    </div>
  </motion.div>
);
