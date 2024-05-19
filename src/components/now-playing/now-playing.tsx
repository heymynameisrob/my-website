"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { NowPlayingIcon } from "@/components/icons/now-playing";
import { NowPlayingAvatar } from "@/components/now-playing/now-playing-avatar";
import { fetcher } from "@/lib/utils";

export const NowPlaying = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const { data, isLoading } = useSWR("/api/spotify", fetcher);

  useEffect(() => {
    if (data?.isPlaying) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [data]);

  if (isLoading) return <NowPlayingAvatar isPlaying={false} />;

  if (!data?.isPlaying) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full py-1 px-2 bg-ui z-10 border-t border-primary flex flex-row items-center justify-between gap-4">
      <a href={data.songUrl} rel="noopener nofollow" target="_blank" className="flex flex-row items-center gap-4">
        <Image
          src={data?.albumImage}
          alt={data?.album}
          width={24}
          height={24}
          className="rounded-sm w-6 h-6"
        />
        <div className="flex flex-row items-baseline gap-2 w-full">
          <small className="font-mono uppercase !text-xs text-nowrap overflow-hidden text-ellipsis">
            {data?.title}
          </small>
          <small className="w-24 font-mono uppercase text-secondary !text-xs text-nowrap overflow-hidden text-ellipsis md:w-auto">
            / {data?.artist}
          </small>
        </div>
      </a>
      <div className="p-2 grid place-items-center">
        <NowPlayingIcon />
      </div>
    </div>
  );
};
