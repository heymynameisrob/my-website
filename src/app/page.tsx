// import { getAllPosts } from "@/server/posts";
import { HomeBio } from "@/components/home/home-bio";
import { HomeContact } from "@/components/home/home-contact";
import { HomeHeader } from "@/components/home/home-header";
import { HomeRecent } from "@/components/home/home-recent";
// import { HomeWriting } from "@/components/home/home-writing";
import { NowPlaying } from "@/components/now-playing/now-playing";
import { Section } from "@/components/section";

export default async function Home() {
  // const { posts } = await getAllPosts();

  return (
    <div className="grid place-items-center">
      <main className="relative max-w-prose mx-auto overflow-y-scroll px-6 py-16 md:py-24">
        <HomeHeader />
        <div className="space-y-16">
          <HomeBio />
          <HomeContact />
          {/* <HomeWriting posts={posts.slice(0, 4)} />           */}
          <HomeRecent />
          <Section className="flex flex-col items-center">
            <span>
              <span className="opacity-70">
                &copy; 2024 Rob Hough. The code for this website is
              </span>{" "}
              <a
                className="underline text-primary"
                href="https://github.com/heymynameisrob/my-website"
              >
                here
              </a>
              .
            </span>
          </Section>
        </div>
      </main>
      <NowPlaying />
    </div>
  );
}
