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
    className="py-2 flex flex-col gap-6 md:flex-row md:items-center lg:gap-8"
  >
    <NowPlaying />
    <div className="flex flex-col gap-1 md:gap-0">
      <h4 className="font-medium">Hey my name is Rob ✌️</h4>
      <h4 className="text-secondary max-w-[85%]">
        I’m a product designer based in the UK. Currently I lead design at
        Lantum, building workforce software for the NHS.
      </h4>
    </div>
  </motion.div>
);
