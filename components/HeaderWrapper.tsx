import { ReactNode } from "react"

export const HeaderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <header className="w-full h-[80px] bg-[--bg] p-2 flex items-center">
        { children }
    </header>
  )
}