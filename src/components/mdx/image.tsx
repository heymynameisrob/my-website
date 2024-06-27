"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import NextImage from "next/image";

export const Image = ({
  src,
  title,
  ratio,
  className,
  ...props
}: {
  src: string;
  title: string;
  ratio?: number;
  className?: string;
}) => (  
  <AspectRatio ratio={4/3} className="rounded-md overflow-hidden border border-primary my-[2em]">
    <img
      src={src}      
      alt={title}      
      loading="lazy"      
      className={cn("mt-0", className)}  
    />
  </AspectRatio>  
);
