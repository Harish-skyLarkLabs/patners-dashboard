import React from 'react';
import { Box, Stack, Avatar, Typography } from '@mui/material';

const TierCardHeader = ({ tier, isInCart, getTierColor, getTierIcon, getTierDescription, theme }) => {
  return (
    <Box sx={{
      p: 3,
      borderBottom: 1,
      borderColor: 'divider',
      bgcolor: isInCart ? 'primary.light' : 'background.paper',
      opacity: isInCart ? 0.1 : 1,
      transition: 'background-color 0.2s'
    }}>
      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
        <Avatar
          sx={{
            bgcolor: getTierColor(tier.name, theme),
            width: 48,
            height: 48
          }}
        >
          {getTierIcon(tier.name)}
        </Avatar>
        <Typography variant="h6" fontWeight="bold" color="text.primary">
          {tier.name}
        </Typography>
      </Stack>
      
      <Typography variant="h4" fontWeight="bold" color="text.primary" sx={{ mb: 0.5 }}>
        ${parseFloat(tier.price).toFixed(2)}
      </Typography>
      
      <Typography variant="body2" color="text.secondary">
        {getTierDescription(tier.name)}
      </Typography>
    </Box>
  );
};

export default TierCardHeader;