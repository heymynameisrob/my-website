import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts } from "@/server/posts";

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
