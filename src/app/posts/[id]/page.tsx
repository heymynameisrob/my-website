import fs from "fs";
import path from "path";
import matter from "gray-matter";
import moment from "moment";

import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { PostIsland } from "@/components/posts/post-island";
import { GridLine } from "@/components/grid-line";

import { VideoPlayer } from "@/components/mdx/video";
import { Image } from "@/components/mdx/image";
import options from "@/components/mdx/extensions";

import { cn } from "@/lib/utils";

/**
 * Get the post with the given ID
 * Search markdown files in the /posts folder
 */
async function getPost(slug: string) {
  try {
    const dir = path.join(process.cwd(), "public/posts");
    const postPath = path.join(dir, `${slug}.mdx`);
    const fileName = fs.readFileSync(postPath, "utf-8");
    const { data: frontmatter, content } = matter(fileName);

    return { frontmatter, content };
  } catch (error) {
    return { error };
  }
}

export async function generateMetadata({ params }: any) {
  const { frontmatter } = await getPost(params);

  return {
    title: frontmatter?.title || "heymynameisrob",
    description: frontmatter?.description || "My website",
  };
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const { frontmatter, content, error } = await getPost(params.id);

  if (error || !frontmatter || !content) {
    // Assume that the error is that the file doesn't exist
    console.log(error);
    return notFound();
  }

  return (
    <>
      <div className="fixed inset-0 z-50 bg-gradient-to-b from-background to-transparent h-[64px] w-full" />
      <div className="prose max-w-2xl mx-auto px-4 py-20 lg:py-28 xl:py-32">
        <GridLine orientation="y" align="left" offset={32} />
        <div className="flex flex-col mb-8 xl:mb-10">
          <h1 className="text-base font-medium tracking-tight mb-0 xl:text-lg">
            {frontmatter.title}
          </h1>
          <time className="text-base text-secondary">
            {moment(frontmatter.date).fromNow()}
          </time>
        </div>
        <div
          className={cn(
            "prose-base",
            "prose-h1:tracking-tight prose-h2:tracking-tight",
            "prose-h1:font-medium prose-h2:font-medium prose-h3:font-medium",
            "prose-h2:text-lg prose-h3:text-lg prose-h3:text-secondary",
            "prose-p:font-serif prose-p:text-secondary prose-p:tracking-normal"
          )}
        >
          <MDXRemote
            source={content}
            components={{ VideoPlayer, Image }}
            // @ts-ignore
            options={options}
          />
        </div>
        <PostIsland />
        <GridLine orientation="y" align="right" offset={32} />
      </div>
    </>
  );
}
