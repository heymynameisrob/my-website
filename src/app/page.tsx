// import { FloatingMenu } from "@/components/floating-menu";
import { HomeText } from "@/components/home";
import { ThemeToggle } from "@/components/theme";

export default async function Home() {
  return (
    <>
      <ThemeToggle />
      <main className="relative py-12 px-5 md:py-16 md:px-16 max-w-6xl">
        <HomeText />
      </main>
    </>
  );
}
