import { Link } from "@/lib/types";
import { getYear } from "@/lib/utils";

export const LINKS: Array<Link> = [
  {
    id: "001",
    title: "Pilcrow",
    description: "Notion-like, AI-sprinkled writing app",
    url: "https://pilcrow.xyz",
    date: getYear(),
  },
  {
    id: "002",
    title: "Lantum iOS & Android",
    description: "Companion for busy clinicians",
    url: "https://lantum.com",
    date: getYear(2023),
  },
  {
    id: "003",
    title: "TrialConX.com",
    description: "Landing page for clinical recruitment platform",
    url: "https://trialconx.com",
    date: getYear(2022),
  },
  {
    id: "004",
    title: "Talk It Out",
    description: "ML powered voice journaling app",
    url: "https://apps.apple.com/gb/app/talk-it-out/id1554393308",
    date: getYear(2021),
  },
  {
    id: "005",
    title: "The Indytute",
    description: "Curated experiences in London",
    url: "https://indytute.com",
    date: getYear(2020),
  },
  {
    id: "006",
    title: "Waitrose & Partners",
    description: "Mobile experience for the UK's favourite supermarket",
    url: "https://apps.apple.com/gb/app/talk-it-out/id1554393308",
    date: getYear(2019),
  },
];
