"use client";

import { PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import React from "react";
import { openDeckModel } from "@/lib/redux/flashCardSlice";

export const AddDeck = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        onClick={() => dispatch(openDeckModel())}
        className="w-24 h-8 self-end hover:bg-[--button-hover] shadow-md"
      >
        New Deck
      </Button>
    </>
  );
};


