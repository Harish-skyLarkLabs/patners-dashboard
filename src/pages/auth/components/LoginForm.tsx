import React, { useState, useEffect } from 'react';
import {
  Typography,
  TextField,
  Button,
  Box,
  InputAdornment,
  IconButton,
  Divider,
  Stack,
  Checkbox,
  FormControlLabel,
  Alert,
  CircularProgress,
  Link
} from '@mui/material';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  AlertCircle,
  ChevronRight
} from 'lucide-react';
import { useTheme } from '@mui/material';

const LoginForm = ({ 
  onSubmit, 
  onNavigateSignUp, 
  error, 
  isLoading 
}) => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formError, setFormError] = useState('');

  // Set error from props
  useEffect(() => {
    if (error) {
      setFormError(error);
    }
  }, [error]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');
    
    // Validate form
    if (!email || !password) {
      setFormError('Please fill in all fields');
      return;
    }
   
    // Call parent submit handler
    onSubmit({ email, password, rememberMe });
  };

  return (
    <Box sx={{ p: 4, position: 'relative', zIndex: 1 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
        Sign In
      </Typography>
      
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Enter your credentials to access your account
      </Typography>
      
      {formError && (
        <Alert 
          severity="error" 
          icon={<AlertCircle size={24} />}
          sx={{ mb: 3 }}
        >
          {formError}
        </Alert>
      )}
      
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Email Address
          </Typography>
          <TextField
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            type="email"
            disabled={isLoading}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Mail size={18} color={theme.palette.text.secondary} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Password
          </Typography>
          <TextField
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            type={showPassword ? 'text' : 'password'}
            disabled={isLoading}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock size={18} color={theme.palette.text.secondary} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        
        <Stack 
          direction="row" 
          justifyContent="space-between" 
          alignItems="center"
          sx={{ mb: 4 }}
        >
          <FormControlLabel
            control={
              <Checkbox 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                size="small"
                disabled={isLoading}
              />
            }
            label={<Typography variant="body2">Remember me</Typography>}
          />
          
          <Link 
            href="#" 
            variant="body2" 
            underline="hover"
            color="primary"
          >
            Forgot password?
          </Link>
        </Stack>
        
        <Button
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          disabled={isLoading}
          startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <LogIn size={18} />}
          sx={{ 
            mb: 3, 
            py: 1.5,
            background: 'linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)',
            boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.39)',
            '&:hover': {
              boxShadow: '0 6px 20px rgba(99, 102, 241, 0.23)',
              background: 'linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%)'
            }
          }}
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>
        
        <Divider sx={{ my: 3 }}>
          <Typography variant="caption" color="text.secondary">
            OR
          </Typography>
        </Divider>
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Don't have an account?
          </Typography>
          
          <Button
            variant="outlined"
            color="primary"
            endIcon={<ChevronRight size={16} />}
            onClick={onNavigateSignUp}
            disabled={isLoading}
          >
            Create Account
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default LoginForm;