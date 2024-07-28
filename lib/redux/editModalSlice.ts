import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AssignmentData = {
    id: string
    title: string
    description: string | null
    due: Date
}

type EditModal = {
    isOpen: boolean,
    assignmentData: AssignmentData| null,
}

const initialState: EditModal = {
    isOpen: false,
    assignmentData: null
}

export const editModalSlice = createSlice({
    name: 'editModal',
    initialState,
    reducers: {
        openEditModal: (state, action: PayloadAction<AssignmentData>) => {
            state.isOpen = true;
            state.assignmentData = action.payload;
        },
        closeEditModal: (state) => {
            state.isOpen = false;
            state.assignmentData = null;
        }
    }
})

export const { openEditModal, closeEditModal } = editModalSlice.actions
export default editModalSlice.reducer