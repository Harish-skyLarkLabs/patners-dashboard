import React from 'react';
import { Box, Typography } from '@mui/material';
import TierFeatureItem from './TierFeatureItem.tsx';

const TierFeaturesList = ({ features, theme }) => {
  if (!features || features.length === 0) {
    return (
      <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
        No features specified for this tier.
      </Typography>
    );
  }

  return (
    <Box component="ul" sx={{ p: 0, m: 0, listStyleType: 'none' }}>
      {features.map((feature, index) => (
        <TierFeatureItem 
          key={index} 
          feature={feature} 
          theme={theme} 
        />
      ))}
    </Box>
  );
};

export default TierFeaturesList;