import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

const LoadingState = ({ message }) => {
  return (
    <Box sx={{ width: '100%', px: 3, py: 8, textAlign: 'center' }}>
      <CircularProgress />
      <Typography variant="h6" sx={{ mt: 2 }}>
        {message}
      </Typography>
    </Box>
  );
};

export default LoadingState;