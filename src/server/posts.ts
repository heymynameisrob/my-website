"use server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import type { Post } from "@/lib/types";

export type GetAllPosts = {
  posts: Array<Post> | [];
  projects: Array<Post> | [];
  error?: any;
};

export type GetPost = Post & {
  error?: any;
};

/**
 * #1 - Grabs all the files in /posts and reads the frontmatter of each file
 */
export async function getAllPosts(): Promise<GetAllPosts> {
  try {
    const dir = path.join(process.cwd(), "src/posts");
    const files = fs.readdirSync(dir);

    if (!files)
      return {
        posts: [],
        projects: [],
        error: new Error("No posts found"),
      };

    const posts = files.map((fileName: string) => {
      const slug = fileName.replace(".mdx", "");
      const postPath = path.join(dir, `${fileName}`);
      const readFile = fs.readFileSync(postPath, "utf-8");
      const { data } = matter(readFile);

      const {
        title,
        description,
        date,
        category,
        canonical,
        image_url,
        video_url,
        ratio,
        isHidden,
        isProject,
        isExternal,
        externalLink,
      } = data;

      return {
        slug,
        frontmatter: {
          title,
          description,
          date,
          category,
          canonical,
          image_url,
          video_url,
          ratio,
          isExternal,
          externalLink,
          isHidden: isHidden || false,
          isProject: isProject || false,
        },
      };
    });

    const sortedPosts = posts
      .filter((p) => !p.frontmatter.isProject && !p.frontmatter.isHidden)
      .sort(
        (a: any, b: any) =>
          Number(new Date(b.frontmatter.date)) -
          Number(new Date(a.frontmatter.date)),
      );

    const sortedProjects = posts
      .filter((p) => p.frontmatter.isProject && !p.frontmatter.isHidden)
      .sort(
        (a: any, b: any) =>
          Number(new Date(b.frontmatter.date)) -
          Number(new Date(a.frontmatter.date)),
      );

    return { posts: sortedPosts, projects: sortedProjects };
  } catch (error) {
    return { error, posts: [], projects: [] };
  }
}

export async function getPost(slug: string): Promise<GetPost> {
  try {
    const dir = path.join(process.cwd(), "src/posts");
    const postPath = path.join(dir, `${slug}.mdx`);
    const fileName = fs.readFileSync(postPath, "utf-8");

    const { data, content } = matter(fileName);

    const {
      title,
      description,
      date,
      category,
      canonical,
      image_url,
      video_url,
      ratio,
      isHidden,
      isProject,
      isExternal,
      externalLink,
    } = data;

    return {
      slug,
      frontmatter: {
        title,
        description,
        date,
        category,
        canonical,
        image_url,
        video_url,
        ratio,
        isExternal,
        externalLink,
        isHidden: isHidden || false,
        isProject: isProject || false,
      },
      content,
    };
  } catch (error: any) {
    return error;
  }
}
