import { createSlice } from "@reduxjs/toolkit";
import { login, register, logout } from "./authThunk.ts";
import TokenService from "../../axios/tokenService.ts";

const authInitialState = {
    isLoading: false,
    registerLoading: false,
    registerSuccess: false,
    registerError: null,
    user: {},
    isAuthenticate: false,
    token: "",
    error: null
}

const authSlice = createSlice({
    name: "authSlice",
    initialState: authInitialState,
    reducers: {
        resetRegisterState: (state) => {
            state.registerLoading = false;
            state.registerSuccess = false;
            state.registerError = null;
        },
        resetAuthError: (state) => {
            state.error = null;
        },
        clearAuth: (state) => {
            state.isAuthenticate = false;
            state.token = "";
            state.user = {};
            TokenService.clearToken();
        }
    },
    extraReducers: (builder) => {
        builder
            // Login reducers
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.token = action.payload.data.access;
                state.user = action.payload.data.user;
                state.isAuthenticate = true;
                state.error = null;
                TokenService.setToken(action.payload.data.access);
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload?.error || "Login failed";
            })

            // Register reducers
            .addCase(register.pending, (state) => {
                state.registerLoading = true;
                state.registerError = null;
            })
            .addCase(register.fulfilled, (state) => {
                state.registerLoading = false;
                state.registerSuccess = true;
            })
            .addCase(register.rejected, (state, action) => {
                state.registerLoading = false;
                state.registerError = action.payload?.error?.data || "Registration failed";
            })

        builder
            .addCase(logout.pending, (state, action) => {
                TokenService.removeToken()
                TokenService.removeCurrentUser();
                state.isLoading = true;
                state.isAuthenticated = false;

            })
            .addCase(logout.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(logout.rejected, (state, action) => {
                state.isLoading = false;
            });
    }
})

export const { resetRegisterState, resetAuthError, clearAuth } = authSlice.actions;
export const authActions = authSlice.actions;
export default authSlice;