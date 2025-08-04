import React from 'react';
import {
  Paper,
  Box,
  Stack,
  Typography,
  Chip
} from '@mui/material';
import { Star } from 'lucide-react';
import { useTheme } from '@mui/material';

const BundleCard = ({ bundle, index, formatCurrency }) => {
  const theme = useTheme();
  
  // Assign a color based on index
  const colors = ['purple', 'blue', 'green', 'orange'];
  const bundleColor = colors[index % colors.length];
  const bundleIcon = ['🔒', '🏙️', '📊', '📱'][index % 4];
  
  // Get background gradient based on color
  const getBundleGradient = (color) => {
    switch (color) {
      case 'purple':
        return 'linear-gradient(to bottom right, #a855f7, #6366f1)';
      case 'green':
        return 'linear-gradient(to bottom right, #10b981, #16a34a)';
      case 'blue':
        return 'linear-gradient(to bottom right, #3b82f6, #2563eb)';
      case 'orange':
        return 'linear-gradient(to bottom right, #f59e0b, #d97706)';
      default:
        return 'linear-gradient(to bottom right, #6b7280, #4b5563)';
    }
  };
  
  return (
    <Paper 
      elevation={0}
      sx={{ 
        p: 3, 
        background: 'linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(18, 18, 18) 100%)',
        border: '1px solid', 
        borderColor: 'divider', 
        borderRadius: 4,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
          borderColor: 'white'
        }
      }}
    >
      <Box sx={{ width: '100%' }}>
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            <Typography 
              variant="subtitle1" 
              fontWeight="bold"
              color="white"
            >
              {bundle.name.toUpperCase()}
            </Typography>
            <Chip 
              size="small" 
              label="NEW" 
              color="error" 
              sx={{ 
                height: 20, 
                fontSize: '0.7rem',
                animation: 'pulse 2s infinite',
                '@keyframes pulse': {
                  '0%': {
                    transform: 'scale(1)'
                  },
                  '50%': {
                    transform: 'scale(1.05)'
                  },
                  '100%': {
                    transform: 'scale(1)'
                  }
                }
              }} 
            />
          </Stack>
          
          <Typography variant="body2" color="white" sx={{ mt: 0.5, mb: 2, opacity: 0.8 }}>
            {bundle.description}
          </Typography>
          
          <Typography 
            variant="h6" 
            fontWeight="bold" 
            color="white"
          >
            {formatCurrency(99.99)} {/* Price not in API */}
          </Typography>
      </Box>
    </Paper>
  );
};

export default BundleCard;