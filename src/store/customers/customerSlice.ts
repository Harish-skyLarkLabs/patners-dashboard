import { createSlice } from "@reduxjs/toolkit";
import { getCustomersList, getCustomerDashboard, createBulkSubscriptions } from "./customerThunk.ts";

const customerInitialState = {
  isLoading: false,
  customers: [],
  dashboard: {
    customer: null,
    total_spent: 0,
    subscriptions: [],
    latest_bundles: []
  },
  checkoutStatus: {
    loading: false,
    success: false,
    error: null
  },
  error: null
};

const customerSlice = createSlice({
  name: "customerSlice",
  initialState: customerInitialState,
  reducers: {
    resetCheckoutStatus: (state) => {
      state.checkoutStatus = {
        loading: false,
        success: false,
        error: null
      };
    }
  },
  extraReducers: (builder) => {
    builder
      // Get Customers List
      .addCase(getCustomersList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCustomersList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.customers = action.payload.data || [];
      })
      .addCase(getCustomersList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error || "Failed to fetch customers";
      })
      
      // Get Customer Dashboard
      .addCase(getCustomerDashboard.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCustomerDashboard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dashboard = {
          customer: action.payload.data?.customer || null,
          total_spent: action.payload.data?.total_spent || 0,
          subscriptions: action.payload.data?.subscriptions || [],
          latest_bundles: action.payload.data?.latest_bundles || []
        };
      })
      .addCase(getCustomerDashboard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error || "Failed to fetch customer dashboard";
      })

      .addCase(createBulkSubscriptions.pending, (state) => {
        state.checkoutStatus.loading = true;
        state.checkoutStatus.success = false;
        state.checkoutStatus.error = null;
      })
      .addCase(createBulkSubscriptions.fulfilled, (state, action) => {
        state.checkoutStatus.loading = false;
        state.checkoutStatus.success = true;
      })
      .addCase(createBulkSubscriptions.rejected, (state, action) => {
        console.log("🚀 ~ .addCase ~ action:", action)
        state.checkoutStatus.loading = false;
        state.checkoutStatus.error = action.payload?.error?.data || "Failed to complete checkout";
      })
  }
});

export const customerActions = customerSlice.actions;
export default customerSlice;