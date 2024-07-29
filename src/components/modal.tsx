"use client";

/**
 * Modal Page Component
 * Using Shadcn/Radix 'Dialog' as a base.
 * However, this gives us a cleaner implementation to use fuill page modal with a parallel route in Next JS.
 */

import { useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

export const Modal = ({
  children,
  title,
  closeHref,
  defaultOpen = true,
}: {
  children: ReactNode;
  title: string;
  closeHref?: string;
  defaultOpen?: boolean;
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(defaultOpen);

  const handleOpenChange = () => {
    setOpen(!open);
    if (closeHref) {
      router.replace(closeHref);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="flex flex-col top-4 left-4 right-4 bottom-4 w-auto max-w-none translate-x-0 translate-y-0 overflow-y-scroll shadow-none p-0">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">{title}</DialogDescription>
        <div className="w-full md:max-w-2xl mx-auto py-16 px-4 lg:py-24 break-words">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};
