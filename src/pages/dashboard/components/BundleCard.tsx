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
        p: 2, 
        border: '1px solid', 
        borderColor: 'divider', 
        borderRadius: 2,
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: (theme) => theme.shadows[5],
          borderColor: 'transparent',
          '&:before': {
            opacity: 0.05
          }
        },
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: getBundleGradient(bundleColor),
          opacity: 0,
          transition: 'opacity 0.3s ease',
          zIndex: 0
        },
        '& > *': {
          position: 'relative',
          zIndex: 1
        }
      }}
    >
      <Stack direction="row" spacing={2}>
        <Box 
          sx={{ 
            width: 50, 
            height: 50, 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            background: getBundleGradient(bundleColor),
            fontSize: '1.5rem',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1) rotate(10deg)'
            }
          }}
        >
          {bundleIcon}
        </Box>
        
        <Box sx={{ flexGrow: 1 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            <Typography 
              variant="subtitle1" 
              fontWeight="bold"
              sx={{
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: (theme) => {
                    switch(bundleColor) {
                      case 'purple': return '#a855f7';
                      case 'green': return '#10b981';
                      case 'blue': return '#3b82f6';
                      case 'orange': return '#f59e0b';
                      default: return theme.palette.primary.main;
                    }
                  }
                }
              }}
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
          
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1 }}>
            {bundle.description}
          </Typography>
          
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography 
              variant="h6" 
              fontWeight="bold" 
              color="primary.main"
              sx={{
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              {formatCurrency(99.99)} {/* Price not in API */}
            </Typography>
            
            <Stack 
              direction="row" 
              spacing={0.5} 
              alignItems="center"
              sx={{
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.1)'
                }
              }}
            >
              <Star size={16} fill={theme.palette.warning.main} color={theme.palette.warning.main} />
              <Typography variant="body2">
                {(Math.random() * (5 - 4) + 4).toFixed(1)} {/* Random rating */}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
};

export default BundleCard;