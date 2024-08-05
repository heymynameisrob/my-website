"use client";

import { useEffect } from "react";
import Masonry from "react-responsive-masonry";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/hooks/media-query";
import { Project } from "@/components/portfolio/project";

import type { Project as ProjectType } from "@/lib/types";

export const HomePortfolio = ({
  projects,
}: {
  projects: Array<ProjectType> | [];
}) => {
  /**
   * Personally don't like doing things in JS that should be pure CSS
   * BUT Next is asshole about hydration errors with RepsonsiveMasonry so *shrug*
   */
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const isMediumScreen = useMediaQuery("(min-width: 640px)");

  /**
   * Pauses all videos when the page is not visible
   * Improves performance and battery life for low-powered devices (and my Macbook Air for some reason)
   */
  useEffect(() => {
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        document.querySelectorAll("video").forEach((vid) => vid.play());
      } else {
        document.querySelectorAll("video").forEach((vid) => vid.pause());
      }
    });

    return () => {
      document.removeEventListener("visibilitychange", () => {});
      document.querySelectorAll("video").forEach((vid) => vid.play());
    };
  }, []);

  return (
    <AnimatePresence mode="popLayout">
      <Masonry
        gutter="8px"
        className="group"
        columnsCount={(isLargeScreen && 4) || (isMediumScreen && 2) || 1}
      >
        {projects.map((project, index) => (
          <Project key={project.slug} index={index} project={project} />
        ))}
      </Masonry>
    </AnimatePresence>
  );
};
