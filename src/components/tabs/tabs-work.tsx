import Link from "next/link";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { Post } from "@/lib/types";

export function TabsWork({ projects }: { projects: Array<Post> }) {
  return (
    <div className="grid grid-cols-2 gap-4 gap-y-8 md:grid-cols-3 md:gap-8">
      {projects?.map((project) => (
        <WorkItem key={project.slug} project={project} />
      ))}
    </div>
  );
}

function WorkItem({ project }: { project: Post }) {
  const { title, description, image_url, video_url, isExternal, externalLink } =
    project.frontmatter;

  if (isExternal) {
    return (
      <article className="flex flex-col gap-6">
        <a href={externalLink} rel="nofollower noopener" target="_blank">
          <AspectRatio
            ratio={1 / 1}
            className="overflow-hidden rounded-xl bg-white/10"
          >
            {video_url ? (
              <video
                playsInline
                loop
                autoPlay
                muted
                src={video_url}
                className="object-fit object-cover rounded-xl"
              ></video>
            ) : (
              <img
                src={image_url}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover origin-top-left object-left-top rounded-xl"
              />
            )}
          </AspectRatio>
        </a>
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">{title}</h3>
          <p className="text-secondary">{description}</p>
          <a
            href={externalLink}
            rel="nofollower noopener"
            target="_blank"
            className="text-[#00C2D7] underline"
          >
            Visit website
          </a>
        </div>
      </article>
    );
  }

  return (
    <article className="flex flex-col gap-6">
      <Link href={`/post/${project.slug}`}>
        <AspectRatio
          ratio={1 / 1}
          className="overflow-hidden rounded-xl bg-white/10"
        >
          {video_url ? (
            <video
              playsInline
              loop
              autoPlay
              muted
              src={video_url}
              className="object-fit object-cover rounded-xl"
            ></video>
          ) : (
            <img
              src={image_url}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover rounded-xl"
            />
          )}
        </AspectRatio>
      </Link>
      <div className="flex flex-col gap-2">
        <h3 className="font-medium">{title}</h3>
        <p className="text-secondary">{description}</p>
        <Link
          href={`/post/${project.slug}`}
          className="text-[#00C2D7] underline"
        >
          Read post
        </Link>
      </div>
    </article>
  );
}
