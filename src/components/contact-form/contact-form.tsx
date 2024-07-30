"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LoaderIcon } from "lucide-react";

const formSchema = z.object({
  sender: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(2, {
    message: "Please enter a message",
  }),
});

export const ContactFormForm = ({
  onAfterSubmit,
}: {
  onAfterSubmit: () => void;
}) => {
  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sender: "",
      message: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    setIsPending(true);
    fetch("/api/send", {
      body: JSON.stringify(values),
      method: "POST",
    })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setIsPending(false);
        onAfterSubmit();
        form.reset();
      });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-full space-y-4 px-4"
      >
        <FormField
          control={form.control}
          name="sender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input autoFocus placeholder="your@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none"
                  placeholder="Your message here..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isPending}
          size="sm"
          variant="default"
          className="w-full"
          type="submit"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 25 }}
              key={isPending ? "loading" : "submit"}
            >
              {isPending ? (
                <LoaderIcon
                  size={20}
                  className="animate animate-spin delay-150"
                />
              ) : (
                <span className="!text-sm !tracking-tight">Submit</span>
              )}
            </motion.span>
          </AnimatePresence>
        </Button>
      </form>
    </Form>
  );
};
