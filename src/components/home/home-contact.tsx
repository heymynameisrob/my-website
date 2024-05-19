"use client";

import { ListItem } from "@/components/list-item";
import { Section } from "@/components/section";

export const HomeContact = () => (
  <Section delay={0.3}>
    <p className="font-medium">Contact</p>
    <ListItem label="Email">
      <a className="underline" href="mailto:robhough@hey.com">
        robhough@hey.com
      </a>
    </ListItem>
    <ListItem label="Github">
      <a
        className="underline"
        href="https://github.com/heymynameisrob"
        rel="noopener noreferrer"
      >
        @heymynameisrob
      </a>
    </ListItem>
    <ListItem label="Linkedin">
      <a
        className="underline"
        href="https://linkedin.com/in/heymynameisrob"
        rel="noopener noreferrer"
      >
        @heymynameisrob
      </a>
    </ListItem>
  </Section>
);
