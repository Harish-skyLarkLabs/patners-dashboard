import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductById, fetchProductCategories } from './productThunk.ts';


export interface Tire {
  id: number;
  name: string;
  price: string;
  sub_bundle: number;
  features: string[];
}

export interface SubBundle {
  id: number;
  name: string;
  bundle: number;
  tires: Tire[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  created_by: number | null;
  sub_bundles: SubBundle[];
}

export interface Category {
  id: number;
  name: string;
}

interface ProductsState {
  products: Product[];
  product: Product | null;
  categories: Category[];
  loading: boolean;
  error: string | null;
  categoryLoading: boolean;
  categoryError: string | null;
  productLoading: boolean;
  productError: string | null;
}

// Define the initial state
const initialState: ProductsState = {
  products: [],
  product: null,
  categories: [],
  loading: false,
  error: null,
  categoryLoading: false,
  categoryError: null,
  productLoading: false,
  productError: null
};

// Create the slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearProductError: (state) => {
      state.error = null;
    },
    clearProductState: (state) => {
      state.product = null;
      state.productError = null;
    }
  },
  extraReducers: (builder) => {
    // Handle fetching all products
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      })
      
    // Handle fetching a single product
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.productLoading = true;
        state.productError = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action: PayloadAction<Product>) => {
        state.productLoading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.productLoading = false;
        state.productError = action.error.message || 'Failed to fetch product details';
      })
      
    // Handle fetching product categories
    builder
      .addCase(fetchProductCategories.pending, (state) => {
        state.categoryLoading = true;
        state.categoryError = null;
      })
      .addCase(fetchProductCategories.fulfilled, (state, action: PayloadAction<Category[]>) => {
        state.categoryLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchProductCategories.rejected, (state, action) => {
        state.categoryLoading = false;
        state.categoryError = action.error.message || 'Failed to fetch categories';
      });
  }
});

// Export actions and reducer
export const { clearProductError, clearProductState } = productsSlice.actions;
export default productsSlice;