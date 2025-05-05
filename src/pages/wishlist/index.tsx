import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Stack,
  Button,
  IconButton,
  Divider,
  Alert,
  Chip,
  useTheme
} from '@mui/material';
import { ShoppingCart, Trash2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  
  // Initialize wishlist items from localStorage (now contains full products)
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem('bundleWishlist');
    if (savedWishlist) {
      try {
        return JSON.parse(savedWishlist);
      } catch (error) {
        console.error('Failed to parse wishlist data:', error);
        return [];
      }
    }
    return [];
  });
  
  // Initialize cart items from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('bundleCart');
    if (savedCart) {
      try {
        return JSON.parse(savedCart);
      } catch (error) {
        console.error('Failed to parse cart data:', error);
        return [];
      }
    }
    return [];
  });
  
  // Helper function to check if product is in cart
  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };
  
  // Helper function to get total number of tiers across all sub-bundles
  const getTotalPackages = (product) => {
    return product.sub_bundles.reduce((total, subBundle) => total + subBundle.tires.length, 0);
  };
  
  // Handle removing item from wishlist
  const handleRemoveFromWishlist = (productId) => {
    setWishlistItems(prevItems => {
      const newWishlist = prevItems.filter(item => item.id !== productId);
      // Save to localStorage
      localStorage.setItem('bundleWishlist', JSON.stringify(newWishlist));
      return newWishlist;
    });
  };
  
  // Handle adding item to cart
  const handleAddToCart = (product) => {
    const cartItem = {
      id: product.id,
      bundleName: product.name,
      bundleId: product.id,
      // Add more product info as needed for cart display
      price: calculateMinPrice(product)
    };
    
    setCartItems(prevItems => {
      // Check if item is already in cart
      if (!prevItems.some(item => item.id === product.id)) {
        const newCart = [...prevItems, cartItem];
        // Save to localStorage
        localStorage.setItem('bundleCart', JSON.stringify(newCart));
        return newCart;
      }
      return prevItems;
    });
  };
  
  // Handle adding all wishlist items to cart
  const handleAddAllToCart = () => {
    setCartItems(prevItems => {
      // Create cart items from all wishlist products
      const cartItems = wishlistItems.map(product => ({
        id: product.id,
        bundleName: product.name,
        bundleId: product.id,
        price: calculateMinPrice(product)
      }));
      
      // Get existing cart item IDs
      const existingIds = prevItems.map(item => item.id);
      
      // Filter out wishlist items that are already in cart
      const newCartItems = cartItems.filter(item => !existingIds.includes(item.id));
      
      // Combine with existing cart
      const combinedCart = [...prevItems, ...newCartItems];
      
      // Save to localStorage
      localStorage.setItem('bundleCart', JSON.stringify(combinedCart));
      return combinedCart;
    });
  };
  
  // Navigate to cart
  const handleGoToCart = () => {
    navigate('/cart');
  };
  
  // Navigate back to explore
  const handleBackToExplore = () => {
    navigate('/explore');
  };
  
  // Calculate minimum price for a product
  const calculateMinPrice = (product) => {
    if (!product.sub_bundles || product.sub_bundles.length === 0) {
      return '0.00';
    }
    
    const allPrices = product.sub_bundles
      .flatMap(sb => sb.tires || [])
      .map(tier => parseFloat(tier.price))
      .filter(price => !isNaN(price));
    
    if (allPrices.length === 0) return '0.00';
    
    return Math.min(...allPrices).toFixed(2);
  };
  
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
  
  return (
    <Container maxWidth={false} sx={{ py: 2 }}>
      <Box sx={{ mb: 8 }}>
        {/* Header with title and action buttons */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          spacing={2}
          sx={{ mb: 6 }}
        >
          <Box>
            <Button 
              startIcon={<ArrowLeft size={18} />}
              onClick={handleBackToExplore}
              sx={{ mb: 2 }}
              color="inherit"
            >
              Back to Explore
            </Button>
            <Typography variant="h4" component="h1" fontWeight="bold" color="text.primary">
              My Wishlist
            </Typography>
          </Box>
          
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2}
            width={{ xs: '100%', sm: 'auto' }}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={handleAddAllToCart}
              disabled={wishlistItems.length === 0}
              startIcon={<ShoppingCart size={18} />}
              sx={{ width: { xs: '100%', sm: 'auto' } }}
            >
              Add All to Cart
            </Button>
            
            <Button
              variant="contained"
              color="primary"
              onClick={handleGoToCart}
              startIcon={<ShoppingCart size={18} />}
              sx={{ width: { xs: '100%', sm: 'auto' } }}
            >
              Go to Cart
            </Button>
          </Stack>
        </Stack>
        
        {/* Empty wishlist message */}
        {wishlistItems.length === 0 && (
          <Alert 
            severity="info" 
            sx={{ mb: 4 }}
          >
            Your wishlist is empty. Browse our bundles to add items to your wishlist.
          </Alert>
        )}
        
        {/* Wishlist summary */}
        {wishlistItems.length > 0 && (
          <Box sx={{ mb: 4 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              <strong>{wishlistItems.length}</strong> {wishlistItems.length === 1 ? 'item' : 'items'} in your wishlist
            </Typography>
            <Divider />
          </Box>
        )}

        {/* Wishlist items grid */}
        <Grid container spacing={3}>
          {wishlistItems.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'all 0.2s',
                  '&:hover': {
                    boxShadow: (theme) => theme.shadows[4]
                  },
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: 'grey.200'
                }}
              >
                {/* Gradient header with centered icon */}
                <Box 
                  sx={{ 
                    height: 160, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    background: getProductGradient(product.color),
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                  onClick={() => navigate(`/bundles/${product.id}`)}
                >
                  {/* Remove from wishlist button */}
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
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFromWishlist(product.id);
                    }}
                  >
                    <Trash2 size={18} color="#d32f2f" />
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
                <CardContent 
                  sx={{ 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    cursor: 'pointer'
                  }}
                  onClick={() => navigate(`/bundles/${product.id}`)}
                >
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
                  {product.sub_bundles && product.sub_bundles.length > 0 && 
                   product.sub_bundles.some(sb => sb.tires && sb.tires.length > 0) && (
                    <Typography 
                      variant="subtitle2" 
                      color="primary.main"
                      sx={{ mb: 1, fontWeight: 'bold' }}
                    >
                      {(() => {
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
                      })()}
                    </Typography>
                  )}

                  <Box sx={{ mt: 'auto' }}>
                    <Chip
                      size="small"
                      label={`${product.sub_bundles ? product.sub_bundles.length : 0} sub-bundles · ${getTotalPackages(product)} packages`}
                      sx={{ 
                        mb: 2,
                        bgcolor: 'grey.100',
                        color: 'text.secondary',
                        fontSize: '0.75rem'
                      }}
                    />
                    
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      startIcon={<ShoppingCart size={18} />}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      disabled={isInCart(product.id)}
                    >
                      {isInCart(product.id) ? 'In Cart' : 'Add to Cart'}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Wishlist;