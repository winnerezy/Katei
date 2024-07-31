"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Button,
  Textarea,
  Input,
  CircularProgress,
  Select,
  SelectItem,
} from "@nextui-org/react";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { createFlashCard, createFlashCardDeck } from "@/lib/actions";
import { AppDispatch } from "@/lib/redux/store";
import { Box } from "@mui/material";
import { closeFlashCardModal } from "@/lib/redux/flashCardSlice";

export default function NewFlashCard() {

  const [quesion, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [folderId, setFolderId] = useState<string>("")

  const decks: Deck[] = useSelector((state: any) => state.flashcard.decks)
  const state = useSelector((state: any) => state.flashcard.flashcardmodal);

  const dispatch = useDispatch<AppDispatch>();

  const handleQuestion = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const handleAdd = async () => {
    setIsLoading(true);
    try {
      await createFlashCard(
        quesion,
        answer,
        folderId
      );

      setQuestion("");
      setAnswer("");
    } catch (error: any) {
      console.error("Error creating item:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeck = (e: ChangeEvent<HTMLSelectElement>) => {
    setFolderId(e.target.value);
  };

  return (
    <Modal
      open={state}
      onClose={() => dispatch(closeFlashCardModal())}
      className="md:ml-[250px]"
    >
      <Box className="max-w-[1000px] w-full h-[500px] mx-2 p-6 flex flex-col bg-white rounded-lg absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] gap-8">
        <div className="flex gap-4 w-full items-center">
          <p className="text-xl font-bold">New Flash Card</p>
          <Select
            items={decks}
            label="Create Flash Card"
            placeholder="Select a deck"
            className="w-60"
            onChange={handleDeck}
          >
            {decks.map((deck: Deck) => (
              <SelectItem key={deck.id}>{deck.name}</SelectItem>
            ))}
          </Select>
        </div>
        <section className="flex flex-col w-full gap-4">
          <div className="flex flex-col gap-6 w-full outline-none">
            <Input placeholder="Enter the quesion" onChange={handleQuestion} />
            <Textarea
              placeholder="Enter the answer"
              maxLength={300}
              onChange={handleAnswer}
            />
          </div>
        </section>
        <div className="absolute right-6 bottom-6 flex gap-4">
          <Button
            className="w-24 h-10 bg-transparent"
            onClick={() => dispatch(closeFlashCardModal())}
          >
            Close
          </Button>
          <Button
            className="bg-[--bg] w-24 h-10 flex items-center justify-center text-center"
            onClick={handleAdd}
          >
            {isLoading ? <CircularProgress size="sm" /> : <p>Add</p>}
          </Button>
        </div>
      </Box>
    </Modal>
  );
}
