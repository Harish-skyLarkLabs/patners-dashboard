import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./ui/themeSlice.ts";
import authSlice from "./auth/authSlice.ts";
import productsSlice from "./products/productsSlice.ts";
import customerSlice from "./customers/customerSlice.ts";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    auth:authSlice.reducer,
    products : productsSlice.reducer,
    customers : customerSlice.reducer
  },
  middleware: (
    getDefaultMiddleware, // To remove response headers should not be non-serializable error while returning promise in action creators.
  ) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;