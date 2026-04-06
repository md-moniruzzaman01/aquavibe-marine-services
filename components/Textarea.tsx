import * as React from "react"
import { cn } from "@/lib/utils";

// 1. Define the Interface for textarea attributes
interface TextareaProps extends React.ComponentProps<"textarea"> {}

// 2. Add types to forwardRef: <RefElement, Props>
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
)

Textarea.displayName = "Textarea"

export { Textarea }