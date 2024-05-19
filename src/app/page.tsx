import { GridLine } from "@/components/grid-line";
import { HomeBio } from "@/components/home/home-bio";
import { HomeContact } from "@/components/home/home-contact";
import { HomeHeader } from "@/components/home/home-header";
import { HomeRecent } from "@/components/home/home-recent";

export default function Home() {
  return (
    <>
      <div className="hidden pointer-events-none absolute inset-0 z-0 overflow-hidden mix-blend-overlay w-[150vw] h-[50vh] bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.00)_100%)] dark:block" />
      <main className="relative container h-full py-12 md:py-16 lg:py-20">
        <GridLine orientation="y" align="left" offset={32} />
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          <HomeHeader />
          <HomeBio />
          <HomeContact />
          <HomeRecent />
          {/* <HomeWriting /> */}
        </div>
        <GridLine orientation="y" align="right" offset={32} />
      </main>      
    </>
  );
}
