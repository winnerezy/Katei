import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getCurrentUser } from "@/lib/actions";
import { HelpCircle, Settings } from "lucide-react";
import Link from "next/link";
import { BsPerson } from "react-icons/bs";

export const ProfileImage = async () => {
  const user = await getCurrentUser();
  return (
    <div className="self-end">
      <Popover>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage src={user?.image!} alt={user?.name!} />
            <AvatarFallback>{user?.name!}</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] h-48 flex flex-col gap-y-4 mr-4">
          <Link href={"/profile"}>
            <Button className="relative w-full px-4 items-center gap-6 bg-white text-black border border-[border-bg]">
              <BsPerson className="absolute left-4" />
              <p>Profile</p>
            </Button>
          </Link>
          <Link href={"/settings"}>
            <Button className="relative w-full px-4 items-center gap-6 bg-white text-black border border-[border-bg]">
              <Settings className="absolute left-4" size={20} />
              <p>Settings</p>
            </Button>
          </Link>
          <Link href={"/help"}>
            <Button className="relative w-full px-4 items-center gap-6 bg-white text-black border border-[border-bg]">
              <HelpCircle className="absolute left-4" size={20} />
              <p>Help</p>
            </Button>
          </Link>
        </PopoverContent>
      </Popover>
    </div>
  );
};
