"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export const NowPlayingAvatar = ({ isPlaying }: { isPlaying: boolean }) => (
  <div
    className={cn(
      "w-20 h-20 bg-background rounded-full",
      isPlaying && "animate-spotify",
    )}
  >
    <Avatar
      className={cn(
        "w-20 h-20",
        isPlaying &&
          "ring-2 ring-offset-2 ring-offset-background ring-green-500",
      )}
    >
      <AvatarImage src={"./me.jpg"} className="object-cover" />
      <AvatarFallback>RH</AvatarFallback>
    </Avatar>
  </div>
);
