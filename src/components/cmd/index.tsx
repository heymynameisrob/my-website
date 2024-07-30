"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import { CommandView } from "@/components/cmd/views/view-default";
import { CommandViewCollections } from "@/components/cmd/views/view-collections";

/**
 * Command - A popup view that lists various actions a user can take usually by clicking UI elements.
 * - Base on cmdk by @pacocoursey and @shadcn
 */

export type ViewType = "default" | "collections" | null;

export const CommandPalette = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [view, setView] = useState<ViewType>("collections");

  /**
   * #0 - Open/Close Shortcut
   * Opens the Command Palette when the user presses the "Mod+k" key combination.
   * Makes a CMDK a, well, command+k
   */
  useHotkeys("Mod+k", () => setOpen(!open), {
    enableOnContentEditable: true,
  });

  /**
   * #1 - Key Events
   * Handle key events on CommandInput
   * - Backsapce on an empty input closes the window or goes back to home, depending on the active page
   * - > is a shortcut to go to the docs page
   */

  const onKeyDown = useCallback(
    (e: any) => {
      const isDefaultView = view === "default";
      if (!open) return;

      if (e.key === "Backspace" && value.length < 1 && !isDefaultView) {
        e.preventDefault();
        setView("default");
        bounce();
      }
      if (e.key === "Backspace" && value.length < 1 && isDefaultView) {
        e.preventDefault();
        setOpen(false);
      }
    },
    [open, view, value.length],
  );

  /**
   * #2 - Bounce Animation
   * Bounce the CommandInput when the user presses the backspace key
   */

  const bounce = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = "scale(0.95)";
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transform = "";
        }
      }, 100);

      setValue("");
    }
  }, []);

  /**
   * #3 - Change the page
   * Change the active page and bounce the dialog
   */
  const handleViewChange = useCallback(
    (selectedView: ViewType) => {
      setView(selectedView);
      bounce();
      setValue("");
    },
    [view],
  );

  /**
   * #4 - Views
   * Multiple ternary operators cached in a useMemo for perf
   */

  const views = useMemo(() => {
    switch (view) {
      case "collections":
        return <CommandViewCollections onAfterSelect={() => setOpen(false)} />;
      default:
        return (
          <CommandView
            setView={handleViewChange}
            onAfterSelect={() => setOpen(false)}
          />
        );
    }
  }, [view]);

  /**
   * #5 - Mount
   * So because next js bullshit, we need to do this so hydration errors dont occur
   */
  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) return null;

  return (
    <CommandDialog ref={ref} open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Search everything..."
        currentView={view === "default" ? null : view}
        value={value}
        onKeyDown={onKeyDown}
        onValueChange={(value: string) => setValue(value)}
      />
      <CommandList className="py-1">
        <CommandEmpty>No results found.</CommandEmpty>
        {views}
      </CommandList>
    </CommandDialog>
  );
};
