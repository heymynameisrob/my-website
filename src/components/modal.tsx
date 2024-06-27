"use client";

/**
 * Modal Page Component
 * Using Shadcn/Radix 'Dialog' as a base.
 * However, this gives us a cleaner implementation to use fuill page modal with a parallel route in Next JS.
 */

import { useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export const Modal = ({
  children,
  closeHref,
  defaultOpen = true,
}: {
  children: ReactNode;
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
      <DialogContent className="top-4 left-4 right-4 bottom-4 w-auto max-w-none translate-x-0 translate-y-0 overflow-y-scroll shadow-none">
        {children}
      </DialogContent>
    </Dialog>
  );
};
