'use client';
import React from 'react';
import {motion, useScroll} from 'framer-motion';
import { LINKS } from '@/components/latest/latest-links';
import { Link as LinkType } from "@/lib/types";
import { cn } from '@/lib/utils';


export const LatestList = ({className, links}: {className?: string, links?: Array<LinkType>}) => {

  // use arrow keys to move if focused
  return(
    <motion.div 
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.3,
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
      type: "tween",    
    }}
    className="w-full space-y-2"
    >
      <small className="font-medium">Latest</small>
      <div className="flex flex-col w-full">
        {LINKS.map((link: LinkType, index: number) => (
          <motion.div 
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5 + (0.15 * index),
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
            type: "tween",
          }}
          >
            <a 
            rel="noopener noreferrer" 
            href={link.url} 
            className={cn(
              "py-4 w-full flex flex-row items-center justify-between bg-transparent rounded-lg md:px-4 transition-all",
              "hover:bg-ui focus:bg-ui focus:outline-none focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              "dark:focus:bg-white/10 dark:focus:shadow-[inset_0px_1px_0px_hsla(0_,0%_,100%_,.02)_,inset_0px_0px_0px_1px_hsla(0_,0%_,100%_,.02)_,0px_1px_2px_rgba(0_,0_,0_,.12)_,0px_2px_4px_rgba(0_,0_,0_,.08)_,0px_0px_0px_0.5px_rgba(0_,0_,0_,.24)]",
              "dark:hover:bg-white/10 dark:hover:shadow-[inset_0px_1px_0px_hsla(0_,0%_,100%_,.02)_,inset_0px_0px_0px_1px_hsla(0_,0%_,100%_,.02)_,0px_1px_2px_rgba(0_,0_,0_,.12)_,0px_2px_4px_rgba(0_,0_,0_,.08)_,0px_0px_0px_0.5px_rgba(0_,0_,0_,.24)]",

            )}
            key={link.id}
            >   
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline">
                <small className="font-medium">{link.title}</small>   
                <small className="text-secondary">{link.description}</small>
              </div>          
              <time className="font-mono text-xs text-secondary">{link.date}</time>
            </a>
          </motion.div>
        ))}      
      </div>
    </motion.div>
  )
}