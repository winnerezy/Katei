import { cn } from "@/lib/utils"
import { ReactNode } from "react"

export const SectionWrapper = ({ className, children }: { className?: string, children: ReactNode }) => {
  return (
    <section className={cn("w-full h-[400px] lg:h-[600px] p-2 flex", className)}>
        { children }
    </section>
  )
}
