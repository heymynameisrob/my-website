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

  return (
    <HoverCard>
      <HoverCardTrigger>
        <NowPlayingAvatar isPlaying={isPlaying} />
      </HoverCardTrigger>
      <HoverCardContent
        side="right"
        sideOffset={8}
        className="dark w-56 bg-ui border border-primary text-primary rounded-md p-2"
      >
        <div className="flex flex-row items-center justify-between gap-4 w-full">
          <div className="flex flex-row items-center gap-4">
            <Image
              src={data?.albumImage}
              alt={data?.album}
              width={48}
              height={48}
              className="rounded-md w-12 h-12"
            />
            <div className="flex flex-col w-full">
              <small className="font-medium w-24 text-nowrap overflow-hidden text-ellipsis">
                {data?.title}
              </small>
              <small className="w-24 text-nowrap overflow-hidden text-ellipsis">
                {data?.artist}
              </small>
            </div>
          </div>
          <div className="p-2 grid place-items-center">
            <NowPlayingIcon />
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
