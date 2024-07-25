import { configureStore } from "@reduxjs/toolkit"
import sidebarReducer from './sidebarSlice';
import modalReducer from './modalSlice';
import taskReducer from './taskSlice';

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        modal: modalReducer,
        tasks: taskReducer
    }
})

export default store

export type AppDispatch = typeof store.dispatch