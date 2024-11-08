"use client";

import { useCallback, useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useDebounce } from "@uidotdev/usehooks";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { LoaderIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export type SearchResult = {
  short_id: string;
  title: string;
  similarity: number;
  last_edited: string;
  content: string;
  plain_text: string;
  is_semantic?: boolean;
};

export const PilcrowSearch = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  /* eslint-disable */
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  /* eslint-disable */

  const debouncedSearchTerm = useDebounce(value, 750);

  useHotkeys("/", () => setOpen(true), {
    preventDefault: true,
  });

  /**
   * Enables better keyboard handling for the search input
   * - Enter to search
   * - Backspace to close the popover (when input empty)
   */
  const onKeyDown = useCallback(
    (e: any) => {
      if (!open) return;

      if (e.key === "Backspace" && value.length < 1) {
        e.preventDefault();
        setOpen(false);
      }

      if (e.key === "Enter") {
        setSearchQuery(value);
      }
    },
    [value.length],
  );

  /**
   * Handles the search input change
   * By setting searchQuery to "" when the input is empty, we can show recentSearches when there isn't a search query
   */
  const handleOnChange = useCallback(
    (e: any) => {
      if (e.target.value.length === 0) {
        setSearchQuery("");
        setValue(e.target.value);
        return;
      }
      setValue(e.target.value);
    },
    [value],
  );

  /**
   * Debounces the search query
   * We can search without hitting enter which is noice
   */
  useEffect(() => {
    if (debouncedSearchTerm.length < 2) return;

    if (debouncedSearchTerm.length === 0) {
      setSearchQuery("");
      return;
    }
    setSearchQuery(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  /**
   * Resets the search fields when the popover is closed
   */
  useEffect(() => {
    setValue("");
    setSearchQuery("");
  }, [open]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          onClick={() => setOpen(true)}
          className="flex w-full max-w-[480px] flex-row items-center justify-between gap-2 h-9 px-3 bg-ui overflow-hidden focus:ring-offset-2 focus-within:ring-2 focus-within:ring-primary rounded-md text-primary border border-primary hover:bg-ui-mid cursor-auto"
        >
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4 shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                clipRule="evenodd"
              />
            </svg>

            <small className="text-muted pointer-events-none">
              Search your notes
            </small>
          </div>
          <kbd className="font-mono text-primary text-xs tracking-widest shadow-sm px-1.5 h-6 rounded bg-gray-3 border border-white/10 inline-flex items-center uppercase">
            /
          </kbd>
        </div>
      </PopoverTrigger>
      <PopoverContent
        dark={false}
        sideOffset={-40}
        className="p-0 py-2 w-full md:w-[488px] bg-background dark:bg-ui gap-4"
      >
        <div className="px-2">
          <div className="w-full flex flex-row items-center gap-2 h-9 px-3 bg-ui border border-primary overflow-hidden focus:ring-offset-2 focus-within:ring-2 focus-within:ring-primary rounded-md text-primary dark:bg-background">
            {loading ? (
              <LoaderIcon
                className="w-4 h-4 animate-spin text-primary"
                strokeWidth={1.5}
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <Input
              type="search"
              aria-label="Search"
              placeholder="Search your notes"
              value={value}
              onChange={handleOnChange}
              onKeyDown={onKeyDown}
              className="w-full p-0 rounded-full bg-transparent border-none outline-none focus:focus-none focus:ring-0 focus:ring-transparent focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
            />
          </div>
        </div>
        {loading && <p>Loading...</p>}
        <div className="flex flex-col p-2 pb-0">
          <div className="flex flex-row items-center justify-between gap-4 p-2 rounded-md bg-background dark:bg-ui">
            <div className="flex flex-row items-center gap-4">
              <Skeleton className="w-12 h-12 rounded-md" />
              <div className="flex flex-col gap-2">
                <Skeleton className="w-32 h-3 rounded-full" />
                <Skeleton className="w-16 h-3 rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-4 p-2 rounded-md bg-background dark:bg-ui">
            <div className="flex flex-row items-center gap-4">
              <Skeleton className="w-12 h-12 rounded-md" />
              <div className="flex flex-col gap-2">
                <Skeleton className="w-32 h-3 rounded-full" />
                <Skeleton className="w-16 h-3 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
