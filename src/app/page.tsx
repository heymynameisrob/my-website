import { GridLine } from "@/components/grid-line";
import { HomeBio } from "@/components/home/home-bio";
import { HomeHeader } from "@/components/home/home-header";
import { LatestList } from "@/components/latest/latest-list";

export default function Home() {
  return (
    <>
      <GridLine orientation="x" align="top" offset={32} />
      <div className="hidden pointer-events-none absolute inset-0 z-0 overflow-hidden mix-blend-overlay w-[150vw] h-[50vh] bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.00)_100%)] dark:block" />
      <main className="relative container h-full py-20 lg:py-28 xl:py-32 z-10">
        <GridLine orientation="y" align="left" offset={32} />
        <div className="space-y-8 lg:space-y-12">
          <HomeHeader />
          <HomeBio />
          <LatestList />
        </div>
        <GridLine orientation="y" align="right" offset={32} />
      </main>
      <GridLine orientation="x" align="bottom" offset={32} />
      {/* <BottomIsland /> */}
    </>
  );
}
