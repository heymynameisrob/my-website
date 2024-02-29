"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";

export const Latest = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.4,
        duration: 0.15,
        ease: [0.4, 0, 0.2, 1],
        type: "tween",
      }}
    >
      <div className="flex flex-col gap-4 lg:gap-6">
        <p className="font-medium">Projects</p>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((item, index) => (
            <motion.a
              key={item.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + 0.15 * index,
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
                type: "tween",
              }}
              href={item.url}
              className={cn(
                "flex items-center justify-between p-4 rounded-lg bg-background hover:bg-ui -ml-4 group",
                "hover:bg-ui focus:bg-ui focus:outline-none focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                "dark:focus:bg-white/10 dark:focus:shadow-[inset_0px_1px_0px_hsla(0_,0%_,100%_,.02)_,inset_0px_0px_0px_1px_hsla(0_,0%_,100%_,.02)_,0px_1px_2px_rgba(0_,0_,0_,.12)_,0px_2px_4px_rgba(0_,0_,0_,.08)_,0px_0px_0px_0.5px_rgba(0_,0_,0_,.24)]",
                "dark:hover:bg-white/10 dark:hover:shadow-[inset_0px_1px_0px_hsla(0_,0%_,100%_,.02)_,inset_0px_0px_0px_1px_hsla(0_,0%_,100%_,.02)_,0px_1px_2px_rgba(0_,0_,0_,.12)_,0px_2px_4px_rgba(0_,0_,0_,.08)_,0px_0px_0px_0.5px_rgba(0_,0_,0_,.24)]",
              )}
            >
              <div className="flex flex-col">
                <p className="font-medium">{item.title}</p>
                <p className="text-secondary max-w-[75%]">{item.description}</p>
              </div>
              <ArrowRight
                size={16}
                className="w-6 h-6 text-secondary opacity-0 -translate-x-5 duration-75 ease-in group-hover:opacity-100 group-hover:translate-x-0"
              />
            </motion.a>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
