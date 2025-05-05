import React, { useState, useEffect } from 'react';
import { Grid, Paper, Box, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import { resetRegisterState } from '../../../store/auth/authSlice.ts';
import { register } from '../../../store/auth/authThunk.ts';
import BrandSection from './components/BrandSection.tsx';
import SignUpForm from './components/SignUpForm.tsx';
import BackgroundContainer from '../../../layout/components/BackgroundContainer.tsx';


const SignUpPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { registerLoading, registerSuccess, registerError } = useAppSelector(state => state.auth);
  const [error, setError] = useState('');
  
  // Reset registration state when component unmounts
  useEffect(() => {
    return () => {
      dispatch(resetRegisterState());
    };
  }, [dispatch]);
  
  // Handle API success
  useEffect(() => {
    if (registerSuccess) {
      // Redirect to login page after successful registration
      const timer = setTimeout(() => {
        navigate('/');
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [registerSuccess, navigate]);
  
  // Handle API error
  useEffect(() => {
    if (registerError) {
      if (typeof registerError === 'string') {
        setError(registerError);
      } else if (registerError.email) {
        setError(`Email: ${registerError.email[0]}`);
      } else {
        setError('Registration failed. Please try again.');
      }
    }
  }, [registerError]);
  
  // Handle form submission
  const handleSubmit = (userData) => {
    // Reset error
    setError('');
    
    try {
      // Dispatch the register action
      dispatch(register(userData));
    } catch (err) {
      // Fallback error handling
      setError('Failed to process registration request. Please try again.');
      console.error('Registration error:', err);
    }
  };
  
  const navigateToLogin = () => {
    navigate('/');
  };
  
  return (
    <BackgroundContainer>
      <Grid container justifyContent="center" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Paper 
            elevation={6} 
            sx={{ 
              borderRadius: 2,
              overflow: 'hidden'
            }}
          >
            <Grid container>
              {/* Brand section */}
              <Grid item xs={12} md={5}>
                <BrandSection 
                  isMobile={isMobile}
                  title="Join Us Today"
                  description="Create your account to access powerful subscription management tools and analytics for your business."
                />
              </Grid>
              
              {/* Signup form section */}
              <Grid item xs={12} md={7} sx={{ position: 'relative' }}>
                <Box sx={{ 
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'rgba(99, 102, 241, 0.05)',
                    zIndex: 0
                  }
                }}>
                  <SignUpForm 
                    onSubmit={handleSubmit}
                    onNavigateLogin={navigateToLogin}
                    error={error}
                    loading={registerLoading}
                    success={registerSuccess}
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </BackgroundContainer>
  );
};

export default SignUpPage;