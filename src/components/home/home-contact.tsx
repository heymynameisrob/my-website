"use client";

import { ListItem } from "@/components/list-item";
import { Section } from "@/components/section";
import { ArrowUpRight } from "lucide-react";

export const HomeContact = () => (
  <Section delay={0.3}>
    <div className="pb-2">
      <p className="font-medium">Contact 👋</p>
    </div>
    <ListItem label="Email">
      <a
        rel="noopener noreferrer"
        className="font-medium text-base underline inline-flex items-center gap-1"
        href="mailto:robhough@hey.com"
      >
        robhough@hey.com
        <ArrowUpRight size={15} strokeWidth={1.5} />
      </a>
    </ListItem>
    <ListItem label="Github">
      <a
        rel="noopener noreferrer"
        className="font-medium text-base underline inline-flex items-center gap-1"
        href="https://github.com/heymynameisrob"
      >
        @heymynameisrob
        <ArrowUpRight size={15} strokeWidth={1.5} />
      </a>
    </ListItem>
    <ListItem label="Linkedin">
      <a
        href="https://linkedin.com/in/heymynameisrob"
        rel="noopener noreferrer"
        className="font-medium text-base underline inline-flex items-center gap-1"
      >
        @heymynameisrob
        <ArrowUpRight size={15} strokeWidth={1.5} />
      </a>
    </ListItem>
  </Section>
);
