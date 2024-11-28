import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
    email: string | null;
    token: string;
    id: string;
    isLoading?: boolean;
}

const initialState:IUserState = {
    email: null,
    token: '',
    id: '',
    isLoading: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchingUser(state) {
            state.isLoading = true;
        },
        setUser(state, action:PayloadAction<IUserState>) {
            state.isLoading = false;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state){
            state.email = null;
            state.token = '';
            state.id = '';
            state.isLoading = false;
        }
    }
})

export default userSlice.reducer;