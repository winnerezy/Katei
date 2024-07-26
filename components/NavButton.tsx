import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"


export const NavButton = ({ path, children }: { path: string, children: ReactNode }) => {
  
  const pathname = usePathname()

  return (
    <Link href={`${path}`} className={cn("relative cursor-pointer w-full md:w-[200px] h-12 rounded-[10px] flex items-center justify-center", path === pathname ? "bg-white shadow-md" : "")}>
        { children }
    </Link>
  )
}
