import { createAsyncThunk } from "@reduxjs/toolkit";
import { postAPI } from "../../axios/utils.ts";
import { BASE_URL } from "../../utils/constants.ts";


export const login = createAsyncThunk("auth/login",async(data: Record<string, any>,thunkAPI)=>{
    try {
        return await postAPI(`${BASE_URL}/api/customer/login/`,data)
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.response });
    }
})

export const register = createAsyncThunk("auth/register",async(data:Record<string, any>,thunkAPI)=>{
    try {
        return await postAPI(`${BASE_URL}/customers/`,data)
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.response });
    }
})

export const logout = createAsyncThunk("auth/logout",async(_,thunkAPI)=>{
    try {
        // return await postAPI(`${BASE_URL}/logout`)
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.response });
    }
})