"use client";

import { AppDispatch } from "@/lib/redux/store";
import { fetchDecks } from "@/lib/redux/thunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeckCard } from "./DeckCard";

export const FlashCardGrid = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchDecks());
  }, []);

  const decks: Deck[] = useSelector((state: any) => state.flashcard.decks);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
      {decks.map((deck) => (
        <DeckCard {...deck} key={deck.id} />
      ))}
    </section>
  );
};
