"use client";

import { PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { onOpen } from "@/lib/redux/modalSlice";

export const AddButton = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        onClick={() => dispatch(onOpen())}
        className="w-8 h-8 absolute right-4 top-8"
      >
        <PlusCircleIcon className="size-6 z-40 absolute" />
      </Button>
    </>
  );
};
