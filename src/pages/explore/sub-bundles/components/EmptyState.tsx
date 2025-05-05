import React from 'react';
import { Box, Typography } from '@mui/material';

const EmptyState = ({ message }) => {
  return (
    <Box sx={{ textAlign: 'center', py: 6 }}>
      <Typography variant="h6" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
};

export default EmptyState;