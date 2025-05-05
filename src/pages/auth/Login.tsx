import React, { useState, useEffect } from 'react';
import { Grid, Paper, Box, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BackgroundContainer from '../../layout/components/BackgroundContainer.tsx';
import BrandSection from './components/BrandSection.tsx';
import LoginForm from './components/LoginForm.tsx';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { login } from '../../store/auth/authThunk.ts';

const LoginPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { isLoading, isAuthenticate, error: authError } = useAppSelector(state => state.auth);
  console.log("🚀 ~ LoginPage ~ authError:", authError)
  const [error, setError] = useState('');

  // Process error from auth state
  useEffect(() => {
    if (authError) {
      console.log(authError.data.error);

      if (typeof authError === 'string') {
        setError(authError);
      } else if (authError.data && authError.data.error) {
        setError(authError.data.error);
      } else {
        setError('An error occurred during authentication. Please try again.');
      }
    } else {
      setError('');
    }
  }, [authError]);

  // Handle login submission
  const handleSubmit = async (credentials) => {
    try {
      setError('');

      const resultAction = await dispatch(login({
        email: credentials.email,
        password: credentials.password
      }));


      if (!login.rejected.match(resultAction)) {

        navigate('/dashboard');
      }

    } catch (err) {
      setError('Failed to process login request. Please try again.');
      console.error('Login error:', err);
    }
  };

  const navigateToSignUp = () => {
    navigate('/sign-up');
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
                <BrandSection isMobile={isMobile} />
              </Grid>

              {/* Login form section */}
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
                  <LoginForm
                    onSubmit={handleSubmit}
                    onNavigateSignUp={navigateToSignUp}
                    error={error}
                    isLoading={isLoading}
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

export default LoginPage;