"use client";
import { cn } from "@/lib/utils";
import NextImage from "next/image";

export const Image = ({
  src,
  title,
  width,
  height,
  className,
}: {
  src: string;
  title: string;
  ratio?: number;
  className?: string;
  width?: number;
  height?: number;
}) => (
  <a href={src} className="flex flex-col gap-4 my-[2em] no-underline">
    <NextImage
      src={`${src}-/preview/${width}x${height}/`}
      alt={title}
      width={width}
      height={height}
      loading="lazy"
      className={cn("rounded mt-0 !m-0", className)}
    />
    <span className="text-xs max-w-[75%] mx-auto text-secondary text-center">
      {title}
    </span>
  </a>
);
