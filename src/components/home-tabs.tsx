"use client";

import { use, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useRouter, useSearchParams } from "next/navigation";

import { FadeIn } from "@/components/motion/fade-in";
import { TabsWork } from "@/components/tabs/tabs-work";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, FolderGit, Tent } from "lucide-react";

import type { GetAllPosts } from "@/server/posts";
import { TabsNotes } from "@/components/tabs/tabs-notes";

export function HomeTabs({
  postsPromise,
}: {
  postsPromise: Promise<GetAllPosts>;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [value, setValue] = useState<string>(searchParams.get("tab") ?? "work");

  const { projects, posts } = use(postsPromise);

  const handleSetValue = (value: string) => {
    setValue(value);
    router.replace(`/?tab=${value}`);
  };

  useHotkeys("1", () => handleSetValue("work"));
  useHotkeys("2", () => handleSetValue("notes"));
  useHotkeys("3", () => handleSetValue("travel"));

  return (
    <FadeIn delay={1}>
      <Tabs value={value} onValueChange={handleSetValue}>
        <TabsList>
          <TabsTrigger value="work" className="text-base gap-2">
            <FolderGit size={16} className="opacity-70" />
            Work
          </TabsTrigger>
          <TabsTrigger value="notes" className="text-base gap-2">
            <Book size={16} className="opacity-70" />
            Notes
          </TabsTrigger>
          <TabsTrigger value="travel" className="text-base gap-2">
            <Tent size={16} className="opacity-70" />
            Travel
          </TabsTrigger>
        </TabsList>
        <TabsContent value="work">
          <TabsWork projects={projects} />
        </TabsContent>
        <TabsContent value="notes">
          <TabsNotes posts={posts} />
        </TabsContent>
        <TabsContent value="travel">
          <div className="w-full h-64 grid place-items-center text-secondary">
            Coming soon!
          </div>
        </TabsContent>
      </Tabs>
    </FadeIn>
  );
}
