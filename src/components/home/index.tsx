"use client";
import React from "react";
import useSWR from "swr";
import Link from "next/link";
import { useHotkeys } from "react-hotkeys-hook";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { NowPlayingInline } from "@/components/now-playing/now-playing-inline";
import AnimText from "@/components/anim-text";
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { fetcher } from "@/lib/utils";

export const HomeText = () => {
  const MAX_STEPS = 7;
  const [step, setStep] = React.useState(0);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  useHotkeys("space", handleNextStep, {
    enabled: step < MAX_STEPS,
    preventDefault: true,
  });

  const { data } = useSWR("/api/spotify", fetcher);

  const isPlaying = data?.isPlaying;

  return (
    <MotionConfig transition={{ duration: 0.3, type: "spring", bounce: 0 }}>
      <div className="home-headline w-full text-primary animate-in fade-in duration-150">
        {step >= 0 && (
          <AnimatePresence mode="popLayout">
            <AnimText delay={0}>Hey my name is Rob</AnimText>
            <motion.a
              href="https://ucarecdn.com/f3240935-e57c-47c5-b184-2d1094899ccf/"
              rel="noopener nofollow"
              initial={{ rotate: "35deg", opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="relative top-3 shrink-0 w-8 h-8 rounded-full inline-flex items-center translate-y-2 mx-3 md:w-12 md:h-12 ring-2 ring-primary ring-offset-2 ring-offset-background"
            >
              <img
                src="https://ucarecdn.com/f3240935-e57c-47c5-b184-2d1094899ccf/-/preview/100x100/"
                alt="Rob Hough"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.a>
          </AnimatePresence>
        )}
        {step >= 1 && (
          <>
            <AnimText>
              I'm a product design engineer working mainly with B2B startups
            </AnimText>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="inline-flex"
            >
              <div className="inline-flex items-center font-serif font-medium text-primary leading-none mx-2 px-2 py-1 size-8 md:size-12 rounded-full bg-ui md:text-3xl">
                <motion.span
                  layoutId="rocket"
                  initial={{ y: 15, x: -15, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, x: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: 15, x: -15, opacity: 0, filter: "blur(4px)" }}
                  transition={{ delay: 1.3 }}
                >
                  🚀
                </motion.span>
              </div>
            </motion.div>
          </>
        )}
        {step >= 2 && (
          <>
            <AnimText>Check out some of my work</AnimText>
            <motion.div
              initial={{ y: 15, opacity: 0, filter: "blur(4px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 1 }}
              className="inline-flex items-center text-primary leading-none mx-2 px-3 py-1 h-8 md:h-12 rounded-full bg-ui md:text-3xl hover:bg-ui-mid"
            >
              <Link href="/portfolio">here</Link>
            </motion.div>
          </>
        )}
        {step >= 3 && (
          <>
            <AnimText>I live in the UK with my wife Harriet</AnimText>
            <div className="inline-flex shrink-0 rotate-3">
              <motion.a
                href="https://ucarecdn.com/508485b5-b16b-47f6-b41e-2ef72f25f0ed/"
                rel="noopener nofollow"
                initial={{ y: 15, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 1 }}
                className="relative top-3 shrink-0 w-8 h-8 rounded-sm items-center mx-3 md:w-12 md:h-12 p-1 pb-4 border border-black/5 bg-[#fcfcf3] shadow-md"
              >
                <img
                  src="https://ucarecdn.com/508485b5-b16b-47f6-b41e-2ef72f25f0ed/-/preview/360x480/"
                  alt="Harriet Goodman, my wife"
                  className="w-full h-full object-cover shadow-[0_0_0_0.5px_rgba(0,_0,_0,_0.1)]"
                />
              </motion.a>
            </div>
            <AnimText delay={1.1}>and dog, Oggie</AnimText>
            <div className="inline-flex shrink-0 -rotate-3">
              <motion.a
                href="https://ucarecdn.com/06470c4a-f731-4741-ba48-894ef277f1f2/"
                rel="noopener nofollow"
                initial={{ y: -15, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 2.2 }}
                className="relative top-3 shrink-0 w-8 h-8 rounded-sm items-center mx-3 md:w-12 md:h-12 p-1 pb-4 border border-black/5 bg-[#fcfcf3] shadow-md"
              >
                <img
                  src="https://ucarecdn.com/06470c4a-f731-4741-ba48-894ef277f1f2/-/preview/750x1000/"
                  alt="Oggie the Jack Russell"
                  className="w-full h-full object-cover shadow-[0_0_0_0.5px_rgba(0,_0,_0,_0.1)]"
                />
              </motion.a>
            </div>
          </>
        )}
        {step >= 4 && (
          <>
            <AnimText> I'm currently</AnimText>
            <motion.div
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.2 }}
              className="inline-flex"
            >
              <motion.a
                href="https://meet.risecalendar.com/robhough/chat-to-me"
                className="inline-flex text-primary leading-none mx-2 px-3 py-1 rounded-full bg-green-400 text-green-900 hover:bg-green-500 active:scale-95 md:text-3xl"
              >
                available
              </motion.a>
            </motion.div>
            <AnimText delay={1.2}>for work. </AnimText>
          </>
        )}
        {step >= 5 && (
          <>
            <AnimText>
              I also love riding my motorcycle and collecting records.
            </AnimText>
          </>
        )}
        {isPlaying && step >= 6 && <NowPlayingInline data={data} />}
        {step >= (isPlaying ? 7 : 6) && (
          <>
            <AnimText> You can find me on</AnimText>
            <div className="inline-flex items-center gap-2 mx-2">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="inline-flex"
              >
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com/heymynameisrob"
                  rel="noopener nofollow"
                  target="_blank"
                  className="inline-flex items-center font-serif font-medium text-primary leading-none px-2 py-1 rounded-full bg-ui size-8 md:size-12 md:text-3xl"
                >
                  <GitHubLogoIcon className="size-5 md:size-8" />
                </motion.a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="inline-flex"
              >
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://instagram.com/heymynameisrob0"
                  rel="noopener nofollow"
                  target="_blank"
                  className="inline-flex items-center font-serif font-medium text-primary leading-none px-2 py-1 rounded-full bg-ui size-8 md:size-12 md:text-3xl"
                >
                  <InstagramLogoIcon className="size-5 md:size-8" />
                </motion.a>
              </motion.div>
            </div>
          </>
        )}
        {step < (isPlaying ? MAX_STEPS : MAX_STEPS - 1) && (
          <motion.button
            onClick={handleNextStep}
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center leading-none font-mono tracking-wide uppercase text-secondary align-middle px-2 h-6 mx-2 rounded border border-b-2 border-primary bg-black/10 transition-all duration-150 ease dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 active:scale-95 active:border-b"
          >
            SPACE
          </motion.button>
        )}
      </div>
    </MotionConfig>
  );
};
