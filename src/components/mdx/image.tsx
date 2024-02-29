"use client";
import NextImage from "next/image";

export const Image = ({
  src,
  title,
  ...props
}: {
  src: string;
  title: string;
}) => (
  <div className="w-full rounded-lg overflow-hidden border border-primary my-[2em]">
    <NextImage
      src={src}
      loading="lazy"
      alt="title"
      {...props}
      className="object-fit object-cover m-0"
    />
  </div>
);
