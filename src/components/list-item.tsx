import { ReactNode } from "react";

export const ListItem = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => (
  <div className="grid grid-cols-1 gap-2 md:grid-cols-5 items-baseline">
    <time className="font-sans text-sm tabular-nums text-secondary col-span-1 md:mb-0">
      {label}
    </time>
    <div className="flex flex-col gap-2 col-span-4">{children}</div>
  </div>
);
