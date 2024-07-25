import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTasks } from "../actions";

export const fetchTasks = createAsyncThunk(
  'task/fetchTasks',
  async () => {
    const response: Task[] = await getTasks();
    return response;
  }
);
