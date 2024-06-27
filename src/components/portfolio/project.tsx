"use client";
import moment from "moment";
import Link from "next/link";
import { motion } from "framer-motion";

import type { Project as ProjectType } from "@/lib/types";

export const Project = ({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link
        href={
          project.externalLink
            ? project.externalLink
            : `/portfolio/${project.slug}`
        }
        className="relative block w-full bg-neutral-800 hover:[&_img]:scale-105 hover:[&_video]:scale-105 overflow-hidden rounded"
      >
        {project.video_url ? (
          <video
            playsInline
            loop
            autoPlay
            muted
            src={project.video_url}
            className="duration-150 ease"
          ></video>
        ) : (
          <img
            src={project.image_url}
            alt={project.title}
            loading="lazy"
            className="duration-150 ease"
          />
        )}
        <div className="absolute z-10 bottom-0 left-0 w-full p-4 flex items-center justify-between gap-2 bg-gradient-to-t from-black/60 to-transparent">
          <small className="font-medium">
            {project.title}
            {project.isExternal && <span className="ml-2 opacity-70">↗</span>}
          </small>
          <small className="opacity-80">
            {moment(project.date).format("MMM YY")}
          </small>
        </div>
      </Link>
    </motion.div>
  );
};
