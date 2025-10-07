import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[48px] rounded-md border border-foreground/10 focus:border-accent",
        "font-light bg-primary px-4 py-5 text-base placeholder:text-foreground/40",
        "outline-none",
        className
      )}
      {...props}
    />
  )
}

export { Input }
