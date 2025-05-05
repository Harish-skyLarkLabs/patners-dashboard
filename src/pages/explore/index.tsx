import React, { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../../store/products/productThunk.ts';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import ProductsHeader from './components/ProductHeader.tsx';
import ProductsGrid from './components/ProductsGrid.tsx';
import { getTotalPackages } from '../../utils/helper.ts';


const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const { products, loading, error } = useAppSelector((state) => state.products);
  
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
  

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

 
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Check if product is in wishlist
  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };
  
  // Handle adding to wishlist
  const handleAddToWishlist = (event, product) => {
    event.stopPropagation(); 
    
    setWishlistItems(prevItems => {
      const itemExists = prevItems.some(item => item.id === product.id);
      let newWishlist;
      if (itemExists) {
        newWishlist = prevItems.filter(item => item.id !== product.id);
      } else {
        newWishlist = [...prevItems, product];
      }
      
      localStorage.setItem('bundleWishlist', JSON.stringify(newWishlist));
      return newWishlist;
    });
  };


  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  
  const handleProductSelect = (productId) => {
    navigate(`/bundles/${productId}`);
  };

  const handleCartClick = () => {
    navigate('/cart');
  };
  
  const handleWishlistClick = () => {
    navigate('/wishlist');
  };

  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Box sx={{ mb: 8 }}>
        {/* Header component */}
        <ProductsHeader
          title="AI Solution Bundles"
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          wishlistItems={wishlistItems}
          cartItems={cartItems}
          onWishlistClick={handleWishlistClick}
          onCartClick={handleCartClick}
        />

        {/* Products grid */}
        <ProductsGrid
          products={filteredProducts}
          loading={loading}
          error={error}
          isInWishlist={isInWishlist}
          onProductSelect={handleProductSelect}
          onAddToWishlist={handleAddToWishlist}
          getTotalPackages={getTotalPackages}
        />
      </Box>
    </Container>
  );
};

export default Explore;