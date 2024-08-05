"use client";
import React from "react";
import { motion } from "framer-motion";
import AnimText from "@/components/anim-text";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

import type { Spotify } from "@/app/api/spotify/route";

export const NowPlayingInline = ({ data }: { data: Spotify | null }) => {
  if (!data) return null;

  const albumArtist = `${data?.album} by ${data?.artist}. `;

  return (
    <>
      <AnimText>Currently, I'm listening to</AnimText>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="inline-block duration-150 delay-200 md:translate-y-4"
      >
        <a
          href={data.songUrl}
          rel="noopener nofollow"
          target="_blank"
          className={cn(
            "inline-block shrink-0 bg-background sm:rounded-md rounded-xl mx-3 size-8 md:size-12",
            data.isPlaying && "animate-spotify",
          )}
        >
          <Avatar
            className={cn(
              "size-8 md:size-12 rounded-xl scale-100 ease duration-150 hover:scale-125",
              data.isPlaying &&
                "ring-2 ring-offset-2 ring-offset-background ring-green-500",
            )}
          >
            <AvatarImage src={data?.albumImage} className="object-cover" />
          </Avatar>
        </a>
      </motion.div>
      <AnimText delay={1.2}>{albumArtist}</AnimText>
    </>
  );
};
