import React, { useState, useEffect } from 'react';
import { createBulkSubscriptions } from '../../store/customers/customerThunk.ts'; // Update this path
import { customerActions } from '../../store/customers/customerSlice.ts'; // Update this path
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
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  useTheme,
  InputAdornment,
  Tooltip,
  Chip,
  CircularProgress,
  Snackbar
} from '@mui/material';
import { 
  ShoppingCart, 
  Heart, 
  Trash2, 
  ArrowLeft, 
  CreditCard,
  CheckCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { toast } from 'react-toastify';

const Cart = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { checkoutStatus } = useAppSelector((state) => state.customers || {});
 
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
  console.log("🚀 ~ const[cartItems,setCartItems]=useState ~ cartItems:", cartItems)
  
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  
  useEffect(() => {
    let calculatedTotal = 0;
    
    cartItems.forEach(item => {
      // Parse the price directly from the price string
      const priceStr = item.price.replace(/[^0-9.]/g, '');
      const price = parseFloat(priceStr);
      console.log("🚀 ~ useEffect ~ price:", price);
      calculatedTotal += price || 0;
    });
    
    // Apply discount if any
    const discountValue = discountApplied ? (calculatedTotal * 0.1) : 0; // 10% discount
    setDiscountAmount(discountValue);
    
    // Calculate final total
    setTotal(calculatedTotal - discountValue);
    
  }, [discountApplied, cartItems]);
  
  // Monitor checkout status changes
  useEffect(() => {
    if (checkoutStatus?.success) {
      // Show success message
      setSnackbarMessage('Subscriptions created successfully!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      
      // Clear cart after successful checkout
      localStorage.setItem('bundleCart', JSON.stringify([]));
      setCartItems([]);
      
      // Reset checkout status
      setTimeout(() => {
        dispatch(customerActions.resetCheckoutStatus());
      }, 2000);
    }
    
    if (checkoutStatus?.error) {
     
      // Check for the unique constraint error
      if (checkoutStatus.error && typeof checkoutStatus.error === 'object' && 'non_field_errors' in checkoutStatus.error && Array.isArray((checkoutStatus.error as any).non_field_errors) && (checkoutStatus.error as any).non_field_errors[0]) {
      // setSnackbarMessage('You already have an active subscription for one or more bundles in your cart. You cannot purchase the same bundle twice.');
      toast.error('You already have an active subscription for one or more bundles in your cart. You cannot purchase the same bundle twice.')
    } else {
      setSnackbarMessage(`Checkout failed: ${JSON.stringify(checkoutStatus.error)}`);
    }
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  }, [checkoutStatus, dispatch]);
  
  // Handle removing item from cart
  const handleRemoveFromCart = (itemId) => {
    setCartItems(prevItems => {
      const newCart = prevItems.filter(item => item.id !== itemId);
      // Save to localStorage
      localStorage.setItem('bundleCart', JSON.stringify(newCart));
      return newCart;
    });
  };

  
  // Handle applying coupon code
  const handleApplyCoupon = () => {
    // Mock coupon validation - in a real app, this would be a server call
    if (couponCode.toUpperCase() === 'DISCOUNT10') {
      setDiscountApplied(true);
      // Show success message
      setSnackbarMessage('Discount applied successfully!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } else {
      // Show error message
      setDiscountApplied(false);
      setSnackbarMessage('Invalid coupon code');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };
  
  // Handle proceeding to checkout
  const handleCheckout = () => {

    console.log(cartItems);
    
    const subscriptionsData = cartItems.map(item => {
      // Parse the price directly from the price string
      const priceStr = item.price.replace(/[^0-9.]/g, '');
      console.log("🚀 ~ handleCheckout ~ priceStr:", priceStr)
      const price = parseFloat(priceStr) || 0;
      
      // Apply discount if applicable
      const finalPrice = discountApplied ? price * 0.9 : price;
      
      // Calculate expiry date (default to 30 days from now)
      const expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 30);
      
      return {
        bundle: item.bundleId, // Use the bundle ID if available, otherwise use the item ID
        expire_date: expireDate.toISOString(),
        payment: {
          amount: finalPrice.toFixed(2),
          payment_date: new Date().toISOString()
        }
      };
    });
    
    const checkoutData = {
      // customer: 1, // Hardcoded for demo, should be the current logged-in customer ID
      subscriptions: subscriptionsData
    };
    
    // Dispatch the action to create subscriptions
    dispatch(createBulkSubscriptions(checkoutData));
  };
  
  // Navigate back to explore
  const handleContinueShopping = () => {
    navigate('/explore');
  };
  
  // Format price as currency from string or number
  const formatPrice = (price) => {
    console.log("🚀 ~ formatPrice ~ price:", price)
    if (typeof price === 'string' && price.includes('$')) {
      return price; // Already formatted
    }
    
    // If it's a number, format it
    if (typeof price === 'number') {
      return `$${price.toFixed(2)}`;
    }
    
    // If it's a string without $ but with /month
    if (typeof price === 'string' && price.includes('/month')) {
      const numericPart = price.replace(/[^0-9.]/g, '');
      return `$${parseFloat(numericPart).toFixed(2)}/month`;
    }
    
    return price;
  };
  
  // Get tier chip color
  const getTierChipColor = (tier) => {
    switch (tier) {
      case 'Max':
        return 'error';
      case 'Plus':
        return 'primary';
      case 'Core':
        return 'secondary';
      default:
        return 'default';
    }
  };
  
  // Handle snackbar close
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Box sx={{ mb: 8 }}>
        {/* Header with title */}
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
              onClick={handleContinueShopping}
              sx={{ mb: 2 }}
              color="inherit"
            >
              Continue Shopping
            </Button>
            <Typography variant="h4" component="h1" fontWeight="bold" color="text.primary">
              Shopping Cart
            </Typography>
          </Box>
        </Stack>
        
        {/* Success message after checkout */}
        {checkoutStatus?.success && (
          <Alert 
            severity="success" 
            sx={{ mb: 4 }}
            icon={<CheckCircle />}
          >
            Your order has been placed successfully! View your subscriptions in the dashboard.
          </Alert>
        )}
        
        {/* Empty cart message */}
        {cartItems.length === 0 && !checkoutStatus?.success && (
          <Alert 
            severity="info" 
            sx={{ mb: 4 }}
          >
            Your cart is empty. Browse our bundles to add items to your cart.
          </Alert>
        )}
        
        {/* Cart items and checkout summary */}
        {cartItems.length > 0 && (
          <Grid container spacing={4}>
            {/* Cart items table */}
            <Grid item xs={12} md={8}>
              <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid', borderColor: 'divider' }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Product</TableCell>
                      <TableCell align="center">Price</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <Stack direction="row" spacing={2} alignItems="center">
                            <Box 
                              sx={{ 
                                width: 50, 
                                height: 50, 
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                bgcolor: getTierChipColor(item.tierName)
                              }}
                            >
                              <Typography variant="subtitle1" fontWeight="bold">{item.tierName.charAt(0)}</Typography>
                            </Box>
                            <Box>
                              <Typography variant="subtitle2" fontWeight="bold">
                                {item.bundleName}
                              </Typography>
                              <Stack direction="row" spacing={1} alignItems="center">
                                <Typography variant="body2" color="text.secondary" noWrap sx={{ maxWidth: '200px' }}>
                                  {item.subBundleName}
                                </Typography>
                                <Chip 
                                  label={item.tierName} 
                                  size="small" 
                                  color={getTierChipColor(item.tierName)}
                                  sx={{ height: 20, fontSize: '0.7rem' }}
                                />
                              </Stack>
                            </Box>
                          </Stack>
                        </TableCell>
                        <TableCell align="center">
                          {item.price}
                        </TableCell>
                        <TableCell align="right">
                          <Stack direction="row" spacing={1} justifyContent="flex-end">
                            {/* <Tooltip title={wishlistItems.includes(item.id) ? "In Wishlist" : "Add to Wishlist"}>
                              <IconButton 
                                size="small" 
                                onClick={() => handleAddToWishlist(item)}
                                disabled={wishlistItems.includes(item.id)}
                              >
                                <Heart 
                                  size={18} 
                                  fill={wishlistItems.includes(item.id) ? "#d32f2f" : "none"} 
                                  color={wishlistItems.includes(item.id) ? "#d32f2f" : "#666"}
                                />
                              </IconButton>
                            </Tooltip> */}
                            
                            <Tooltip title="Remove from Cart">
                              <IconButton 
                                size="small"
                                onClick={() => handleRemoveFromCart(item.id)}
                              >
                                <Trash2 size={18} />
                              </IconButton>
                            </Tooltip>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            
            {/* Order summary */}
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 3, 
                  border: '1px solid', 
                  borderColor: 'divider', 
                  height: '100%'
                }}
              >
                <Typography variant="h6" component="h2" fontWeight="bold" sx={{ mb: 3 }}>
                  Order Summary
                </Typography>
                
                {/* Coupon code */}
                <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                  <TextField
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    size="small"
                    fullWidth
                    helperText={discountApplied ? "DISCOUNT10 applied!" : "Try: DISCOUNT10"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button 
                            size="small"
                            onClick={handleApplyCoupon}
                            disabled={discountApplied}
                          >
                            Apply
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Stack>
                
                <Divider sx={{ mb: 2 }} />
                
                {/* Price breakdown */}
                <Stack spacing={2} sx={{ mb: 3 }}>
                  {discountApplied && (
                    <Stack direction="row" justifyContent="space-between">
                      <Typography color="text.secondary">Discount (10%)</Typography>
                      <Typography fontWeight="medium" color="error.main">
                        -{formatPrice(discountAmount)}
                      </Typography>
                    </Stack>
                  )}
                  
                  <Stack direction="row" justifyContent="space-between">
                    <Typography fontWeight="bold">Total</Typography>
                    <Typography fontWeight="bold">{formatPrice(total)}</Typography>
                  </Stack>
                </Stack>
                
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  startIcon={checkoutStatus?.loading ? <CircularProgress size={18} color="inherit" /> : <CreditCard size={18} />}
                  onClick={handleCheckout}
                  disabled={checkoutStatus?.loading || cartItems.length === 0}
                  sx={{ mt: 2 }}
                >
                  {checkoutStatus?.loading ? 'Processing...' : 'Proceed to Checkout'}
                </Button>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Box>
      
      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        // severity={snackbarSeverity}
      />
    </Container>
  );
};

export default Cart;