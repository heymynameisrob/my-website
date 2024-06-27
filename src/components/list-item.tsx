import { ReactNode } from "react";

export const ListItem = ({
  label,
  children,
}: {
  label: string | ReactNode;
  children: ReactNode;
}) => (
  <div className="flex flex-col grid-cols-1 gap-1 md:grid md:grid-cols-4 md:gap-3 items-baseline">
    {typeof label === "string" ? (
      <time className="font-mono uppercase text-sm tabular-nums text-secondary col-span-1 md:mb-0">
        {label}
      </time>
    ) : (
      label
    )}
    <div className="flex flex-col gap-2 col-span-3">{children}</div>
  </div>
);
