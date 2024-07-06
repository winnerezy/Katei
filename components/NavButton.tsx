import { ReactNode } from "react"


export const NavButton = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative cursor-pointer w-[200px] h-12 rounded-[10px] shadow-md flex items-center justify-center bg-white">
        { children }
    </div>
  )
}
