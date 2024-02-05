import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getAllPosts() {
  try {
    const dir = path.join(process.cwd(), "public/posts");    
    const files = fs.readdirSync(dir);

    const posts = files.map((fileName) => {
      if (!fileName.endsWith(".mdx")) return;

      const slug = fileName.replace(".mdx", "");      
      const postPath = path.join(dir, `${fileName}`);
      const readFile = fs.readFileSync(postPath, "utf-8");      
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
