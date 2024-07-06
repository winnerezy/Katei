'use client'

import { Calendar, CalendarCog, LucideLayoutDashboard, Notebook, PanelBottomClose, SidebarCloseIcon, XIcon } from "lucide-react"
import { NavButton } from "./NavButton"
import { cn } from "@/lib/utils"
import { useDispatch, useSelector } from "react-redux"
import { close, open } from "@/lib/redux/sidebarSlice"

export const SideBar = () => {

    const isOpen = useSelector((state: any) => state.sidebar.isOpen)

    const dispatch = useDispatch()
    const handleSideBar = () => {
        if(isOpen){
            dispatch(close())
        } else {
            dispatch(open())
        }
    }
  return (
    <aside className={cn("md:w-[300px] w-full min-h-screen bg-[--bg] flex flex-col gap-8 items-center py-20 max-md:absolute transition duration-200", isOpen ? "max-md:translate-x-0" : "max-md:-translate-x-full")}>
       <XIcon 
       className="absolute md:hidden top-6 left-4 cursor-pointer"
       onClick={handleSideBar}
       />
        <NavButton>
            <LucideLayoutDashboard className="absolute left-4"/>
            <p>Dashboard</p>
        </NavButton>
        <NavButton>
            <Notebook className="absolute left-4"/>
            <p>Assignments</p>
        </NavButton>
        <NavButton>
            <Calendar className="absolute left-4"/>
            <p>Events</p>
        </NavButton>
        <NavButton>
            <CalendarCog className="absolute left-4"/>
            <p>Planner</p>
        </NavButton>
    </aside>
  )
}
