import { getProject } from "@/server/projects";
import { MDX } from "@/components/mdx";
import { ThemeToggle } from "@/components/theme";

export default async function Page({ params }: { params: { id: string } }) {
  const { content } = await getProject(params.id);

  return (
    <div className="w-full md:max-w-2xl mx-auto py-16 px-4 lg:py-24 break-words">
      <ThemeToggle />
      <MDX content={content} />
    </div>
  );
}
