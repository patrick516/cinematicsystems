import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely (used by shadcn)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
