"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DrawingPinFilledIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { ContactForm } from "@/components/contact-form";

export const BottomIsland = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-50 bottom-9 left-0 right-0 grid place-items-center pointer-events-none">
      <motion.div
        initial={false}
        animate={{
          width: isOpen ? 420 : 120,
          height: isOpen ? 360 : 42,
          transformOrigin: "bottom center",
        }}
        className={cn(
          "dark z-50 p-2 origin-bottom flex flex-col justify-center items-center overflow-hidden bg-clip-padding bg-ui shadow-lg border border-primary rounded-[24px] text-primary pointer-events-auto",
          isOpen ? "p-2" : "p-1",
        )}
      >
        <div
          className={cn(
            "w-full px-4 flex flex-col items-center justify-center flex-1 opacity-0 overflow-hidden",
            isOpen && "opacity-1",
          )}
        >
          <ContactForm />
        </div>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="sm"
          variant={isOpen ? "ghost" : "accent"}
          className="w-full gap-2"
        >
          {isOpen && <small>Cancel</small>}
          {!isOpen && (
            <>
              <DrawingPinFilledIcon />
              <small>Book Me</small>
            </>
          )}
        </Button>
      </motion.div>
    </div>
  );
};
