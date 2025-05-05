import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAPI, postAPI } from "../../axios/utils.ts";
import { BASE_URL } from "../../utils/constants.ts";

export const getCustomersList = createAsyncThunk(
  "customers/getCustomerList",
  async (data, thunkAPI) => {
    try {
      return await getAPI(`${BASE_URL}/customers/`, data);
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.response });
    }
  }
);

export const getCustomerDashboard = createAsyncThunk(
  "customers/getCustomerDashboard",
  async (data, thunkAPI) => {
    try {
      return await getAPI(`${BASE_URL}/customers/dashboard/`, data);
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.response });
    }
  }
);

export const createBulkSubscriptions = createAsyncThunk(
    "customers/createBulkSubscriptions",
    async (data:any, thunkAPI) => {
      try {
        return await postAPI(`${BASE_URL}/subscriptions/bulk-create/`, data);
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.response });
      }
    }
  );