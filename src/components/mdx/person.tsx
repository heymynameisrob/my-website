"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Person = ({ name, src, href }: any) => (
  <a
    href={href}
    target="_blank"
    rel="noopener nofollow"
    className="inline-flex items-baseline gap-1 px-2 h-8 rounded-full no-underline group hover:underline"
  >
    <Avatar className="relative top-1 size-6">
      <AvatarImage
        className="!m-0 size-6 filter grayscale group-hover:grayscale-0"
        src={src}
        alt={name}
      />
      <AvatarFallback>{name.slice(0, 1)}</AvatarFallback>
    </Avatar>
    <small className="font-medium !text-[1rem] text-primary no-underline">
      {name}
    </small>
  </a>
);
