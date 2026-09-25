import { cn } from "@/lib/utils";

/** Small caption marking a section's content as sample content. */
export function DemoNote({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("mt-4 text-center text-xs text-gray-500", className)}>{children}</p>;
}
