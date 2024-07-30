"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import { ContactFormButton } from "@/components/contact-form/contact-button";
import { ContactFormForm } from "@/components/contact-form/contact-form";
import { ContactSuccess } from "@/components/contact-form/contact-success";

export type FormStateType = "default" | "loading" | "success";

export const ContactForm = () => {
  const TITLE = "Contact me";

  const [open, setOpen] = useState<boolean>(false);
  const [formState, setFormState] = useState<FormStateType>("success");

  function submit() {
    setFormState("loading");
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  }

  const content = useMemo(() => {
    switch (formState) {
      case "success":
        return <ContactSuccess onClick={() => setOpen(false)} />;
      case "default":
        return (
          <ContactFormForm onAfterSubmit={() => setFormState("success")} />
        );
    }
  }, [formState]);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        setOpen(false);
      }

      if (
        (event.ctrlKey || event.metaKey) &&
        event.key === "Enter" &&
        open &&
        formState === "default"
      ) {
        submit();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, formState]);

  return (
    <MotionConfig
      transition={{
        type: "spring",
        duration: 0.4,
        bounce: 0,
      }}
    >
      <div className="fixed bottom-0 p-8 flex justify-center items-center w-full z-50 pointer-events-none">
        <div className="p-1 rounded-full bg-white border border-primary shadow-2xl pointer-events-auto dark:bg-ui">
          <ContactFormButton
            layoutId="container"
            onClick={() => {
              setOpen(true);
              setFormState("default");
            }}
          >
            {TITLE}
          </ContactFormButton>
        </div>
        <AnimatePresence mode="popLayout" initial={false}>
          {open ? (
            <motion.div
              layoutId="container"
              className="absolute pointer-events-auto pt-12 w-96 pb-4 bottom-4 rounded-lg bg-white border border-primary shadow-2xl dark:bg-ui"
            >
              <motion.span
                aria-hidden
                className={`absolute text-sm text-secondary font-medium left-4 top-4 ${
                  formState === "success" && "hidden"
                }`}
                layoutId="title"
              >
                {TITLE}
              </motion.span>
              {content}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
};
