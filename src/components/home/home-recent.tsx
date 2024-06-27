"use client";
import { ListItem } from "@/components/list-item";
import { Section } from "@/components/section";
import { ArrowUpRight } from "lucide-react";

export const HomeRecent = () => (
  <Section delay={0.5}>
    <div className="pb-2">
      <p className="font-medium">Work 💪</p>
    </div>
    <ListItem label="Now">
      <div className="flex flex-col gap-2">
        <p className="font-medium text-base">Sabbatical</p>
      </div>
      <p className="font-sans text-secondary">
        Me and my wife are taking 3 months off to travel Europe in our
        campervan. Currently, we're in Croatia 🇭🇷.
      </p>
    </ListItem>
    <ListItem label="2022 – 2024">
      <div className="flex flex-col gap-2">
        <a
          href="https://lantum.com"
          rel="noopener noreferrer"
          className="font-medium text-base underline inline-flex items-center gap-1"
        >
          Lantum
          <ArrowUpRight size={15} strokeWidth={1.5} />
        </a>
      </div>
      <p className="font-sans text-secondary">
        As Head of Design, I worked to launch Lantum into Secondary Care
        (Hospitals) in the UK and US. I lead a design team and worked on the
        product vision. Projects included AI-assisted rota scheduling, full rota
        team view, and shift swapping.
      </p>
    </ListItem>
    <ListItem label="2020 – 2022">
      <div className="flex flex-col gap-2">
        <a
          href="https://nuom.studio"
          rel="noopener noreferrer"
          className="font-medium text-base underline inline-flex items-center gap-1"
        >
          nuom
          <ArrowUpRight size={15} strokeWidth={1.5} />
        </a>
      </div>
      <p className="font-sans text-secondary">
        I lead design, particulary on new product work, at this award-winning UX
        agency specialising in life science and pharma work during the pandemic.
        Projects included an ML talk therapy app with Microsoft, NHS data
        analysis tools, and pharma trial recruitment applications.
      </p>
    </ListItem>
    <ListItem label="2018 – 2020">
      <div className="flex flex-col gap-2">
        <a
          href="https://waitrose.com"
          rel="noopener noreferrer"
          className="font-medium text-base underline inline-flex items-center gap-1"
        >
          Waitrose
          <ArrowUpRight size={15} strokeWidth={1.5} />
        </a>
      </div>
      <p className="font-sans text-secondary">
        As Senior Designer contractor, primarily on the Grocery app experience.
        I worked on the main checkout experience, helping to improve the
        customer satisfaction rating as well as building out the WDX design
        system.
      </p>
    </ListItem>
  </Section>
);
