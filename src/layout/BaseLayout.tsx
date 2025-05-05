import { Box, Switch } from "@mui/material";
import UiLoading from "../pages/components/UiLoading.tsx";
import React, { useState } from "react";

export interface BaseLayoutProps {
  children?: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  // Simulated values instead of pulling from Redux store
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const isAuthenticated = false; // Change to `true` to hide the theme switch
  const isLoading = false; // Change to `true` to show loading

  const handleToggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <>
      {isLoading && <UiLoading height="100vh" />}
      <Box>
        {!isAuthenticated && (
          <Switch
            name="theme"
            sx={{ position: "absolute", right: "10px", top: "10px", zIndex: 1 }}
            onChange={handleToggleTheme}
            checked={isDarkTheme}
          />
        )}
        {children}
      </Box>
    </>
  );
}
