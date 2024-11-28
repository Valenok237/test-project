import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProject } from "../../models/types";

interface IProjectsState {
    projects: IProject[];
    isLoading: boolean;
    error: unknown
}

const initialState:IProjectsState = {
    projects: [],
    isLoading: false,
    error: ''
}

export const projectsSlice = createSlice({
    name:'projects',
    initialState,
    reducers: {
        projectsFetching(state) {
            state.isLoading = true;
        },
        projectsFetchingSuccess(state, action: PayloadAction<IProject[]>) {
            state.error = '';
            state.isLoading = false;
            state.projects = action.payload;
        },
        projectsFetchingError(state, action:PayloadAction<unknown>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default projectsSlice.reducer;