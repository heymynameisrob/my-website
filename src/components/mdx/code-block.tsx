"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const CodeBlock = ({ children, preview }: any) => (
  <Tabs
    defaultValue={"preview"}
    className="border border-primary bg-background rounded-md"
  >
    <div className="flex items-center justify-between bg-ui">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
    </div>
    <TabsContent
      value="preview"
      className="!mt-0 relative z-10 w-full bg-background rounded-b"
    >
      <CodeBlockPreview>{preview}</CodeBlockPreview>
    </TabsContent>
    <TabsContent
      value="code"
      className="!mt-0 prose prose-inverted !bg-black max-h-[360px] rounded-b overflow-x-auto [&_pre]:m-0 [&_pre]:border-none [&_pre]:bg-transparent [&_code]:bg-transparent  dark:bg-background"
    >
      {children}
    </TabsContent>
  </Tabs>
);

export const CodeBlockPreview = ({ children }: any) => (
  <AspectRatio ratio={16 / 9} className="overflow-hidden rounded">
    {children}
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
