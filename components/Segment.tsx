'use client'

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

export const Segment = ({ className, children }: { className?: string, children: ReactNode }) => {
  return (
    <div className={cn("flex items-center p-2 rounded-[12px] shadow-sm bg-[--bg3]", className)}>
        { children }
    </div>
  )
}
