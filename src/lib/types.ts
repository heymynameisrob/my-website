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
    isHidden: boolean;
  };
};

export type Project = {
  slug?: string;
  title: string;
  description: string;
  image_url: string;
  video_url?: string;
  date: string;
  ratio?: number;
  isExternal: boolean;
  externalLink?: string;
};
