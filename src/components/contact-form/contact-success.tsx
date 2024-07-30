"use client";

import { useEffect } from "react";
import { useReward } from "react-rewards";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const ContactSuccess = ({ onClick }: { onClick: () => void }) => {
  const { reward } = useReward("rewardId", "emoji", {
    emoji: ["😍"],
  });

  useEffect(() => {
    reward();
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center gap-6 w-full px-4"
      key="success"
    >
      <motion.span
        animate={{
          scale: [0.95, 1.25, 1],
        }}
        className="!text-[40px]"
        id="rewardId"
      >
        😍
      </motion.span>
      <div className="flex flex-col justify-center items-center gap-2 px-6 text-center">
        <h3 className="font-medium !text-base">Thanks for reaching out</h3>
        <p className="!text-sm text-secondary">
          This is the start of something beautiful. <br /> I'll reach out and be
          in touch soon.
        </p>
      </div>
      <Button
        variant="secondary"
        size="sm"
        onClick={onClick}
        className="w-full"
      >
        OK, cool
      </Button>
    </div>
  );
};
