import { createTheme } from "@mui/material";
import { darkModePalette, lightModePalette } from "./palette.ts";
import { typography } from "./typography.ts";

export enum ThemeVariantsProps {
  light = "light",
  dark = "dark",
}

export const getTheme = (mode: ThemeVariantsProps) => {
  return createTheme({
    palette: {
      mode,
      ...(mode === ThemeVariantsProps.light ? lightModePalette : darkModePalette),
    },
    typography,
  });
};
