import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import TierCard from './TierCard.tsx';

const TierGrid = ({ 
  tiers, 
  isInCart, 
  onAddToCart, 
  onRemoveFromCart,
  getTierColor,
  getTierIcon,
  getTierDescription,
  theme 
}) => {
  if (!tiers || tiers.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 6 }}>
        <Typography variant="h6" color="text.secondary">
          No tiers available for this sub-bundle.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={3}>
        {tiers.map((tier) => (
          <TierCard
            key={tier.id}
            tier={tier}
            isInCart={isInCart(tier.id)}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
            getTierColor={getTierColor}
            getTierIcon={getTierIcon}
            getTierDescription={getTierDescription}
            theme={theme}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default TierGrid;