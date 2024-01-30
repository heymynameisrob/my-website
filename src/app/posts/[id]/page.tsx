import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import { notFound } from "next/navigation";
import { PostContent } from "@/components/posts/post-content";
import { PostIsland } from "@/components/posts/post-island";
import { GridLine } from "@/components/grid-line";
import { MARKDOWN_IT_OPTIONS } from "@/lib/constants";

/**
 * Get the post with the given ID
 * Search markdown files in the /posts folder
 */
async function getPost(slug: string) {
  try {
    const fileName = fs.readFileSync(`./src/app/posts/${slug}.md`, "utf-8");
    const { data: frontmatter, content } = matter(fileName);

    return { frontmatter, content };
  } catch (error) {
    return { error };
  }
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const { frontmatter, content, error } = await getPost(params.id);

  if (error || !frontmatter || !content) {
    // Assume that the error is that the file doesn't exist
    return notFound();
  }

  return (
    <>
      <GridLine orientation="x" align="top" offset={32} />
      <div className="prose max-w-2xl mx-auto px-4 py-20 lg:py-28 xl:py-32">
        <GridLine orientation="y" align="left" offset={32} />
        <PostContent
          frontmatter={frontmatter}
          content={md(MARKDOWN_IT_OPTIONS).render(content)}
        />
        <PostIsland />
        <GridLine orientation="y" align="right" offset={32} />
      </div>
      <GridLine orientation="x" align="bottom" offset={32} />
    </>
  );
}
