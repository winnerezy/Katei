'use client'

import { CiMenuKebab } from "react-icons/ci";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime";
import { cn } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { openEditModal } from "@/lib/redux/editModalSlice";
import EditModal from "./modals/EditModal";
import { deleteAssignment } from "@/lib/actions";
import { fetchAssignments } from "@/lib/redux/thunk";
import { AppDispatch } from "@/lib/redux/store";
import { useToast } from "@/components/ui/use-toast"

export const AssignmentCard = ({
  id,
  title,
  description,
  due,
}:  Assignment) => {

  dayjs.extend(relativeTime)

  const data = { id, title, description, due}
  const dispatch = useDispatch<AppDispatch>();

  const { toast } = useToast()

  const handleDelete = async () => {
    try {
      await deleteAssignment(id)
      dispatch(fetchAssignments())
      // toast({
      //   title: "Scheduled: Catch up ",
      //   description: "Friday, February 10, 2023 at 5:57 PM",
      // })
    } catch (error: any) {
      console.log(error.message)
    }
  }



  return (
    <section className="relative max-w-[600px] w-full h-[150px] rounded-[10px] shadow-sm border border-[--border-bg] p-2 flex gap-2">
      <div className="flex flex-col w-full gap-2">
        <Image src="/public/card.svg" alt="assignment" width={30} height={30} />
        <div className="flex flex-col gap-2">
        <p className="text-md font-bold tracking-wide line-clamp-1">{title}</p>
        <p className="text-sm font-light">{ description }</p>
        </div>
        <div>
          <p className={cn(dayjs(due) <= dayjs(new Date()) ? "text-red-500" : "")}>{`Due ${ dayjs(due).from(new Date()) }`}</p>
        </div>
      </div>

      <DropdownMenu >
      <DropdownMenuTrigger asChild className="absolute right-[2px]">
      <button><CiMenuKebab className="cursor-pointer absolute right-4 top-4" /></button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 absolute top-4 right-4" >
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => dispatch(openEditModal(data))}>
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDelete}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    </section>
  );
};
