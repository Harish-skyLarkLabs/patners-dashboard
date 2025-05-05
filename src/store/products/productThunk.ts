import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants.ts';
import { getAPI } from '../../axios/utils.ts';



export const fetchProducts = createAsyncThunk('products/fetchAll',async (_,  thunkAPI ) => {
    try {
      const response = await getAPI(`${BASE_URL}/api/products/bundles/`);
      return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.response });
  }
});


export const fetchProductById = createAsyncThunk('products/fetchById',async (productId: any,  thunkAPI ) => {
    try {
      const response = await getAPI(`${BASE_URL}/api/products/bundles/${productId}/`);
      return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.response });
    }
  }
);

// Fetch product categories
export const fetchProductCategories = createAsyncThunk('products/fetchCategories',async (_,  thunkAPI ) => {
    try {
      const response = await getAPI(`${BASE_URL}/api/categories`);
      return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.response });
    }
  }
);
