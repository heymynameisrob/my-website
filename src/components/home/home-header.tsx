"use client";
import Image from "next/image";
import { Section } from "@/components/section";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { randomNumberFromInterval } from "@/lib/utils";

export const HomeHeader = () => (
  <Section className="py-0 flex flex-row justify-between items-center gap-4 pb-24">
    <div className="flex flex-col gap-1 md:gap-0">
      <HoverCard>
        <HoverCardTrigger asChild>
          <h1 className="font-medium cursor-default !text-base">
            Hey my name is Rob ✌️
          </h1>
        </HoverCardTrigger>
        <HoverCardContent>
          <AspectRatio ratio={3 / 4}>
            <Image
              src={`/images/me-${randomNumberFromInterval(1, 4)}.png`}
              alt="It's a me!"
              layout="fill"
              objectFit="cover"
              loading="eager"
              className="absolute inset-0"
            />
          </AspectRatio>
        </HoverCardContent>
      </HoverCard>
      <h2 className="text-secondary !text-base">
        Product Designer. Currently on sabbatical. 🌴
      </h2>
    </div>
  </Section>
);
