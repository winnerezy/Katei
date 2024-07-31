'use client'

import { Button } from "@nextui-org/react";
import { FlashCard } from "../FlashCard";
import { useDispatch, useSelector } from "react-redux";
import { Box, Modal } from "@mui/material";
import { close } from "@/lib/redux/flashCardSlice";

export const FlashCardModal = () => {

    const dispatch = useDispatch()

    const state = useSelector((state: any) => state.flashcard.isOpen);

  return (
    <Modal
      open={state}
      onClose={() => dispatch(close())}
      className="md:ml-[250px]"
    >
      <Box className="max-w-[1000px] w-full h-[500px] mx-2 p-6 flex flex-col bg-white rounded-lg absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] gap-8">
        <FlashCard/>
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
