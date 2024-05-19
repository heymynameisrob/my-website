"use client";
import { ListItem } from "@/components/list-item";
import { Section } from "@/components/section";

export const HomeRecent = () => (
  <Section delay={0.5}>
    <p className="font-medium">Recent work</p>
    <ListItem label="Now">
      <div className="flex flex-col gap-1">
        <p className="font-medium text-base">Sabbatical</p>
        <small className="text-secondary opacity-80">Taking time off</small>
      </div>
      <p className="font-serif text-secondary">
        Me and my wife are taking 3 months off to travel Europe in our
        campervan.
      </p>
    </ListItem>
    <ListItem label="23 –">
      <div className="flex flex-col gap-1">
        <a
          href="https://pilcrow.xyz"
          rel="noopener noreferrer"
          className="font-medium text-base underline"
        >
          Pilcrow
        </a>
        <small className="text-secondary opacity-80">
          Personal knowledge management tool with AI sprinkles.
        </small>
      </div>
      <p className="font-serif text-secondary">
        I built Pilcrow as a side project to help me keep track of my thoughts.
        It's now spiralled into a full PKM-style tool with a twist.
      </p>
    </ListItem>
    <ListItem label="22 – 24">
      <div className="flex flex-col gap-1">
        <a
          href="https://lantum.com"
          rel="noopener noreferrer"
          className="font-medium text-base underline"
        >
          Lantum
        </a>
        <small className="text-secondary opacity-80">
          Head of Design, Series B healthtech startup working with the NHS
        </small>
      </div>
      <p className="font-serif text-secondary">
        I lead design here, helping Lantum move into new markets such as the US
        and Secondary Care. I built several successful products and a thriving
        design practice. Left to go on sabbatical.
      </p>
    </ListItem>
    <ListItem label="20 – 22">
      <div className="flex flex-col gap-1">
        <a
          href="https://nuom.studio"
          rel="noopener noreferrer"
          className="font-medium text-base underline"
        >
          nuom
        </a>
        <small className="text-secondary opacity-80">
          Design Lead, Award-winning UX agency workin in pharma and life science
        </small>
      </div>
      <p className="font-serif text-secondary">
        I helped pivot this agency to an expert life science and pharma agency
        during the pandemic. Launch various products including an ML talk
        therapy app with Microsoft.
      </p>
    </ListItem>
  </Section>
);
