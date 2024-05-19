"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";

export const VideoPlayer = ({ src, ...props }: { src: string }) => (
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
