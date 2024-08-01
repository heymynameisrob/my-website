"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Project } from "@/components/portfolio/project";

import type { Project as ProjectType } from "@/lib/types";
import { Suspense, useEffect } from "react";

/**
 * Ideas:
 * - Someway to differentiate between production projects (e.g Pilcrow) and other projects like Lantum stuff.
 * - Dont just include big projects but individual projects like the reasearch stuff, posters, at Lantum etc. Any small side-proejcts etc. Range of quality stuff. Anything I think is good.
 *   Production stuff can just be a link to the project page, other stuff needs to showcase something else impressive.
 *   Maybe a Framer-motion-y modal with a video prototype and some small explainer? Like the new Linear landing page.
 * - What about giving context for each project? Do we need to at this point or is it just a snapshot of things I've worked on?
 * - Videos (Screen Studio) work better than images so that'd be cool
 * - Lazy loading this stuff on intersection observer
 * - Floating contact button would go nicely too
 */

export const HomePortfolio = ({
  projects,
}: {
  projects: Array<ProjectType> | [];
}) => {
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
    <Suspense fallback={null}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
        className="h-full p-2"
      >
        <Masonry gutter="8px" className="group">
          {projects.map((project, index) => (
            <Project key={index} index={index} project={project} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Suspense>
  );
};
