
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, useTheme } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import { fetchProductById } from '../../../store/products/productThunk.ts';
import NotFoundState from '../sub-bundles/components/NotFoundState.tsx';
import ErrorState from '../sub-bundles/components/ErrorState.tsx';
import LoadingState from '../sub-bundles/components/LoadingState.tsx';
import { getTierColor, getTierDescription } from '../../../utils/helper.ts';
import { AlertTriangle, Package, Zap } from 'lucide-react';
import TierGrid from './components/TierGrid.tsx';
import TierHeader from './components/TierHeader.tsx';

export const getTierIcon = (tierName) => {
  const name = tierName.toLowerCase();
  if (name.includes('core')) return <Package size={24} />;
  if (name.includes('pro')) return <Zap size={24} />;
  if (name.includes('max')) return <AlertTriangle size={24} />;
  return null;
};

const Tire = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { bundleId, subBundleId } = useParams();
  const isDarkMode = theme.palette.mode === 'dark';
  const [cartItems, setCartItems] = useState([]);

  const { products, product, loading, error, productLoading, productError } = useAppSelector(
    (state) => state.products
  );


  useEffect(() => {
    const bundleInStore = products.find(p => p.id === parseInt(bundleId));
    
    if (bundleInStore) {
      if (bundleInStore.sub_bundles && bundleInStore.sub_bundles.length > 0) {
        const hasSubBundle = bundleInStore.sub_bundles.some(sb => sb.id === parseInt(subBundleId));
        if (hasSubBundle) {
          return;
        }
      }
    }
    
    // If we don't have the product in the store or it doesn't have the required sub_bundle,
    // or if the currently loaded product is different, fetch it
    if (!product || product.id !== parseInt(bundleId)) {
      dispatch(fetchProductById(bundleId));
    }
  }, [bundleId, subBundleId, dispatch, product, products]);
  

  const selectedBundle = product && product.id === parseInt(bundleId) 
    ? product 
    : products.find(p => p.id === parseInt(bundleId));
  

  const selectedSubBundle = selectedBundle
    ? selectedBundle.sub_bundles?.find(sb => sb.id === parseInt(subBundleId))
    : null;


  useEffect(() => {
    const savedCart = localStorage.getItem('bundleCart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart data:', error);
      }
    }
  }, []);

  // Save cart items to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('bundleCart', JSON.stringify(cartItems));
  }, [cartItems]);


  const handleBackToSubBundles = () => {
    navigate(`/bundles/${bundleId}`);
  };

 
  const addToCart = (tier) => {
    const newItem = {
      id: tier.id,
      bundleName: selectedBundle.name,
      bundleId: selectedBundle.id,
      subBundleName: selectedSubBundle.name,
      subBundleId: selectedSubBundle.id,
      tierName: tier.name,
      price: tier.price
    };

    setCartItems(prev => {
      // Check if item already exists in cart
      const exists = prev.some(item => item.id === tier.id);
      if (exists) {
        return prev; // Item already in cart
      }
      return [...prev, newItem];
    });
  };

  // Handle removing from cart
  const removeFromCart = (tierId) => {
    setCartItems(prev => prev.filter(item => item.id !== tierId));
  };

  // Check if a tier is in the cart
  const isInCart = (tierId) => {
    return cartItems.some(item => item.id === tierId);
  };

  const handleNavigateToHome = () => {
    navigate('/home');
  };


  if (loading || productLoading) {
    return <LoadingState message="Loading tier details..." />;
  }

  if (error || productError) {
    return (
      <ErrorState 
        message={error || productError || 'Failed to load tier details. Please try again.'} 
        buttonText="Back to Bundles"
        onButtonClick={handleNavigateToHome}
      />
    );
  }

  if (!selectedBundle) {
    return (
      <NotFoundState 
        message="Bundle not found. The requested bundle may have been removed or is unavailable." 
        buttonText="Back to Bundles"
        onButtonClick={handleNavigateToHome}
      />
    );
  }

  if (!selectedSubBundle) {
    return (
      <NotFoundState 
        message="Sub-bundle not found. The requested sub-bundle may have been removed or is unavailable." 
        buttonText="Back to Sub-bundles"
        onButtonClick={handleBackToSubBundles}
      />
    );
  }

  return (
    <Box sx={{ width: '100%', px: 3 }}>
      <Box sx={{ py: 4 }}>
        {/* Header with back button */}
        <TierHeader 
          bundle={selectedBundle}
          subBundle={selectedSubBundle}
          onBackClick={handleBackToSubBundles}
          isDarkMode={isDarkMode}
        />
        
        {/* Tier grid */}
        <TierGrid 
          tiers={selectedSubBundle.tires}
          isInCart={isInCart}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
          getTierColor={getTierColor}
          getTierIcon={getTierIcon}
          getTierDescription={getTierDescription}
          theme={theme}
        />
      </Box>
    </Box>
  );
};

export default Tire;