"use client";
import moment from "moment";
import Link from "next/link";
import { motion } from "framer-motion";

import type { Project as ProjectType } from "@/lib/types";
import { useEffect } from "react";

export const Project = ({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) => {
  useEffect(() => {}, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link
        href={
          project.externalLink
            ? project.externalLink
            : `/portfolio/p/${project.slug}`
        }
        className="relative block w-full bg-neutral-100 border border-black/10 hover:[&_img]:scale-105 hover:[&_video]:scale-105 overflow-hidden rounded-lg dark:border-white/10 dark:bg-neutral-800"
      >
        {project.video_url ? (
          <video
            playsInline
            loop
            autoPlay
            muted
            src={project.video_url}
            className="duration-150 ease filter grayscale hover:filter-none"
          ></video>
        ) : (
          <img
            src={project.image_url}
            alt={project.title}
            loading="lazy"
            className="duration-150 ease filter grayscale hover:filter-none"
          />
        )}
        <div className="absolute z-10 bottom-0 left-0 w-full p-4 h-24 flex items-end justify-between gap-2 bg-gradient-to-t from-black/40 to-black/0">
          <small className="font-medium text-white">
            {project.title}
            {project.isExternal && <span className="ml-2 opacity-70">↗</span>}
          </small>
          <small className="opacity-80 text-white">
            {moment(project.date).format("MMM YY")}
          </small>
        </div>
      </Link>
    </motion.div>
  );
};
