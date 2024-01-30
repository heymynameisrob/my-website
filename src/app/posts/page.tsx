import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getAllPosts() {
  try {
    const files = fs.readdirSync("./src/app/posts");

    const posts = files.map((fileName) => {
      if (!fileName.endsWith(".md")) return;

      const slug = fileName.replace(".md", "");
      const readFile = fs.readFileSync(`./src/app/posts/${fileName}`, "utf-8");
      const { data: frontmatter } = matter(readFile);

      return {
        slug,
        frontmatter,
      };
    });

    return { posts: posts.filter(Boolean), error: null };
  } catch (error) {
    return { error, posts: [] };
  }
}

export default async function PostListPage() {
  const { posts, error } = await getAllPosts();

  if (error) {
    notFound();
  }

  return (
    <div>
      <h1>Post List</h1>
      {posts.length ? (
        posts.map((post: any) => (
          <Link href={`/posts/${post.slug}`} key={post.slug}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
        ))
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
}
