"use client";
import { Prose } from "@/components/prose";
import { MDXRemote } from "next-mdx-remote/rsc";

import { VideoPlayer } from "@/components/mdx/video";
import { Image } from "@/components/mdx/image";
import { Button } from "@/components/ui/button";
import {
  CodeBlock,
  CodeBlockPreview,
  CodeBlockCaption,
} from "@/components/mdx/code-block";
import { PilcrowSearch } from "@/components/portfolio/examples/pilcrow-search";
import options from "@/components/mdx/extensions";

export const MDX = ({ content }: { content: string }) => {
  return (
    <Prose>
      {/* @ts-ignore */}
      <MDXRemote
        source={content}
        components={{
          VideoPlayer,
          Image,
          Button,
          CodeBlock,
          CodeBlockPreview,
          CodeBlockCaption,
          PilcrowSearch,
        }}
        // @ts-ignore
        options={options}
      />
    </Prose>
  );
};
