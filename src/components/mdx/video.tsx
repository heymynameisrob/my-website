"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";

export const VideoPlayer = ({
  src,
  ratio,
  ...props
}: {
  src: string;
  ratio?: number;
}) => (
  <AspectRatio
    ratio={ratio || 1.777 / 1}
    className="w-full rounded-lg overflow-hidden border border-primary"
  >
    <video
      controls={false}
      playsInline
      autoPlay
      muted
      loop
      preload="metadata"
      {...props}
      className="absolute inset-0 w-full h-full object-fit object-cover m-0"
    >
      <source src={src} type="video/mp4" />
    </video>
  </AspectRatio>
);
