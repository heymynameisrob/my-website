"use client";

import { CommandItem } from "@/components/cmd/cmd-item";
import { CommandGroup } from "@/components/ui/command";

export const CommandViewCollections = ({
  onAfterSelect,
}: {
  onAfterSelect: () => void;
}) => {
  return (
    <CommandGroup heading="Collections">
      <CommandItem onSelect={() => onAfterSelect()}>Pilcrow</CommandItem>
      <CommandItem onSelect={() => {}}>Lantum</CommandItem>
      <CommandItem onSelect={() => {}}>AI</CommandItem>
    </CommandGroup>
  );
};
