import { type ClassValue, clsx } from "clsx";
import moment from "moment";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const getYear = (year?: number) => {
  if (!year) return moment().format("YYYY");
  return moment().year(year).format("YYYY");
};
