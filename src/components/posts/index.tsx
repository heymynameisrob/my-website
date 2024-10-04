"use client";

import moment from "moment";
import { Post as PostType } from "@/lib/types";
import Link from "next/link";

export function Posts({ posts }: { posts: Array<PostType> }) {
  console.log(posts);
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post: any) => (
        <Post key={post.slug} post={post} />
      ))}
    </div>
  );
}

function Post({ post }: { post: PostType }) {
  return (
    <div className="grid items-start grid-cols-[clamp(6rem,_8vw,_10rem),_1fr] gap-2">
      <time className="!text-xs !leading-6 text-muted font-mono uppercase">
        {moment(post.frontmatter.date).format("MMM DD, YYYY")}
      </time>
      <div className="flex flex-col gap-2">
        <Link href={`/posts/${post.slug}`}>
          <h3 className="!text-base font-medium underline">
            {post.frontmatter.title}
          </h3>
        </Link>
        <p className="!text-sm text-secondary">
          {post.frontmatter.description}
        </p>
      </div>
    </div>
  );
}
