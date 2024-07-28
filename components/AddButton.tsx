"use client";

import { PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { onOpen } from "@/lib/redux/modalSlice";
import React from "react";

export const AddButton = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        onClick={() => dispatch(onOpen())}
        className="w-24 h-8 self-end hover:bg-[--button-hover]"
      >
        <PlusCircleIcon className="size-6 z-40 absolute" />
      </Button>
    </>
  );
};


