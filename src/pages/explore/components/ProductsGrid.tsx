import React from 'react';
import { Grid, Box, Typography, CircularProgress, Alert } from '@mui/material';
import { AlertCircle } from 'lucide-react';
import ProductCard from './ProductCard.tsx';

const ProductsGrid = ({
  products,
  loading,
  error,
  isInWishlist,
  onProductSelect,
  onAddToWishlist,
  getTotalPackages
}) => {
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert 
        severity="error" 
        icon={<AlertCircle size={24} />}
        sx={{ mb: 4 }}
      >
        {error}
      </Alert>
    );
  }

  if (products.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', my: 8 }}>
        <Typography variant="h6" color="text.secondary">
          No products found matching your search.
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductCard
            product={product}
            isInWishlist={isInWishlist}
            onProductSelect={onProductSelect}
            onAddToWishlist={onAddToWishlist}
            getTotalPackages={getTotalPackages}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsGrid;
