'use client'

import { motion } from "framer-motion"
import { Checkbox } from "@nextui-org/checkbox";
export const TaskCard = ({ title, description }: Task) => {
  return (
    <motion.article className="w-full h-12 cursor-pointer border rounded-[20px] flex items-center gap-2 p-2 shadow-sm"
    whileHover={{
        translateY: -5
    }}
    >
        <Checkbox className="rounded-[10px]"/>
        <div className="flex flex-col items-start justify-center">
            <p className="font-medium text-sm tracking-tight">{ title }</p>
            <p className="font-extralight text-xs line-clamp-1">{ description }</p>
        </div>
    </motion.article>
  )
}
