import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAssignments } from "./thunk";

const initialState = {
    assignments: null as Assignment[] | null,
    loading: false,
    error: null as string | null
}

export const assignmentSlice = createSlice({
    name: 'assignment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAssignments.pending, (state)=> {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchAssignments.fulfilled, (state, action: PayloadAction<Assignment[]>)=> {
            state.loading = false;
            state.assignments = action.payload;
        })
        .addCase(fetchAssignments.rejected, (state, action)=> {
            state.loading = false;
            state.error = action.error.message || "Failed to fetch assignments"
        })
    },
})

export default assignmentSlice.reducer