import * as React from "react"

import { cn } from "@/lib/utils"

type PatternTextProps<T extends React.ElementType = "p"> = {
  text: string
  as?: T
} & Omit<React.ComponentPropsWithoutRef<T>, "children" | "dangerouslySetInnerHTML">

const PatternText = React.forwardRef<HTMLElement, PatternTextProps>(
  ({ text, as, className, ...props }, ref) => {
    const Component = (as ?? "p") as React.ElementType

    return (
      <Component
        ref={ref as never}
        data-shadow={text}
        className={cn(
          "relative inline-block font-extrabold tracking-tight leading-tight text-[clamp(2.5rem,8vw,5.5rem)] text-white",
          "[text-shadow:0.12em_0.2em_0_rgba(0,0,0,0.55)]",
          "after:absolute after:inset-0 after:translate-x-[0.2rem] after:translate-y-[0.35rem] after:content-[attr(data-shadow)] after:-z-10",
          "after:text-transparent after:bg-clip-text after:opacity-90 after:blur-[0.4px]",
          "after:bg-[linear-gradient(135deg,var(--color-primary),var(--color-accent),var(--color-secondary))]",
          "after:bg-[length:1rem_1rem] after:animate-shadanim",
          className,
        )}
        {...props}
      >
        {text}
      </Component>
    )
  },
)

PatternText.displayName = "PatternText"

export { PatternText }

