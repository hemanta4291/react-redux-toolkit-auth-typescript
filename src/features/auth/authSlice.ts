import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import {authUserInterface} from './authInterface'
import { removeDataFromStorage } from "../../utils/localStorageConfig";

const initialState:authUserInterface = {
    accessToken: undefined,
    user: undefined,
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.user = {email:action.payload.user.email};
        },
        userLoggedOut: (state) => {
            state.accessToken = undefined;
            state.user = undefined;
            removeDataFromStorage('auth')
        },
    },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
