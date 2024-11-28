import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../../models/types";

interface ITasksState {
    tasks: ITask[];
    isLoading: boolean;
    error: unknown
}

const initialState:ITasksState = {
    tasks: [],
    isLoading: false,
    error: ''
}

export const tasksSlice = createSlice({
    name:'tasks',
    initialState,
    reducers: {
        tasksFetching(state) {
            state.isLoading = true;
        },
        tasksFetchingSuccess(state, action: PayloadAction<ITask[]>) {
            state.error = '';
            state.isLoading = false;
            state.tasks = action.payload;
        },
        tasksFetchingError(state, action:PayloadAction<unknown>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export default tasksSlice.reducer;