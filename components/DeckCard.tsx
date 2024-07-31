"use client";

import { open } from "@/lib/redux/flashCardSlice";
import { useDispatch } from "react-redux";

export const DeckCard = ({ id, name, flashcards }: { id: string, name: string, flashcards: FlashCard[] }) => {

  const dispatch = useDispatch();
  return (
    <div
      className="relative w-48 h-16 p-2 rounded-lg border border-[--bg] shadow-md text-center flex flex-col items-center justify-center cursor-pointer"
      onClick={() => dispatch(open(flashcards))}
    >
      <p className="font-semibold">{ name }</p>
      <p className="font-light">
        { flashcards.length }
      </p>
    </div>
  );
};
