import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTasks } from "./thunk";


const initialState = {
    tasks: [] as Task[],
    loading: false,
    error: null as string | null
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchTasks.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
            state.loading = false;
            state.tasks = action.payload;

        })
        .addCase(fetchTasks.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || 'Failed to fetch tasks'
        })
    },
})

export default taskSlice.reducer