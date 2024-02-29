"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Player } from "video-react";

export const VideoPlayer = ({
  src,
  title,
  ...props
}: {
  src: string;
  title: string;
}) => (
  <AspectRatio
    ratio={1.777 / 1}
    className="w-full rounded-lg overflow-hidden border border-primary"
  >
    <video
      controls
      playsInline
      preload="metadata"
      {...props}
      className="absolute inset-0 w-full h-full object-fit object-cover m-0"
    >
      <source src={src} type="video/mp4" />
    </video>
  </AspectRatio>
);
