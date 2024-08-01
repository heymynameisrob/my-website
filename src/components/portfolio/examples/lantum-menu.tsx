"use client";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
  CommandItem,
  CommandGroup,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

const STAFF: any[] = [
  {
    id: "1",
    name: "Dr. John Doe",
    role: "SHO",
    checked: true,
  },
  {
    id: "2",
    name: "Dr. Jane Doe",
    role: "FY1",
    checked: true,
  },
  {
    id: "3",
    name: "Dr. John Smith",
    role: "SHO",
    checked: true,
  },
  {
    id: "4",
    name: "Dr. Jane Smith",
    role: "FY1",
    checked: true,
  },
  {
    id: "5",
    name: "Dr. John Johnson",
    role: "SHO",
    checked: true,
  },
  {
    id: "6",
    name: "Dr. Jane Johnson",
    role: "SHO",
    checked: true,
  },
  {
    id: "7",
    name: "Dr. John Brown",
    role: "FY1",
    checked: true,
  },
  {
    id: "8",
    name: "Dr. Jane Brown",
    role: "FY1",
    checked: true,
  },
  {
    id: "9",
    name: "Dr. John White",
    role: "Reg",
    checked: true,
  },
  {
    id: "10",
    name: "Dr. Jane White",
    role: "Reg",
    checked: true,
  },
];

export const LantumMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [staff, setStaff] = useState<Array<any>>(STAFF);

  useHotkeys(
    "shift+s",
    () => {
      setOpen(!open);
    },
    {
      preventDefault: true,
    },
  );

  const activeStaffCount = staff.filter((staff) => staff.checked).length;

  const handleStaffToggle = (id: string) => {
    const updatedStaff = staff.map((staff) => {
      if (staff.id === id) {
        return {
          ...staff,
          checked: !staff.checked,
        };
      }
      return staff;
    });
    setStaff(updatedStaff);
  };

  const handleSelectAll = () => {
    if (activeStaffCount < 10) {
      setStaff(STAFF);
    } else {
      setStaff(
        staff.map((staff) => {
          return {
            ...staff,
            checked: false,
          };
        }),
      );
    }
  };

  return (
    <div className="relative flex items-center w-full bg-background border-primary border border-l-0 border-r-0 gap-2 p-3">
      <div className="w-[240px] h-10 bg-ui rounded-lg"></div>
      <Popover modal={true} open={open} onOpenChange={setOpen}>
        <PopoverTrigger className="flex justify-between items-center gap-4 w-[240px] px-3 py-px bg-white h-10 rounded-lg shadow-[0px_1px_0px_1px_rgba(255,_255,_255,_0.03),_0px_0px_0px_1px_rgba(0,_0,_0,_0.10),_0px_1px_3px_0px_rgba(0,_0,_0,_0.06)] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 hover:bg-ui-low data-[state=open]:ring-2 data-[state=open]:ring-primary data-[state=open]:ring-offset-2 data-[state=open]:ring-offset-background dark:bg-ui dark:hover:bg-ui-mid dark:data-[state=open]:bg-white/10 dark:border dark:border-primary">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5 opacity-80"
            >
              <path d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 0 0-1.588-3.755 4.502 4.502 0 0 1 5.874 2.636.818.818 0 0 1-.36.98A7.465 7.465 0 0 1 14.5 16Z" />
            </svg>
            <p className="font-medium tabular-nums !tracking-normal !text-primary">
              Staff{" "}
              <span className="!text-sm text-secondary">
                ({activeStaffCount})
              </span>
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="dark p-0 bg-black w-[240px] border border-primary rounded-lg"
        >
          <Command loop className="bg-black">
            <CommandInput className="bg-black" placeholder="Search staff..." />
            <CommandEmpty>No staff matching that result</CommandEmpty>
            <CommandList>
              <CommandGroup className="bg-black py-2 h-[155px] overflow-y-scroll">
                <CommandItem
                  onSelect={() => handleSelectAll()}
                  className="gap-4 justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Checkbox checked={activeStaffCount == 10} />
                    <small className="text-primary">Select all</small>
                  </div>
                </CommandItem>
                <CommandSeparator className="my-px" />
                {staff.map((staff, index) => (
                  <CommandItem
                    key={index}
                    onSelect={() => handleStaffToggle(staff.id)}
                    className="gap-4 justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <Checkbox checked={staff.checked} />
                      <small className="text-primary">{staff.name}</small>
                    </div>
                    <Badge variant="outline">{staff.role}</Badge>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <div className="w-[240px] h-10 bg-ui rounded-lg"></div>
      <div className="absolute -bottom-10 left-0 right-0 flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-secondary">Toggle menu with</span>
          <div className="flex items-center gap-1">
            <kbd className="flex !text-xs items-center justify-center text-secondary min-w-5 bg-background border border-b-2 border-primary shadow-sm rounded">
              ⇧
            </kbd>
            <kbd className="flex !text-xs items-center justify-center text-secondary min-w-5 bg-background border border-b-2 border-primary shadow-sm rounded">
              S
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
};
