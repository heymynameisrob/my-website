"use client";
import Image from "next/image";
import useSWR from "swr";
import { NowPlayingIcon } from "@/components/icons/now-playing";
import { cn, fetcher } from "@/lib/utils";
import { motion } from "framer-motion";

export const NowPlaying = () => {
  const { data } = useSWR("/api/spotify", fetcher);

  if (!data?.isPlaying) return null;

  return (
    <div className="fixed bottom-4 left-0 w-full z-10 grid place-items-center lg:bottom-6">
      <motion.div
        initial={{
          opacity: 0,
          y: 5,
          filter: "blur(4px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          type: "spring",
          bounce: 0,
          duration: 0.2,
        }}
        className={cn(
          "px-2 h-10 rounded-2xl bg-background inline-flex flex-row items-center justify-between gap-2 dark:bg-ui",
          "shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.06),_0px_103px_29px_0px_rgba(0,_0,_0,_0.01),_0px_66px_26px_0px_rgba(0,_0,_0,_0.01),_0px_37px_22px_0px_rgba(0,_0,_0,_0.02),_0px_16px_16px_0px_rgba(0,_0,_0,_0.06),_0px_4px_9px_0px_rgba(0,_0,_0,_0.06)]",
          "dark:shadow-[0px_1px_0px_0px_rgba(255,_255,_255,_0.10)_inset,_0px_103px_29px_0px_rgba(0,_0,_0,_0.00),_0px_66px_26px_0px_rgba(0,_0,_0,_0.04),_0px_37px_22px_0px_rgba(0,_0,_0,_0.13),_0px_16px_16px_0px_rgba(0,_0,_0,_0.21),_0px_4px_9px_0px_rgba(0,_0,_0,_0.25)]",
          "hover:bg-ui dark:hover:bg-ui-mid",
        )}
      >
        <a
          href={data.songUrl}
          rel="noopener nofollow"
          target="_blank"
          className="flex flex-row items-center gap-2"
        >
          <Image
            src={data?.albumImage}
            alt={data?.album}
            width={24}
            height={24}
            className="rounded-lg w-6 h-6"
          />
          <div className="flex flex-row items-center gap-1 w-full overflow-hidden">
            <small className="!text-xs text-nowrap overflow-hidden text-ellipsis">
              {data?.title}
            </small>
            <small className="!text-xs text-muted">/</small>
            <small className="w-24 text-secondary !text-xs truncate md:w-auto">
              {data?.artist}
            </small>
          </div>
        </a>
        <div className="p-2 grid place-items-center">
          <NowPlayingIcon />
        </div>
      </motion.div>
    </div>
  );
};
