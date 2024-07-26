import { CiMenuKebab } from "react-icons/ci";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime";
export const AssignmentCard = ({
  title,
  due,
}:  Assignment) => {

  dayjs.extend(relativeTime)
  return (
    <article className="relative max-w-[600px] w-full h-[150px] rounded-[10px] shadow-sm border p-2 flex gap-2">
      <div className="flex flex-col w-full gap-4">
        <Image src="/public/card.svg" alt="assignment" width={30} height={30} />
        <p className="text-md font-bold tracking-wide">{title}</p>
        <div>
          <p>{`Due ${ dayjs(due).from(new Date()) }`}</p>
        </div>
      </div>
      <Popover>
        <PopoverTrigger>
          <CiMenuKebab className="cursor-pointer absolute right-4 top-4" />
        </PopoverTrigger>
        <PopoverContent className="w-24 h-24 rounded-lg">
          <div ></div>
        </PopoverContent>
      </Popover>
    </article>
  );
};
