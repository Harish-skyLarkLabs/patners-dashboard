import React from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Chip,
  IconButton
} from '@mui/material';
import { Heart } from 'lucide-react';

const ProductCard = ({ 
  product, 
  isInWishlist, 
  onProductSelect, 
  onAddToWishlist,
  getTotalPackages 
}) => {
  // Helper function to get product gradient based on color
  const getProductGradient = (color) => {
    switch (color) {
      case 'purple':
        return 'linear-gradient(to bottom right, #a855f7, #6366f1)'; // purple-500 to indigo-500
      case 'green':
        return 'linear-gradient(to bottom right, #10b981, #16a34a)'; // emerald-500 to green-600
      case 'blue':
        return 'linear-gradient(to bottom right, #3b82f6, #2563eb)'; // blue-500 to blue-600
      case 'orange':
        return 'linear-gradient(to bottom right, #f59e0b, #d97706)'; // amber-500 to amber-600
      default:
        return 'linear-gradient(to bottom right, #6b7280, #4b5563)'; // gray-500 to gray-600
    }
  };

  // Calculate price range
  const getPriceRange = () => {
    if (!product.sub_bundles || product.sub_bundles.length === 0) {
      return '';
    }

    const hasValidTiers = product.sub_bundles.some(sb => 
      sb.tires && sb.tires.length > 0
    );

    if (!hasValidTiers) {
      return '';
    }

    // Get all prices from all tiers
    const allPrices = product.sub_bundles
      .flatMap(sb => sb.tires || [])
      .map(tier => parseFloat(tier.price))
      .filter(price => !isNaN(price));
    
    if (allPrices.length === 0) return '';
    
    const minPrice = Math.min(...allPrices);
    const maxPrice = Math.max(...allPrices);
    
    if (minPrice === maxPrice) {
      return `$${minPrice.toFixed(2)}`;
    } else {
      return `$${minPrice.toFixed(2)} - $${maxPrice.toFixed(2)}`;
    }
  };

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'all 0.2s',
        '&:hover': {
          boxShadow: (theme) => theme.shadows[4]
        },
        overflow: 'hidden',
        border: '1px solid',
        borderColor: isInWishlist(product.id) ? 'secondary.main' : 'grey.200',
        position: 'relative'
      }}
      onClick={() => onProductSelect(product.id)}
    >
      {/* Gradient header with centered icon */}
      <Box 
        sx={{ 
          height: 160, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: getProductGradient(product.color),
          position: 'relative'
        }}
      >
        {/* Wishlist button */}
        <IconButton
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            bgcolor: 'rgba(255, 255, 255, 0.8)',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.9)'
            }
          }}
          onClick={(e) => onAddToWishlist(e, product)}
        >
          <Heart
            size={18}
            fill={isInWishlist(product.id) ? '#d32f2f' : 'none'}
            color={isInWishlist(product.id) ? '#d32f2f' : '#666'}
          />
        </IconButton>
        <Box 
          sx={{ 
            width: 56, 
            height: 56, 
            borderRadius: '50%', 
            bgcolor: 'rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.5rem'
          }}
        >
          {product.icon}
        </Box>
      </Box>

      {/* Card content */}
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography 
          variant="h6" 
          component="h3" 
          sx={{ 
            mb: 0.5, 
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: 'text.primary'
          }}
        >
          {product.name}
        </Typography>

        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ mb: 2 }}
        >
          {product.description}
        </Typography>
        
        {/* Display price range if available */}
        {getPriceRange() && (
          <Typography 
            variant="subtitle2" 
            color="primary.main"
            sx={{ mb: 1, fontWeight: 'bold' }}
          >
            {getPriceRange()}
          </Typography>
        )}

        <Box sx={{ mt: 'auto' }}>
          <Chip
            size="small"
            label={`${product.sub_bundles?.length || 0} sub-bundles · ${getTotalPackages(product)} packages`}
            sx={{ 
              bgcolor: 'grey.100',
              color: 'text.secondary',
              fontSize: '0.75rem'
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;