import { getYear } from "@/lib/utils";

export const latest = [];

export const projects = [
  {
    id: "lantum",
    title: "Lantum",
    description: "Workforce management software for the NHS",
    url: "https://lantum.com",
    external: true,
    date: getYear(),
  },
  {
    id: "pilcrow",
    title: "Pilcrow",
    description: "Notion-like, AI-sprinkled writing app",
    url: "https://pilcrow.xyz",
    external: true,
    date: getYear(),
  },
  {
    id: "trailconx",
    title: "TrialConX.com",
    description: "Landing page for clinical recruitment platform",
    url: "https://trialconx.com",
    external: true,
    date: getYear(2022),
  },
  {
    id: "indytute",
    title: "The Indytute",
    description: "Curated experiences in London",
    url: "https://indytute.com",
    external: true,
    date: getYear(2020),
  },
];

export const writing = [
  {
    id: "pilcrow",
    title: "Pilcrow",
    description: "Notion-like, AI-sprinkled writing app",
    url: "https://pilcrow.xyz",
    external: true,
    date: getYear(),
  },
  {
    id: "trailconx",
    title: "TrialConX.com",
    description: "Landing page for clinical recruitment platform",
    url: "https://trialconx.com",
    external: true,
    date: getYear(2022),
  },
  {
    id: "indytute",
    title: "The Indytute",
    description: "Curated experiences in London",
    url: "https://indytute.com",
    external: true,
    date: getYear(2020),
  },
];
