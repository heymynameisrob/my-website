"use client";

import { ReactNode } from "react";
import { CommandItem as BaseItem } from "@/components/ui/command";

export const CommandItem = ({
  children,
  onSelect,
  shortcut,
  className,
}: {
  children: ReactNode;
  onSelect: (e: any) => void;
  shortcut?: string;
  className?: string;
}) => {
  return (
    <BaseItem
      className={`gap-2 justify-between group ${className}`}
      onSelect={onSelect}
    >
      <div className="flex items-center gap-2">{children}</div>
      {shortcut ? (
        <kbd className="font-mono text-xs tracking-widest shadow-sm px-1.5 h-6 rounded bg-ui-high border border-white/10 inline-flex items-center uppercase opacity-0 group-[[aria-selected=true]]:opacity-100">
          {shortcut}
        </kbd>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5 opacity-0 group-[[aria-selected=true]]:opacity-80"
        >
          <path
            fillRule="evenodd"
            d="M16.25 3a.75.75 0 0 0-.75.75v7.5H4.56l1.97-1.97a.75.75 0 0 0-1.06-1.06l-3.25 3.25a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 0 0 1.06-1.06l-1.97-1.97h11.69A.75.75 0 0 0 17 12V3.75a.75.75 0 0 0-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </BaseItem>
  );
};
