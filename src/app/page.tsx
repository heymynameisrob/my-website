import { HomeBio } from "@/components/home-bio";
import { HomeTabs } from "@/components/home-tabs";
import { ThemeToggle } from "@/components/theme";
import { getAllPosts } from "@/server/posts";

export default async function HomePage() {
  const postPromise = getAllPosts();

  return (
    <>
      <ThemeToggle />
      <main className="relative flex flex-col space-y-12 max-w-7xl mx-auto px-5 py-12 md:py-16 lg:py-28">
        <HomeBio />
        <HomeTabs postsPromise={postPromise} />
      </main>
    </>
  );
}
