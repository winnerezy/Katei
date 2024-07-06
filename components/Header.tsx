'use client'

import { close, open } from "@/lib/redux/sidebarSlice";
import { Menu } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {

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
    <header className="w-full h-10 flex md:hidden items-center justify-between">
        <Menu 
        className="cursor-pointer"
        onClick={handleSideBar}
        />
        <p className="text-2xl font-bold">Katei</p>
    </header>
  )
}
