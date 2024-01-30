import { GridLine } from "@/components/grid-line";
import { HomeBio } from "@/components/home/home-bio";
import { HomeHeader } from "@/components/home/home-header";
import { BottomIsland } from "@/components/island";
import { LatestList } from "@/components/latest/latest-list";

export default function Home() {
  return (
    <>
      <GridLine orientation="x" align="top" offset={32} />      
      {/* TODO: Replace the stolen one from Clerk with my own god rays and maybe animate*/}
      <div className="hidden pointer-events-none absolute inset-x-0 top-[calc(-673/16*1rem)] z-0 overflow-hidden mix-blend-overlay dark:block">
        <img alt="" role="presentation" loading="lazy" width="2640" height="2640" decoding="async" className="ml-[calc(50%-(981/16*1rem))] w-[calc(2640/16*1rem)] max-w-none" src="https://clerk.com/_next/static/media/glow-bento@q30r.63c1a605.avif" />         
      </div>
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
