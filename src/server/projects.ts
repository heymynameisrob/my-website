"use server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import type { Project } from "@/lib/types";

type GetAllProjects = {
  projects: Array<Project> | [];
  error?: any;
};

type GetProject = {
  frontmatter: Project;
  content: string;
  error?: any;
};

export async function getAllProjects(): Promise<GetAllProjects> {
  try {
    const dir = path.join(process.cwd(), "public/projects");
    const files = fs.readdirSync(dir);

    if (!files)
      return {
        projects: [],
        error: new Error("No posts found"),
      };

    const projects = files.map((fileName: string) => {
      const slug = fileName.replace(".mdx", "");
      const postPath = path.join(dir, `${fileName}`);
      const readFile = fs.readFileSync(postPath, "utf-8");
      const { data } = matter(readFile);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        image_url: data.image_url,
        video_url: data.video_url,
        ratio: data.ratio,
        isExternal: data.isExternal,
        externalLink: data.externalLink,
        hide: data.hide || false,
      };
    });

    const filterHiddenProjects = projects.filter((project) => !project.hide);

    const sortedProjects = filterHiddenProjects.sort(
      (a: any, b: any) => Number(new Date(b.date)) - Number(new Date(a.date)),
    );

    return { projects: sortedProjects };
  } catch (error) {
    return { error, projects: [] };
  }
}

export async function getProject(slug: string): Promise<GetProject> {
  try {
    const dir = path.join(process.cwd(), "public/projects");
    const postPath = path.join(dir, `${slug}.mdx`);
    const fileName = fs.readFileSync(postPath, "utf-8");

    const { data, content } = matter(fileName);

    return {
      frontmatter: {
        title: data.title,
        description: data.description,
        image_url: data.image_url,
        video_url: data.video_url,
        date: data.date,
        isExternal: data.isExternal,
      },
      content,
    };
  } catch (error: any) {
    return error;
  }
}
