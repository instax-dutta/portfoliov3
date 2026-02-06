import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/ui/animated-text"
import { PatternText } from "@/components/ui/pattern-text"
import { cn } from "@/lib/utils"

const Default = () => <Button>Button</Button>

const Reverse = () => <Button variant="reverse">Reverse</Button>

const NoShadow = () => <Button variant="noShadow">No Shadow</Button>

const Neutral = () => <Button variant="neutral">Neutral</Button>

function DefaultDemo() {
  return <AnimatedText text="Mishra Hub" />
}

function CustomStyleDemo() {
  return (
    <AnimatedText
      text="Custom Style"
      textClassName="text-6xl bg-gradient-to-r from-blue-600 to-emerald-600 text-transparent bg-clip-text"
      underlineGradient="from-red-500 via-yellow-500 to-green-500"
      underlineHeight="h-2"
      underlineOffset="-bottom-4"
    />
  )
}

function HeadingDemo() {
  return (
    <AnimatedText
      text="As H2 Element"
      as="h2"
      textClassName="text-2xl"
      underlineClassName="rounded-full"
    />
  )
}

function SlowAnimationDemo() {
  return (
    <AnimatedText
      text="Slower Animation"
      duration={0.8}
      delay={0.2}
    />
  )
}

function PatternTextDemo() {
  return (
    <div className="relative flex min-h-[50vh] w-full flex-col items-center justify-center overflow-hidden">
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 mx-auto max-w-3xl rounded-full",
          "bg-[radial-gradient(circle_at_top,var(--color-primary)/15,transparent_55%)] blur-3xl",
        )}
      />
      <PatternText text="21st.dev" className="text-[clamp(3rem,12vw,8rem)] text-white" />
    </div>
  )
}

export {
  Default,
  Reverse,
  NoShadow,
  Neutral,
  DefaultDemo,
  CustomStyleDemo,
  HeadingDemo,
  SlowAnimationDemo,
  PatternTextDemo,
}

