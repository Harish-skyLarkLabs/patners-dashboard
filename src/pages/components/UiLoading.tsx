import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";

export interface UiLoadingProps {
  height?: string;
}

const UiLoading: React.FC<UiLoadingProps> = ({ height = "100vh" }) => {
  return (
    <Box
      sx={{
        display: "flex",
        height: height || "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        background: "#242b3ab0",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 999999,
        overflow: "hidden",
      }}
    >
      <CircularProgress size={80} thickness={2} />
      
    </Box>
  );
};

export default UiLoading;
