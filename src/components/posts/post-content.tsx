'use client';
import moment from "moment";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Frontmatter = any;

export const PostContent = ({ frontmatter, content }: { frontmatter: Frontmatter, content: string }) => {
  return(
    <>
      <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{            
        duration: 0.15,
        ease: [0.4, 0, 0.2, 1],
        type: "tween",
      }}
      className="flex flex-col mb-8 xl:mb-10">
        <h1 className="text-base font-medium tracking-tight mb-0 xl:text-lg">{frontmatter.title}</h1>
        <time className="text-base text-secondary">{moment(frontmatter.date).fromNow()}</time>
      </motion.div>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{    
        delay: 0.3,
        duration: 0.15,
        ease: [0.4, 0, 0.2, 1],
        type: "tween",
      }}
      className={cn(        
        "prose-base",        
        "prose-h1:tracking-tight prose-h2:tracking-tight",
        "prose-h1:font-medium prose-h2:font-medium prose-h3:font-medium",
        "prose-h2:text-lg prose-h3:text-lg prose-h3:text-secondary"
      )}      
      dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}