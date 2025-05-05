import React from 'react';
import { Box, Typography } from '@mui/material';
import { Check } from 'lucide-react';

const TierFeatureItem = ({ feature, theme }) => {
  return (
    <Box 
      component="li" 
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        mb: 1.5,
        p: 0.5,
        borderRadius: 1,
        '&:hover': {
          bgcolor: 'action.hover'
        }
      }}
    >
      <Check 
        size={16} 
        color={theme.palette.success.main} 
        style={{ marginRight: theme.spacing(1), marginTop: 2 }} 
      />
      <Typography variant="body2" color="text.secondary">
        {feature}
      </Typography>
    </Box>
  );
};

export default TierFeatureItem;