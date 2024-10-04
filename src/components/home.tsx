"use client";
import { motion, MotionConfig } from "framer-motion";
import Link from "next/link";
import { LinkBadge } from "@/components/link-badge";
import { cn } from "@/lib/utils";

export function Home({ posts }: { posts?: Array<any> }) {
  return (
    <MotionConfig transition={{ duration: 0.4, type: "spring", bounce: 0 }}>
      <Section delay={0.2}>
        <h1 className="!text-base font-medium mb-1.5">Hey my name is Rob 👋</h1>
        <div className="flex items-center gap-1">
          <p className="text-secondary">Design & Engineering at</p>
          <Artificial />
          <Pilcrow />
        </div>
      </Section>
      <Section delay={0.4} className="space-y-4 lg:space-y-6">
        <h2 className="!text-base font-medium">⚡ Bio</h2>
        <p className="text-secondary">
          I'm a designer based in the UK. With over ten years of experience in
          product designer and development, I've built a reputation for careful,
          considerate design backed by purposeful research and robust,
          performant code.
        </p>
        <p className="text-secondary">
          I work almost exclusively with early-stage companies, particularly in
          B2B, Enterprise, and Healthcare spaces. Although I've worked for some
          bigger organisations you may have heard of like Farfetch, Waitrose,
          and the NHS. You can view some of my work{" "}
          <Link href="/portfolio" className="underline text-primary">
            here
          </Link>
          .
        </p>
        <p className="text-secondary">
          I also speak a little about design, particularly at local meetups such
          as ProductTank and NNDev.
        </p>
        <div className="flex flex-wrap items-center gap-1">
          <LinkBadge href="https://github.com/heymynameisrob" title="Github">
            <div className="flex items-center justify-center w-4 h-4 rounded-full bg-black">
              <img
                src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://github.com&size=16"
                alt="Github"
                className="w-3 h-3 object-fit object-cover rounded-full"
              />
            </div>
            <small className="font-medium px-1.5">@heymynameisrob</small>
          </LinkBadge>
          <LinkBadge
            href="https://instagram.com/heymynameisrob0"
            title="Instagram"
          >
            <div className="flex items-center justify-center w-4 h-4 rounded-full bg-black">
              <img
                src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://instagram.com&size=16"
                alt="Github"
                className="w-3 h-3 object-fit object-cover rounded-full"
              />
            </div>
            <small className="font-medium px-1.5">@heymynameisrob0</small>
          </LinkBadge>
          <LinkBadge href="mailto:robhough@hey.com" title="Email me">
            <div className="flex items-center justify-center w-4 h-4 rounded-full bg-white">
              <img
                src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://hey.com&size=16"
                alt="Email me"
                className="w-3 h-3 object-fit object-cover rounded-full"
              />
            </div>
            <small className="font-medium px-1.5">robhough@hey.com</small>
          </LinkBadge>
        </div>
      </Section>
      {/* <Section delay={0.8} className="space-y-4 lg:space-y-6">
        <h2 className="!text-base font-medium">📝 Writing</h2>
        <Posts posts={posts} />
      </Section> */}
    </MotionConfig>
  );
}

function Section({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 5, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay }}
      className={cn("flex flex-col", className)}
    >
      {children}
    </motion.section>
  );
}

function Artificial() {
  return (
    <LinkBadge href="https://artificial.io">
      <div className="flex items-center justify-center w-4 h-4 rounded-full bg-white">
        <img
          src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://artificial.io&size=16"
          alt="Artificial"
          className="w-3 h-3 object-fit object-cover rounded-full"
        />
      </div>
      <small className="font-medium px-1.5">Artificial</small>
    </LinkBadge>
  );
}

function Pilcrow() {
  return (
    <LinkBadge href="https://pilcrow.xyz">
      <div className="flex items-center justify-center w-4 h-4 rounded bg-cyan-500">
        <img
          src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://pilcrow.xyz&size=16"
          alt="Pilcrow"
          className="w-4 h-4 object-fit object-cover rounded-full"
        />
      </div>
      <small className="font-medium px-1.5">Pilcrow</small>
    </LinkBadge>
  );
}
