"use client";

import { motion } from "framer-motion";
import { MagicText } from "@/components/magic-text";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
  return (
    <div className="py-12 px-4 flex justify-center items-start flex-col md:px-12 md:py-12 lg:py-16">
      <h1 className="font-serif text-primary !text-[2.25rem] md:!leading-none dark:text-white">
        <MagicText title="Latest work" />
      </h1>
      <div className="flex flex-row items-center gap-1">
        <p className="font-sans text-secondary">
          <MagicText delay={0.5} title="A catalogue of recent work by" />
        </p>
        <motion.div
          className="inline-flex gap-2"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.5, type: "spring", bounce: 0 }}
        >
          <a
            href="https://meet.risecalendar.com/robhough/chat-to-me"
            rel="noopener nofollow"
            target="_blank"
            className="flex justify-center items-center gap-2 px-2 py-1 rounded-full bg-ui hover:bg-ui-mid active:scale-95"
          >
            <Avatar className="size-6 rounded-full">
              <AvatarImage
                src="https://ucarecdn.com/f3240935-e57c-47c5-b184-2d1094899ccf/-/preview/100x100/"
                alt="Rob Hough"
                className="w-full h-full object-cover rounded-full"
              />
            </Avatar>
            <span className="text-primary font-medium !text-sm">
              heymynameisrob
            </span>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 2, type: "spring", bounce: 0 }}
          className="inline-flex self-center text-secondary"
        >
          <div
            title="Only possible by working with people much smarter than himself"
            aria-label="Only possible by working with people much smarter than himself"
            data-microtip-position="right"
            role="tooltip"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
