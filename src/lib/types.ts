import { isExternal } from "util/types";

export type Link = {
  id: string;
  url: string;
  date: string;
  title: string;
  description: string;
  emoji?: string;
};

export type Song = {
  albumImage: string;
  album: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type Post = {
  slug?: string;
  content?: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    category?: string;
    canonical?: string;
    image_url?: string;
    video_url?: string;
    ratio?: number;
    isHidden?: boolean;
    isProject?: boolean;
    isExternal?: boolean;
    externalLink?: string;
  };
};

export type PostFrontmatter = Post["frontmatter"];
