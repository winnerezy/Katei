'use client'

import { CalendarCog, LucideLayoutDashboard, Notebook, PanelBottomClose, SidebarCloseIcon, XIcon } from "lucide-react"
import { NavButton } from "./NavButton"
import { cn } from "@/lib/utils"
import { useDispatch, useSelector } from "react-redux"
import { close, open } from "@/lib/redux/sidebarSlice"
import { BsCardList } from "react-icons/bs"

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
    <aside className={cn("w-[250px] min-h-screen bg-[--bg3] flex flex-col gap-12 items-center py-20 max-md:absolute max-md:top-0 max-md:left-0 transition duration-200 z-[99999] px-8", isOpen ? "max-md:translate-x-0 w-full" : "max-md:-translate-x-full")}>
       <XIcon 
       className="absolute md:hidden top-6 left-4 cursor-pointer"
       onClick={handleSideBar}
       />
       <h3 className="text-2xl font-semibold tracking-wide w-full text-start ml-16">Overview</h3>
        <NavButton path="/dashboard">
            <LucideLayoutDashboard className="absolute left-4"/>
            <p>Dashboard</p>
        </NavButton>
        <NavButton path="/assignments">
            <Notebook className="absolute left-4"/>
            <p>Assignments</p>
        </NavButton>
        <NavButton path="/flashcards">
            <BsCardList className="absolute left-4"/>
            <p>Flash Cards</p>
        </NavButton>
        <NavButton path="/planner">
            <CalendarCog className="absolute left-4"/>
            <p>Planner</p>
        </NavButton>
    </aside>
  )
}
