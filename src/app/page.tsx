import { GridLine } from "@/components/grid-line";
import { HomeHeader } from "@/components/home/home-header";
import { HomeLinks } from "@/components/home/home-links";
import { Latest } from "@/components/latest/latest";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <div className="hidden pointer-events-none absolute inset-0 z-0 overflow-hidden mix-blend-overlay w-[150vw] h-[50vh] bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.00)_100%)] dark:block" />
      <main className="relative container h-full py-12 lg:py-20 z-10">
        <GridLine orientation="y" align="left" offset={32} />
        <div className="flex flex-col gap-8 lg:gap-12">
          <HomeHeader />            
          <Separator />
          <Latest />
          <Separator />
          <HomeLinks />
        </div>
        <GridLine orientation="y" align="right" offset={32} />
      </main>
    </>
  );
}
