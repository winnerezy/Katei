import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAssignments, getFlashCardDecks, getTasks } from "../actions";

export const fetchTasks = createAsyncThunk(
  'task/fetchTasks',
  async () => {
    const response: Task[] = await getTasks();
    return response;
  }
);

export const fetchAssignments = createAsyncThunk(
  'assignment/fetchAssignments',
  async() => {
    const response: Assignment[] = await getAssignments();
    return response;
  }
)

export const fetchDecks = createAsyncThunk(
  'flashcard/fetchDecks',
  async() => {
    const response: Deck[] = await getFlashCardDecks()
    return response
  }
)