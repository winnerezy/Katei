import { configureStore } from "@reduxjs/toolkit"
import sidebarReducer from './sidebarSlice';
import modalReducer from './modalSlice';
import editModalReducer from './editModalSlice';
import taskReducer from './taskSlice';
import assignmentReducer from './assignmentSlice';

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        modal: modalReducer,
        tasks: taskReducer,
        assignments: assignmentReducer,
        editModal: editModalReducer
    }
})

export default store

export type AppDispatch = typeof store.dispatch