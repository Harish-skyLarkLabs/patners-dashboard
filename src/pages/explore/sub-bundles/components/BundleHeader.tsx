import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowLeft } from 'lucide-react';

const BundleHeader = ({ bundle, onBackClick, isDarkMode }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
      <IconButton
        onClick={onBackClick}
        sx={{ mr: 2, bgcolor: isDarkMode ? 'grey.700' : 'grey.100' }}
      >
        <ArrowLeft size={20} />
      </IconButton>
      <Box>
        <Typography variant="h4" fontWeight="bold" color="text.primary">
          {bundle.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {bundle.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default BundleHeader;