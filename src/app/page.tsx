// import { FloatingMenu } from "@/components/floating-menu";
import { Home } from "@/components/home";
import { NowPlaying } from "@/components/now-playing/now-playing";
import { ThemeToggle } from "@/components/theme";
import { getAllPosts } from "@/server/posts";

export default async function HomePage() {
  const { posts, error } = await getAllPosts();

  if (error) return null;

  return (
    <>
      <ThemeToggle />
      <main className="relative flex flex-col space-y-16 max-w-[38rem] mx-auto px-5 py-16 xl:py-24 xl:space-y-24">
        <Home posts={posts} />
        <NowPlaying />
      </main>
    </>
  );
}
