import moment from "moment";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/server/posts";
import { PostIsland } from "@/components/posts/post-island";
import { MDX } from "@/components/mdx";
import { ClockIcon } from "lucide-react";

import type { Metadata } from "next";

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const { frontmatter } = await getPost(params.id);

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    alternates: {
      canonical: frontmatter.canonical,
    },
  };
}

export async function generateStaticParams() {
  const { posts, projects } = await getAllPosts();

  if (!posts || !projects) return [];

  return [...posts, ...projects].map((post) => ({
    id: post.slug as string,
  }));
}

export default async function PostPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  console.log(params.id);
  const { frontmatter, content, error } = await getPost(params.id);

  if (error || !frontmatter || !content) {
    // Assume that the error is that the file doesn't exist
    return notFound();
  }

  return (
    <>
      <div className="fixed inset-0 z-50 bg-gradient-to-b from-background to-transparent h-[64px] w-full" />
      <div className="max-w-2xl mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col space-y-8 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <h1 className="!text-base font-medium mb-0">
                {frontmatter.title}
              </h1>
              <p className="!text-base text-secondary">
                {frontmatter.description}
              </p>
            </div>
          </div>
        </div>
        <MDX content={content} />
        <div className="flex items-center gap-1 mt-4">
          <ClockIcon
            size={16}
            strokeWidth={2}
            className="text-muted opacity-90"
          />
          <small className="font-medium text-muted">
            Last updated {moment(frontmatter.date).format("MMM YY")}
          </small>
        </div>
        <PostIsland />
      </div>
    </>
  );
}
