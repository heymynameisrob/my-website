import { HomePortfolio } from "@/components/portfolio";
import { ThemeToggle } from "@/components/theme";
import { getAllProjects } from "@/server/projects";
import { Header } from "@/components/portfolio/header";

export default async function PortfolioPage() {
  const { projects } = await getAllProjects();

  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Header />
      <HomePortfolio projects={projects} />
    </div>
  );
}
