
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, useTheme } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import { fetchProductById } from '../../../store/products/productThunk.ts';
import BundleHeader from './components/BundleHeader.tsx';
import SubBundleGrid from './components/SubBundleGrid.tsx';
import LoadingState from './components/LoadingState.tsx';
import ErrorState from './components/ErrorState.tsx';
import NotFoundState from './components/NotFoundState.tsx';


const SubBundles = () => {
  const { bundleId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
 
  const { products, product, loading, error, productLoading, productError } = useAppSelector(
    (state) => state.products
  );

 
  useEffect(() => {
   
    const bundleInStore = products.find(p => p.id === parseInt(bundleId));
    
    if (bundleInStore) {
      if (bundleInStore.sub_bundles && bundleInStore.sub_bundles.length > 0) {
        return;
      }
    }
    
    if (!product || product.id !== parseInt(bundleId)) {
      dispatch(fetchProductById(bundleId));
    }
  }, [bundleId, dispatch, product, products]);

  
  const selectedBundle = product && product.id === parseInt(bundleId) 
    ? product 
    : products.find(p => p.id === parseInt(bundleId));

  
  const handleBackToBundles = () => {
    navigate('/explore');
  };

  const handleSubBundleSelect = (subBundleId) => {
    navigate(`/bundles/${bundleId}/${subBundleId}`);
  };

  const getTierChipColor = (tierName) => {
    const name = tierName.toLowerCase();
    if (name.includes('core')) return "primary";
    if (name.includes('pro')) return "secondary";
    if (name.includes('max')) return "error";
    return "default";
  };

  const getMinPrice = (tiers) => {
    if (!tiers || tiers.length === 0) return '$499.00';
    const prices = tiers.map(tier => parseFloat(tier.price)).filter(price => !isNaN(price));
    if (prices.length === 0) return '$499.00';
    return `$${Math.min(...prices).toFixed(2)}`;
  };

  if (loading || productLoading) {
    return <LoadingState message="Loading bundle details..." />;
  }

  if (error || productError) {
    return (
      <ErrorState 
        message={error || productError || 'Failed to load bundle details. Please try again.'} 
        buttonText="Back to Bundles"
        onButtonClick={handleBackToBundles}
      />
    );
  }

  if (!selectedBundle) {
    return (
      <NotFoundState 
        message="Bundle not found. The requested bundle may have been removed or is unavailable." 
        buttonText="Back to Bundles"
        onButtonClick={handleBackToBundles}
      />
    );
  }

  return (
    <Box sx={{ width: '100%', px: 3 }}>
      <Box sx={{ py: 2 }}>
        {/* Header with back button */}
        <BundleHeader 
          bundle={selectedBundle}
          onBackClick={handleBackToBundles}
          isDarkMode={isDarkMode}
        />

        {/* Sub-bundles grid */}
        <SubBundleGrid 
          subBundles={selectedBundle.sub_bundles}
          onSubBundleSelect={handleSubBundleSelect}
          getTierChipColor={getTierChipColor}
          getMinPrice={getMinPrice}
        />
      </Box>
    </Box>
  );
};

export default SubBundles;