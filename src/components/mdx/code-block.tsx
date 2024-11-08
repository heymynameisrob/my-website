"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";

export const CodeBlockPreview = ({ children }: any) => (
  <AspectRatio
    ratio={16 / 9}
    className="overflow-hidden bg-background border rounded-md shadow-sm"
  >
    {children}
  </AspectRatio>
);
