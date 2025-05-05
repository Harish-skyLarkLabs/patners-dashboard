import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Button,
  Badge,
  InputAdornment
} from '@mui/material';
import { Search, Heart, ShoppingCart } from 'lucide-react';

const ProductsHeader = ({ 
  title, 
  searchQuery, 
  onSearchChange,
  wishlistItems,
  cartItems,
  onWishlistClick,
  onCartClick
}) => {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent="space-between"
      alignItems={{ xs: 'flex-start', sm: 'center' }}
      spacing={2}
      sx={{ mb: 6 }}
    >
      <Typography variant="h4" component="h1" fontWeight="bold" color="text.primary">
        {title}
      </Typography>
      
      <Stack 
        direction="row" 
        spacing={2} 
        width={{ xs: '100%', sm: 'auto' }}
        alignItems="center"
      >
        <TextField
          placeholder="Search bundles..."
          value={searchQuery}
          onChange={onSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search size={18} />
              </InputAdornment>
            ),
          }}
          size="small"
          sx={{ width: { xs: '100%', sm: 240 } }}
        />
        
        <Button
          onClick={onWishlistClick}
          variant="text"
          color="inherit"
          startIcon={
            <Badge badgeContent={wishlistItems.length} color="secondary" invisible={wishlistItems.length === 0}>
              <Heart size={20} />
            </Badge>
          }
        >
          Wishlist
        </Button>
        
        <Button
          onClick={onCartClick}
          variant="text"
          color="inherit"
          startIcon={
            <Badge badgeContent={cartItems.length} color="error" invisible={cartItems.length === 0}>
              <ShoppingCart size={20} />
            </Badge>
          }
        >
          Cart
        </Button>
      </Stack>
    </Stack>
  );
};

export default ProductsHeader;