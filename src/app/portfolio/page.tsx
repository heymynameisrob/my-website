import Link from "next/link";
import { HomePortfolio } from "@/components/portfolio";
import { ThemeToggle } from "@/components/theme";
import { getAllProjects } from "@/server/projects";
import { CommandPalette } from "@/components/cmd";

export default async function PortfolioPage() {
  const { projects } = await getAllProjects();

  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <div className="py-12 px-4 flex justify-center items-start flex-col gap-4 md:px-12 md:py-12 md:justify-between md:items-center md:flex-row">
        <div>
          <h1 className="font-serif text-primary md:!text-[2.25rem] md:!leading-normal dark:text-white">
            Latest work
          </h1>
          <p className="font-sans text-secondary">
            A catalogue of work by{" "}
            <Link href="/" className="text-primary underline">
              @heymynameisrob
            </Link>
            *
          </p>
          <small className="!text-[9px] text-secondary">
            *only possible by working with people much smarter than himself
          </small>
        </div>
      </div>
      <HomePortfolio projects={projects} />
      <CommandPalette />
    </div>
  );
}
