"use client";

import { FlashCard } from "../FlashCard";
import { useDispatch, useSelector } from "react-redux";
import { Box, Modal } from "@mui/material";
import { close } from "@/lib/redux/flashCardSlice";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";
export const FlashCardModal = () => {
  const dispatch = useDispatch();

  const state = useSelector((state: any) => state.flashcard.isOpen);

  const flashcards: FlashCard[] = useSelector((state: any) => state.flashcard.flashcards);

  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(flashcards)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  return (
    <Modal open={state} onClose={() => dispatch(close())}>
      <Box className="max-w-[1000px] w-full h-[500px] mx-2 p-6 flex flex-col bg-white rounded-lg absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] gap-8">
        <motion.section className="flex items-center justify-center">
          {
          flashcards.length > 0 && (
            <FlashCard key={flashcards[currentIndex].id} {...flashcards[currentIndex]} />
          )
          }
        </motion.section>
        <p className="text-center">{ `${flashcards.indexOf(flashcards[currentIndex]) + 1} / ${flashcards.length}` }</p>
        <div className="flex gap-4 self-center">
        <Button onClick={handlePrevious} className="w-36">
          Previous
        </Button>
        <Button onClick={handleNext} className="w-36">
          Next
        </Button>

        </div>
        <div className="absolute right-6 bottom-6 flex gap-4">
          <Button
            className="w-24 h-10 bg-transparent"
            onClick={() => dispatch(close())}
          >
            Close
          </Button>
        </div>
      </Box>
    </Modal>
  );
};
