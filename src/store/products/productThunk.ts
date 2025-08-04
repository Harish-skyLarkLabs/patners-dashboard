import { createAsyncThunk } from '@reduxjs/toolkit';
import { bundles } from '../../utils/constants.ts';
import { Product, Category } from './productsSlice.ts';

// Transform the static data to match the expected Product interface
const transformBundlesToProducts = (): Product[] => {
  return bundles.map(bundle => ({
    id: bundle.id,
    name: bundle.name,
    description: bundle.description,
    created_by: null,
    sub_bundles: bundle.subBundles.map(subBundle => ({
      id: subBundle.id,
      name: subBundle.name,
      bundle: bundle.id,
      tires: subBundle.tiers.map(tier => ({
        id: tier.id,
        name: tier.name,
        price: tier.price,
        sub_bundle: subBundle.id,
        features: tier.features
      }))
    }))
  }));
};

// Mock categories data
const mockCategories: Category[] = [
  { id: 1, name: "Defense & Security" },
  { id: 2, name: "Public Safety" },
  { id: 3, name: "Critical Infrastructure" },
  { id: 4, name: "Healthcare Security" }
];

export const fetchProducts = createAsyncThunk('products/fetchAll',async (_,  thunkAPI ) => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const transformedProducts = transformBundlesToProducts();
      return transformedProducts;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error });
  }
});

export const fetchProductById = createAsyncThunk('products/fetchById',async (productId: any,  thunkAPI ) => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 200));
      
      const transformedProducts = transformBundlesToProducts();
      const product = transformedProducts.find(p => p.id === parseInt(productId));
      
      if (product) {
        return product;
      } else {
        return thunkAPI.rejectWithValue({ error: { message: "Product not found" } });
      }
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

// Fetch product categories
export const fetchProductCategories = createAsyncThunk('products/fetchCategories',async (_,  thunkAPI ) => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 200));
      
      return mockCategories;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error });
    }
  }
);
