import { createSlice } from "@reduxjs/toolkit";


export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false
    },
    reducers: {
        onOpen: (state) => {
            state.isOpen = true
        },
        onClose: (state) => {
            state.isOpen = false
        }
    }
})

export const { onOpen, onClose } = modalSlice.actions
export default modalSlice.reducer