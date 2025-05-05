import React from 'react';
import { Box, Button } from '@mui/material';
import { X, ShoppingCart } from 'lucide-react';

const TierCardFooter = ({ tier, isInCart, onAddToCart, onRemoveFromCart }) => {
  return (
    <Box sx={{ p: 3, mt: 'auto', borderTop: 1, borderColor: 'divider' }}>
      {isInCart ? (
        <Button
          variant="contained"
          fullWidth
          color="error"
          startIcon={<X size={18} />}
          onClick={() => onRemoveFromCart(tier.id)}
          sx={{ py: 1.5 }}
        >
          Remove from Cart
        </Button>
      ) : (
        <Button
          variant="contained"
          fullWidth
          color="primary"
          startIcon={<ShoppingCart size={18} />}
          onClick={() => onAddToCart(tier)}
          sx={{ py: 1.5 }}
        >
          Add to Cart
        </Button>
      )}
    </Box>
  );
};

export default TierCardFooter;