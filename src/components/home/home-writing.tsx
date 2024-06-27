import Link from "next/link";
import moment from "moment";
import { ListItem } from "@/components/list-item";
import { Section } from "@/components/section";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import type { Post } from "@/lib/types";

export const HomeWriting = ({ posts }: { posts: Array<Post> | [] }) => (
  <Section>
    <div className="flex items-center gap-2 pb-2">
      <HoverCard>
        <HoverCardTrigger asChild>
          <p className="font-medium cursor-default">Notes 📝</p>
        </HoverCardTrigger>
        <HoverCardContent className="p-3" align="start">
          <small>
            This is my design journal. Some of these notes are rough,
            unfinished, or even indefensable. I post these and edit them in the
            wild, following the idea of a 'digital garden'.{" "}
          </small>
        </HoverCardContent>
      </HoverCard>
    </div>
    {posts.map((post: Post) => {
      if (!post.frontmatter.category) return null;
      return (
        <ListItem
          key={post.slug}
          label={moment(post.frontmatter.date).format("MMM YY")}
        >
          <div className="flex flex-col gap-1">
            <Link
              href={`/posts/${post.slug}`}
              className="font-medium text-base underline"
            >
              {post.frontmatter.title}
            </Link>
            <p className="text-secondary">{post.frontmatter.description}</p>
          </div>
        </ListItem>
      );
    })}
  </Section>
);
