import React from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { ArrowLeft } from 'lucide-react';

const TierHeader = ({ bundle, subBundle, onBackClick, isDarkMode }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      p: 3,
      // bgcolor: '#0a0a0a',
      borderBottom: '1px solid #333'
    }}>
      <IconButton
        onClick={onBackClick}
        sx={{ 
          mr: 3, 
          bgcolor: '#1a1a1a',
          border: '1px solid #333',
          color: 'white',
          '&:hover': {
            bgcolor: '#2a2a2a'
          }
        }}
      >
        <ArrowLeft size={20} />
      </IconButton>
      <Box>
        <Typography variant="body2" color="#888" sx={{ mb: 0.5 }}>
          {bundle?.name?.replace(' SUITE', '') || 'Security Suite'} / {subBundle?.name?.replace(' Package', '') || 'Security Package'}
        </Typography>
        <Typography variant="h6" fontWeight="medium" color="white">
          Choose the tier that best fits your needs
        </Typography>
      </Box>
    </Box>
  );
};

export default TierHeader;