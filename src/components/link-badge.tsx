import { cn } from "@/lib/utils";

export function LinkBadge({
  href,
  children,
  title,
}: {
  href: string;
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <a
      title={title}
      aria-label={title}
      data-microtip-position="top"
      role="tooltip"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={cn(
        "inline-flex items-center align-baseline gap-1.5 px-1.5 py-0.5 h-7 rounded-lg bg-gray-1 text-primary shadow-[0px_1px_0px_1px_rgba(255,_255,_255,_0.03)_inset,_0px_0px_0px_1px_rgba(0,_0,_0,_0.10),_0px_1px_3px_0px_rgba(0,_0,_0,_0.06)] dark:shadow-[0px_1px_0px_0px_rgba(255,_255,_255,_0.10)_inset,_0px_0px_0px_1px_rgba(0,_0,_0,_0.25)]",
        "dark:bg-gray-3 scale-100 hover:bg-ui dark:hover:bg-gray-4 active:scale-95 duration-75",
      )}
    >
      {children}
    </a>
  );
}
