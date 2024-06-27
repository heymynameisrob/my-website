import { HomePortfolio } from "@/components/portfolio";
import { getAllProjects } from "@/server/projects";

export default async function PortfolioPage() {
  const { projects } = await getAllProjects();

  return (
    <div className="min-h-screen">
      <HomePortfolio projects={projects} />
    </div>
  );
}
