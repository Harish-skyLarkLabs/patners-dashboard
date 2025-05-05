import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Box,
  InputAdornment,
  IconButton,
  Divider,
  Checkbox,
  FormControlLabel,
  Alert,
  CircularProgress,
  Grid,
  Link
} from '@mui/material';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  UserPlus,
  ChevronRight,
  AlertCircle,
  CheckCircle,
  ArrowLeft
} from 'lucide-react';
import { useTheme } from '@mui/material';

const SignUpForm = ({ 
  onSubmit, 
  onNavigateLogin, 
  error, 
  loading, 
  success 
}) => {
  const theme = useTheme();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [formError, setFormError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset error
    setFormError('');
    
    // Validate form
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setFormError('Please fill in all fields');
      return;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormError('Please enter a valid email address');
      return;
    }
    
    // Validate password
    if (password.length < 8) {
      setFormError('Password must be at least 8 characters long');
      return;
    }
    
    // Confirm passwords match
    if (password !== confirmPassword) {
      setFormError('Passwords do not match');
      return;
    }
    
    // Validate terms agreement
    if (!agreeToTerms) {
      setFormError('You must agree to the terms and conditions');
      return;
    }
    
    // Call parent submit handler
    onSubmit({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password
    });
  };

  // Display the appropriate error message
  const displayError = error || formError;

  return (
    <Box sx={{ p: 4, position: 'relative', zIndex: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Button
          variant="text"
          color="inherit"
          startIcon={<ArrowLeft size={16} />}
          onClick={onNavigateLogin}
          sx={{ mr: 1 }}
        >
          Back to Login
        </Button>
      </Box>
    
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
        Create Account
      </Typography>
      
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Fill in your details to create your account
      </Typography>
      
      {/* Show success message if registration was successful */}
      {success && (
        <Alert 
          severity="success" 
          icon={<CheckCircle size={24} />}
          sx={{ mb: 3 }}
        >
          Registration successful! Redirecting to login...
        </Alert>
      )}
      
      {/* Show error message if there's an error */}
      {displayError && (
        <Alert 
          severity="error" 
          icon={<AlertCircle size={24} />}
          sx={{ mb: 3 }}
        >
          {displayError}
        </Alert>
      )}
      
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                First Name
              </Typography>
              <TextField
                fullWidth
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="John"
                disabled={loading || success}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <User size={18} color={theme.palette.text.secondary} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Last Name
              </Typography>
              <TextField
                fullWidth
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Doe"
                disabled={loading || success}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <User size={18} color={theme.palette.text.secondary} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Email Address
          </Typography>
          <TextField
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@company.com"
            type="email"
            disabled={loading || success}
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
            placeholder="Create a password"
            type={showPassword ? 'text' : 'password'}
            disabled={loading || success}
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
                    disabled={loading || success}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Confirm Password
          </Typography>
          <TextField
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            type={showConfirmPassword ? 'text' : 'password'}
            disabled={loading || success}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock size={18} color={theme.palette.text.secondary} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                    disabled={loading || success}
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        
        <FormControlLabel
          control={
            <Checkbox 
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              size="small"
              disabled={loading || success}
            />
          }
          label={
            <Typography variant="body2">
              I agree to the{' '}
              <Link href="#" underline="hover" color="primary">Terms of Service</Link>
              {' '}and{' '}
              <Link href="#" underline="hover" color="primary">Privacy Policy</Link>
            </Typography>
          }
          sx={{ mb: 3 }}
        />
        
        <Button
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          disabled={loading || success}
          startIcon={loading ? <CircularProgress size={18} color="inherit" /> : <UserPlus size={18} />}
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
          {loading ? 'Creating Account...' : 'Create Account'}
        </Button>
        
        <Divider sx={{ my: 3 }}>
          <Typography variant="caption" color="text.secondary">
            OR
          </Typography>
        </Divider>
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Already have an account?
          </Typography>
          
          <Button
            variant="outlined"
            color="primary"
            endIcon={<ChevronRight size={16} />}
            onClick={onNavigateLogin}
            disabled={loading}
          >
            Sign In
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default SignUpForm;