import Link from "next/link";

import type { Post } from "@/lib/types";

export function TabsNotes({ posts }: { posts: Array<Post> }) {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-secondary italic">
        These are in-progress working notes. Expect issues, errors, and random
        thoughts. Enjoy.
      </p>
      <div className="grid grid-cols-2 gap-4 gap-y-8 md:grid-cols-3 md:gap-8">
        {posts?.map((post) => <PostItem key={post.slug} post={post} />)}
      </div>
    </div>
  );
}

function PostItem({ post }: { post: Post }) {
  const { title, description } = post.frontmatter;

  return (
    <article className="flex flex-col gap-6 p-4 rounded-lg bg-background border">
      <div className="flex flex-col gap-2">
        <h3 className="font-medium">{title}</h3>
        <p className="text-secondary">{description}</p>
        <Link href={`/post/${post.slug}`} className="text-[#00C2D7] underline">
          Read post
        </Link>
      </div>
    </article>
  );
}
