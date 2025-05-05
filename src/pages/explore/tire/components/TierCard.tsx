import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import TierCardHeader from './TierCardHeader.tsx';
import TierFeaturesList from './TierFeaturesList.tsx';
import TierCardFooter from './TierCardFooter.tsx';

const TierCard = ({ 
  tier, 
  isInCart, 
  onAddToCart, 
  onRemoveFromCart,
  getTierColor,
  getTierIcon,
  getTierDescription,
  theme
}) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card 
        elevation={isInCart ? 4 : 1}
        sx={{
          borderRadius: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          border: '1px solid',
          borderColor: isInCart ? 'primary.main' : 'divider',
          transition: 'all 0.2s ease',
          '&:hover': {
            boxShadow: (theme) => theme.shadows[8],
            transform: 'translateY(-4px)'
          }
        }}
      >
        <TierCardHeader 
          tier={tier}
          isInCart={isInCart}
          getTierColor={getTierColor}
          getTierIcon={getTierIcon}
          getTierDescription={getTierDescription}
          theme={theme}
        />

        <CardContent sx={{ flex: 1, p: 3 }}>
          <Typography variant="subtitle2" fontWeight="medium" color="text.primary" sx={{ mb: 2 }}>
            Included Features:
          </Typography>
          
          <TierFeaturesList features={tier.features} theme={theme} />
        </CardContent>

        <TierCardFooter 
          tier={tier}
          isInCart={isInCart}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
        />
      </Card>
    </Grid>
  );
};

export default TierCard;