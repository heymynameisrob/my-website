import { GridLine } from "@/components/grid-line";
import { HomeBio } from "@/components/home/home-bio";
import { HomeContact } from "@/components/home/home-contact";
import { HomeHeader } from "@/components/home/home-header";
import { HomeRecent } from "@/components/home/home-recent";
import { NowPlaying } from "@/components/now-playing/now-playing";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* <div className="hidden pointer-events-none absolute inset-0 z-0 overflow-hidden mix-blend-overlay w-[150vw] h-[50vh] bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.00)_100%)] dark:block" /> */}
      <main className="relative col-span-1 overflow-y-scroll px-4 py-16 md:px-6 md:h-screen lg:py-24">
        <GridLine orientation="y" align="left" offset={20} />
        <div className="space-y-12 md:space-y-16">
          <HomeHeader />
          <HomeBio />
          <HomeContact />
          <HomeRecent />
          {/* <HomeWriting /> */}
        </div>   
      </main>
      <aside className="hidden col-span-1 bg-red-500 h-screen overflow-hidden relative md:block">
        <Image src="/images/me-abroad.png" alt="Me in the Basque Country mountains, 2024" layout="fill" objectFit="cover" loading="eager" className="absolute inset-0" />
      </aside>
      <NowPlaying />
    </div>
  );
}
