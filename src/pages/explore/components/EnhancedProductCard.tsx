import React from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Chip,
  IconButton,
  Button
} from '@mui/material';
import { Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const EnhancedProductCard = ({ 
  product, 
  isInWishlist, 
  onProductSelect, 
  onAddToWishlist,
  getTotalPackages,
  index = 0
}) => {
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

    const allPrices = product.sub_bundles
      .flatMap(sb => sb.tires || [])
      .map(tier => {
        if (!tier.price) return NaN;
        const priceStr = tier.price.toString().replace(/[^0-9.]/g, '');
        return parseFloat(priceStr);
      })
      .filter(price => !isNaN(price));
    
    if (allPrices.length === 0) return '$499.00'; // Default fallback price
    
    const minPrice = Math.min(...allPrices);
    
    return `$${minPrice.toFixed(2)}`;
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: '0px 10px 20px rgba(0,0,0,0.2)',
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      style={{ height: '100%' }}
    >
      <Card 
        sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          cursor: 'pointer',
          borderRadius: 4,
          bgcolor: '#1e1e1e',
          color: 'white',
          border: '1px solid #333',
          overflow: 'hidden',
          position: 'relative',
        }}
        onClick={() => onProductSelect(product.id)}
      >
        {/* Wishlist button */}
        <IconButton
          size="small"
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 2,
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.2)'
            }
          }}
          onClick={(e) => onAddToWishlist(e, product)}
        >
          <Heart
            size={18}
            fill={isInWishlist(product.id) ? '#9c27b0' : 'none'}
            color={isInWishlist(product.id) ? '#9c27b0' : '#ccc'}
          />
        </IconButton>

        <CardContent sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          p: 3 
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box 
              sx={{ 
                width: 48, 
                height: 48, 
                borderRadius: '50%', 
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                mr: 2,
              }}
            >
              {product.icon}
            </Box>
            <Typography variant="body1" sx={{ color: '#ccc' }}>
              Premium
            </Typography>
          </Box>
          
          <Typography 
            variant="h4" 
            component="h3" 
            sx={{ 
              mb: 1, 
              fontWeight: 'bold',
            }}
          >
            {product.name}
          </Typography>

          <Typography 
            variant="h6" 
            sx={{ 
              mb: 2,
              color: '#aaa',
              fontWeight: 'medium'
            }}
          >
            Starting from {getPriceRange()}/month
          </Typography>

          <Box sx={{ borderTop: '1px solid #333', pt: 2, mb: 2 }}>
            <Typography 
              variant="body2" 
              color="#bbb" 
              sx={{ 
                minHeight: '4.5em',
                lineHeight: '1.5em',
                mb: 2
              }}
            >
              {product.description}
            </Typography>
          </Box>
          
          <Box sx={{ mt: 'auto' }}>
            <Button
              fullWidth
              variant="contained"
              endIcon={<ArrowRight size={18} />}
              sx={{
                bgcolor: '#9c27b0',
                borderRadius: 3,
                py: 1.5,
                fontWeight: 'bold',
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#7b1fa2'
                }
              }}
            >
              View Details
            </Button>
            <Typography variant="caption" sx={{ color: '#888', mt: 1, display: 'block', textAlign: 'center' }}>
              {product.sub_bundles?.length || 0} sub-bundles · {getTotalPackages(product)} packages
            </Typography>
          </Box>

        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EnhancedProductCard;