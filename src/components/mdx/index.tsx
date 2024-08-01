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
import { Person } from "@/components/mdx/person";
import { LantumMenu } from "@/components/portfolio/examples/lantum-menu";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { LantumGrid } from "@/components/portfolio/examples/lantum-grid";
import { LantumBulk } from "@/components/portfolio/examples/lantum-bulk";
import options from "@/components/mdx/extensions";

export const MDX = ({ content }: { content: string }) => {
  return (
    <Prose>
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
          Person,
          LantumMenu,
          Tabs,
          TabsList,
          TabsContent,
          TabsTrigger,
          LantumGrid,
          LantumBulk,
        }}
        // @ts-ignore
        options={options}
      />
    </Prose>
  );
};
