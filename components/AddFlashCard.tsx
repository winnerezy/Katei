"use client";

import { PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import React from "react";
import { openFlashCardModal } from "@/lib/redux/flashCardSlice";

export const AddFlashCard = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        onClick={() => dispatch(openFlashCardModal())}
        className="w-24 h-8 self-end hover:bg-[--button-hover] shadow-md"
      >
       New Card
      </Button>
    </>
  );
};


