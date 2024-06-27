"use server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import type { Post } from "@/lib/types";

type GetAllPosts = {
  posts: Array<Post> | [];
  error?: any;
};

type GetPost = Post & {
  error?: any;
};

/**
 * #1 - Grabs all the files in /posts and reads the frontmatter of each file
 */
export async function getAllPosts(): Promise<GetAllPosts> {
  try {
    const dir = path.join(process.cwd(), "public/posts");
    const files = fs.readdirSync(dir);

    if (!files)
      return {
        posts: [],
        error: new Error("No posts found"),
      };

    const posts = files.map((fileName: string) => {
      const slug = fileName.replace(".mdx", "");
      const postPath = path.join(dir, `${fileName}`);
      const readFile = fs.readFileSync(postPath, "utf-8");
      const { data } = matter(readFile);

      return {
        slug,
        frontmatter: {
          title: data.title,
          description: data.description,
          date: data.date,
          category: data.category,
        },
      };
    });

    const sortedPosts = posts.sort(
      (a: any, b: any) =>
        Number(new Date(b.frontmatter.date)) -
        Number(new Date(a.frontmatter.date)),
    );

    return { posts: sortedPosts };
  } catch (error) {
    return { error, posts: [] };
  }
}

export async function getPost(slug: string): Promise<GetPost> {
  try {
    const dir = path.join(process.cwd(), "public/posts");
    const postPath = path.join(dir, `${slug}.mdx`);
    const fileName = fs.readFileSync(postPath, "utf-8");

    const { data, content } = matter(fileName);

    return {
      frontmatter: {
        title: data.title,
        description: data.description,
        date: data.date,
        category: data.category,
      },
      content,
    };
  } catch (error: any) {
    return error;
  }
}
