"use client";
import { NowPlayingInline } from "@/components/now-playing/now-playing-inline";
import AnimText from "@/components/staggered-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import React from "react";

export const HomeText = () => {
  const MAX_STEPS = 5;
  const [step, setStep] = React.useState(0);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="home-headline w-full text-primary animate-in fade-in duration-150">
      {step >= 0 && (
        <>
          <AnimText delay={0}>Hey my name is Rob</AnimText>
          <Avatar className="shrink-0 w-8 h-8 rounded-full inline-block mx-2 md:mx-4 md:w-16 md:h-16 ring-2 ring-primary ring-offset-2 ring-offset-background scale-100 duration-300 ease-out hover:scale-150">
            <AvatarImage src={"https://ucarecdn.com/f3240935-e57c-47c5-b184-2d1094899ccf/-/preview/100x100/"} className="object-cover" />
            <AvatarFallback>RH</AvatarFallback>
          </Avatar>
        </>
      )}
      {step >= 1 && (
        <AnimText>and I'm a product designer based in the UK 🇬🇧 </AnimText>
      )}
      {step >= 2 && (
        <>
          <AnimText>I'm currently available for work</AnimText>
          <a
            href="mailto:robhough@hey.com?subject=I've+got+a+job+for+ya"
            className={cn(
              "text-[1.5rem] md:text-[2rem] shrink-0 inline-block px-2 py-1 mx-2 md:mx-4 rounded-lg bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20",
              "hover:rainbow",
              "hover:animate-rainbow",
            )}
            target="_blank"
            rel="nofollow noopener"
          >
            Book me ⚡
          </a>
        </>
      )}
      {step >= 3 && (
        <>
          <AnimText>Previously, I lead design at Lantum</AnimText>
          <a
            href="https://lantum.com"
            target="_blank"
            rel="nofollow noopener"
            className="shrink-0 w-8 h-8 rounded-2xl inline-block mx-2 md:mx-4 md:w-16 md:h-16 bg-[#FF44F5] fill-mode-backwards hover:animate-bounce"
          >
            <div className="w-full h-full grid place-items-center">
              <svg
                width="114"
                height="114"
                viewBox="0 0 114 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 md:w-10 md:h-10 text-white"
              >
                <path
                  fill-rule="evenodd"
                  clip-ruleπ="evenodd"
                  d="M103.315 11.5272L113.752 39.1066H113.743C114.311 40.5894 113.92 42.241 112.748 43.3509L39.3865 113.054C37.5539 114.786 34.4375 114.031 33.7118 111.678L0.11042 3.13617C-0.568678 0.934081 2.02678 -0.859556 4.00826 0.436835L65.3318 40.4918C65.7876 40.7937 65.8714 41.3974 65.5179 41.797L59.713 48.3855C59.406 48.7318 58.885 48.8029 58.4943 48.5631L28.1674 29.9253C27.479 29.508 26.6325 30.165 26.9302 30.8843L43.6192 71.836C43.8518 72.3954 44.6332 72.5197 45.0426 72.058L98.9518 10.7902C100.217 9.35174 102.645 9.76019 103.315 11.5272ZM110.013 70.1226C111.483 71.1171 111.613 73.1506 110.264 74.2961L110.255 74.2873L107.687 76.4717C106.748 77.262 105.371 77.3686 104.32 76.7204L93.1563 69.8651C92.6632 69.5543 92.5888 68.8883 93.0074 68.4887L98.496 63.2851C98.8123 62.9832 99.3147 62.9388 99.6868 63.1874L110.013 70.1226Z"
                  fill="#fff"
                />
              </svg>
            </div>
          </a>
        </>
      )}
      {step >= 4 && <NowPlayingInline />}
      {step >= 5 && (
        <>
          <AnimText>You can contact me on</AnimText>
          <a
            href="mailto:robhough@hey.com"
            className={cn(
              "text-[1.5rem] md:text-[2rem] shrink-0 inline-block px-2 py-1 mx-2 md:mx-4 rounded-lg bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20",
              "hover:rainbow",
              "hover:animate-rainbow",
            )}
            target="_blank"
            rel="nofollow noopener"
          >
            robhough@hey.com
          </a>
          <AnimText>or view my Github</AnimText>
          <a
            href="https://github.com/heymynameisrob"
            className={cn(
              "text-[1.5rem] md:text-[2rem] shrink-0 inline-block px-2 py-1 mx-2 md:mx-4 rounded-lg bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20",
              "hover:rainbow",
              "hover:animate-rainbow",
            )}
            target="_blank"
            rel="nofollow noopener"
          >
            @heymynameisrob
          </a>
        </>
      )}
      {step < MAX_STEPS && (
        <button
          onClick={handleNextStep}
          className="inline-block text-primary align-middle px-2 leading-none mx-2 rounded bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 "
        >
          •••
        </button>
      )}
    </div>
  );
};
