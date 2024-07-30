"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

export const CodeBlock = ({ children }: any) => (
  <div className="flex flex-col items-center justify-center w-full border border-primary rounded-md overflow-hidden">
    {children}
  </div>
);

export const CodeBlockPreview = ({ children, className }: any) => (
  <AspectRatio ratio={16 / 9} className="overflow-hidden rounded">
    <div
      className={cn(
        "grid place-items-center bg-background w-full h-full",
        className,
      )}
    >
      {children}
    </div>
  </AspectRatio>
);

export const CodeBlockCaption = ({ children }: any) => (
  <Accordion type="single" collapsible className="relative z-10 w-full">
    <AccordionItem value="caption">
      <AccordionTrigger className="!p-4 text-sm text-primary">
        Code example
      </AccordionTrigger>
      <AccordionContent className="prose prose-inverted bg-primary max-h-[360px] overflow-x-auto [&_pre]:m-0 [&_pre]:border-none [&_pre]:bg-transparent [&_code]:bg-transparent dark:bg-background">
        {children}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
