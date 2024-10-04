import { getProject } from "@/server/projects";
import { MDX } from "@/components/mdx";
import { ThemeToggle } from "@/components/theme";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const { content } = await getProject(params.id);

  return (
    <div className="w-full md:max-w-2xl mx-auto py-16 px-4 lg:py-24 break-words">
      <ThemeToggle />
      <Button
        size="sm"
        variant="ghost"
        className="text-secondary rounded-full relative -left-2 mb-4 group"
        asChild
      >
        <Link
          href="/portfolio"
          className="flex items-center gap-2 no-underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M7.793 2.232a.75.75 0 0 1-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 0 1 0 10.75H10.75a.75.75 0 0 1 0-1.5h2.875a3.875 3.875 0 0 0 0-7.75H3.622l4.146 3.957a.75.75 0 0 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 0 1 1.06.025Z"
              clipRule="evenodd"
            />
          </svg>
          <span>Back to Portfolio</span>
        </Link>
      </Button>
      <MDX content={content} />
    </div>
  );
}
