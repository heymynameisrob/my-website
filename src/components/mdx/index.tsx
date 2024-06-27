import { Prose } from "@/components/prose";
import { MDXRemote } from "next-mdx-remote/rsc";

import { VideoPlayer } from "@/components/mdx/video";
import { Image } from "@/components/mdx/image";
import options from "@/components/mdx/extensions";

export const MDX = ({ content }: { content: string }) => (
  <Prose>
    <MDXRemote
      source={content}
      components={{ VideoPlayer, Image }}
      // @ts-ignore
      options={options}
    />
  </Prose>
);
