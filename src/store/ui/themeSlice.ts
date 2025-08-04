import { createSlice } from "@reduxjs/toolkit";
import { ThemeVariantsProps } from "../../theme/index.ts";

// Setting dark theme by default if the app is opened first time
if (!localStorage.getItem("themeMode")) localStorage.setItem("themeMode", ThemeVariantsProps.dark);

export interface ThemeStateType {
  themeMode: ThemeVariantsProps;
}

const initialState: ThemeStateType = {
  themeMode: localStorage.getItem("themeMode") === ThemeVariantsProps.light ? ThemeVariantsProps.light : ThemeVariantsProps.dark,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state: ThemeStateType) => {
      const newActiveTheme = state.themeMode === ThemeVariantsProps.light ? ThemeVariantsProps.dark : ThemeVariantsProps.light;
      state.themeMode = newActiveTheme;
      localStorage.setItem("themeMode", newActiveTheme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice;
