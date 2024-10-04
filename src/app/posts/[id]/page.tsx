import moment from "moment";
import { notFound } from "next/navigation";
import { getPost } from "@/server/posts";
import { PostIsland } from "@/components/posts/post-island";
import { MDX } from "@/components/mdx";
import { ClockIcon } from "lucide-react";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { frontmatter } = await getPost(params.id);

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    canonical: frontmatter.canonical,
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
