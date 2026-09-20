import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-ink-line px-2.5 py-1 text-xs font-medium text-slate-muted",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
