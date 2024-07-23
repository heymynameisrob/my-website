"use client";
import React from "react";
import useSWR from "swr";
import AnimText from "@/components/staggered-text";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn, fetcher } from "@/lib/utils";

export const NowPlayingInline = () => {
  const { data } = useSWR("/api/spotify", fetcher);

  if (!data?.isPlaying) return null;

  const albumArtist = `${data?.album} by ${data?.artist}. `;

  return (
    <>
      <AnimText>Right now, I'm listening to</AnimText>
      <div className="inline-block animate-in fade-in duration-150 delay-200 md:translate-y-4">
        <a
          href={data.songUrl}
          rel="noopener nofollow"
          target="_blank"
          className={cn(
            "inline-block shrink-0 w-8 h-8 bg-background sm:rounded-md rounded-2xl mx-2 md:mx-4 md:w-16 md:h-16",
            data.isPlaying && "animate-spotify",
          )}
        >
          <Avatar
            className={cn(
              "w-8 h-8 md:w-16 md:h-16 rounded-2xl scale-100 ease duration-150 hover:scale-125",
              data.isPlaying &&
                "ring-2 ring-offset-2 ring-offset-background ring-green-500",
            )}
          >
            <AvatarImage src={data?.albumImage} className="object-cover" />
          </Avatar>
        </a>
      </div>
      <AnimText delay={1}>{albumArtist}</AnimText>
    </>
  );
};
