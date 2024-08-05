"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";

export const VideoPlayer = ({
  title,
  src,
  ratio,
  ...props
}: {
  title: string;
  src: string;
  ratio?: number;
}) => (
  <a
    href={src}
    target="_blank"
    rel="noopener nofollow"
    className="block no-underline"
  >
    <figure className="flex flex-col justify-center gap-1">
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
          aria-label={title}
          {...props}
          className="absolute inset-0 w-full h-full object-fit object-cover !m-0"
        >
          <source src={src} type="video/mp4" />
        </video>
      </AspectRatio>
      <figcaption className="text-center text-sm text-secondary">
        {title}
      </figcaption>
    </figure>
  </a>
);
