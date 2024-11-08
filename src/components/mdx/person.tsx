"use client";

import {
  AvatarContainer,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export const Person = ({ name, src, href }: any) => (
  <a
    href={href}
    target="_blank"
    rel="noopener nofollow"
    className="inline-flex items-baseline gap-1 px-2 h-8 rounded-full no-underline group hover:underline"
  >
    <AvatarContainer className="relative top-1 size-6">
      <AvatarImage
        src={src}
        className="!m-0 size-6 filter grayscale group-hover:grayscale-0"
        alt={name}
      />
      <AvatarFallback>{name.slice(0, 1)}</AvatarFallback>
    </AvatarContainer>
    <small className="font-medium !text-[1rem] text-primary no-underline">
      {name}
    </small>
  </a>
);
