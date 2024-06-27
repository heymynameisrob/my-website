"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

export const Image = ({
  src,
  title,
  ratio,
  className,  
}: {
  src: string;
  title: string;
  ratio?: number;
  className?: string;
}) => (
  <AspectRatio
    ratio={ratio || (4 / 3)}
    className="rounded-md overflow-hidden border border-primary my-[2em]"
  >
    <img
      src={src}
      alt={title}
      loading="lazy"
      className={cn("mt-0", className)}
    />
  </AspectRatio>
);
