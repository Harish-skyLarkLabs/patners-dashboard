import React from 'react';
import { Box, Alert, Button } from '@mui/material';
import { AlertCircle, ArrowLeft } from 'lucide-react';

const ErrorState = ({ message, buttonText, onButtonClick }) => {
  return (
    <Box sx={{ width: '100%', px: 3, py: 4 }}>
      <Alert 
        severity="error" 
        icon={<AlertCircle size={24} />}
        sx={{ mb: 2 }}
      >
        {message}
      </Alert>
      <Button 
        variant="outlined" 
        startIcon={<ArrowLeft size={16} />} 
        onClick={onButtonClick}
        sx={{ mt: 2 }}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default ErrorState;