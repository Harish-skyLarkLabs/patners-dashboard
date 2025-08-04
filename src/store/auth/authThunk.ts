import { createAsyncThunk } from "@reduxjs/toolkit";

// Mock user data for static implementation
const mockUser = {
  id: 1,
  email: "user@example.com",
  first_name: "John",
  last_name: "Doe",
  username: "john.doe"
};

const mockToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM4NjIwNjI2LCJpYXQiOjE3MDcwODQ2MjYsImp0aSI6IjEyMzQ1NiIsInVzZXJfaWQiOjF9.mocktoken";

export const login = createAsyncThunk("auth/login",async(data: Record<string, any>,thunkAPI)=>{
    try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Simple validation - accept any email/password for demo
        if (data.email && data.password) {
            return {
                data: {
                    access: mockToken,
                    user: mockUser
                }
            };
        } else {
            return thunkAPI.rejectWithValue({ 
                error: { 
                    data: { detail: "Invalid credentials" }
                } 
            });
        }
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error });
    }
})

export const register = createAsyncThunk("auth/register",async(data:Record<string, any>,thunkAPI)=>{
    try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Simple validation for registration
        if (data.email && data.password && data.first_name && data.last_name) {
            return {
                data: {
                    message: "Registration successful"
                }
            };
        } else {
            return thunkAPI.rejectWithValue({ 
                error: { 
                    data: { detail: "Missing required fields" }
                } 
            });
        }
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error });
    }
})

export const logout = createAsyncThunk("auth/logout",async(_,thunkAPI)=>{
    try {
        // Simulate logout - just resolve successfully
        await new Promise(resolve => setTimeout(resolve, 200));
        return { data: { message: "Logged out successfully" } };
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error });
    }
})