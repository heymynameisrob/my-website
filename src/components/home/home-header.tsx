"use client";
import { NowPlaying } from "@/components/now-playing/now-playing";
import { Section } from "@/components/section";

export const HomeHeader = () => (
  <Section className="py-2 flex flex-col gap-4">
    <NowPlaying />
    <div className="flex flex-col gap-1 md:gap-0">
      <h1 className="font-medium !text-base">Hey my name is Rob ✌️</h1>
      <h2 className="text-secondary !text-base">
        Product Designer. Currently on sabbatical 🌴
      </h2>
    </div>
  </Section>
);
