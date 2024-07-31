 import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchDecks } from "./thunk";

type State = {
    isOpen: boolean,
    flashcards: FlashCard[]
    decks: Deck[]
    loading: boolean
    error: string | null
    deckmodal: boolean
    flashcardmodal: boolean
}

const initialState = {
    isOpen: false,
    flashcards: [],
    decks: [] as Deck[],
    loading: false,
    error: null,
    deckmodal: false,
    flashcardmodal: false
} as State

const flashCardModalSlice = createSlice({
    name: 'flashcard',
    initialState,
    reducers: {
        open: (state, action: PayloadAction<FlashCard[]>) => {
            state.isOpen = true;
            state.flashcards = action.payload;;
        },
        close: (state) => {
            state.isOpen = false
        },
        openDeckModel: (state) => {
            state.deckmodal = true
        },
        closeDeckModel: (state) => {
            state.deckmodal = false
        },
        openFlashCardModal: (state) => {
            state.flashcardmodal = true
        },
        closeFlashCardModal: (state) => {
            state.flashcardmodal = false
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDecks.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchDecks.fulfilled, (state, action: PayloadAction<Deck[]>) => {
            state.loading = false;
            state.decks = action.payload;
            state.error = null;
        })
        .addCase(fetchDecks.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to fetch decks"
        })
    }
})

export const { open, close, openDeckModel, closeDeckModel, openFlashCardModal, closeFlashCardModal } = flashCardModalSlice.actions

export default flashCardModalSlice.reducer