'use client'

import { motion } from "framer-motion"
import { Checkbox } from "@nextui-org/checkbox";
import { changeStatus } from "@/lib/actions";
export const TaskCard = ({ title, description, id, status }: Task) => {

  const handleStatus = async() => {
    await changeStatus(id)
  }
  return (
    <motion.article className="w-full h-12 cursor-pointer border rounded-[20px] flex items-center gap-2 p-2 shadow-sm"
    whileHover={{
        translateY: -5
    }}
    >
        <Checkbox className="rounded-[10px]" onClick={handleStatus} defaultSelected={status == 'completed'}/>
        <div className="flex flex-col items-start justify-center">
            <p className="font-medium text-sm tracking-tight">{ title }</p>
            <p className="font-extralight text-xs line-clamp-1">{ description }</p>
        </div>
    </motion.article>
  )
}
