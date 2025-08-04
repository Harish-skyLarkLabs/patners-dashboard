import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import EnhancedTierCard from './EnhancedTierCard.tsx';

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
    <Box 
      sx={{ 
        width: '100%',
        minHeight: '100vh',
        py: 6
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            fontWeight="bold" 
            color="text.primary" 
            sx={{ mb: 2 }}
          >
            Choose Your Plan
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ maxWidth: 500, mx: 'auto' }}
          >
            Our pricing was designed to be affordable, flexible, 
            and tailored to your unique needs.
          </Typography>
        </Box>

        {/* Tier Cards */}
        <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
          {tiers.map((tier) => (
            <EnhancedTierCard
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
      </Container>
    </Box>
  );
};

export default TierGrid;