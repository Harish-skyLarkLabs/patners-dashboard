import React from 'react';
import {
  ListItem,
  Grid,
  Stack,
  Typography,
  Box,
  LinearProgress,
  IconButton
} from '@mui/material';
import { Calendar, ChevronRight } from 'lucide-react';
import StatusChip from './StatusChip.tsx';

const SubscriptionItem = ({ subscription, onClick }) => {
  // Calculate usage percentage
  const usagePercentage = 100 - (subscription.days_remaining / 30 * 100);
  
  return (
    <ListItem 
      alignItems="flex-start"
      secondaryAction={
        <IconButton 
          edge="end"
          onClick={onClick}
          sx={{ 
            transition: 'all 0.2s ease',
            '&:hover': {
              transform: 'translateX(3px) scale(1.1)',
              color: 'primary.main',
              bgcolor: 'action.hover'
            }
          }}
        >
          <ChevronRight size={20} />
        </IconButton>
      }
      sx={{ 
        py: 2,
        transition: 'all 0.2s ease',
        '&:hover': {
          bgcolor: 'action.hover',
          transform: 'translateX(5px)',
          borderLeft: '4px solid',
          borderLeftColor: 
            subscription.status === 'active' ? 'success.main' : 
            subscription.days_remaining <= 15 ? 'warning.main' : 'error.main',
          pl: 1
        },
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Stack direction="column" spacing={1}>
            <Typography variant="subtitle1" fontWeight="bold">
              {subscription.bundle_name?.toUpperCase() || 'SUBSCRIPTION'}
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <StatusChip status={subscription.status} />
              <StatusChip 
                status={subscription.payments?.length > 0 ? 'paid' : 'unpaid'} 
                variant="outlined" 
              />
            </Stack>
          </Stack>
        </Grid>
        
        <Grid item xs={6} sm={3}>
          <Stack direction="column" spacing={0.5}>
            <Typography variant="caption" color="text.secondary">
              Expiry Date
            </Typography>
            <Stack 
              direction="row" 
              spacing={1} 
              alignItems="center"
              sx={{
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: 'primary.main'
                }
              }}
            >
              <Calendar size={14} />
              <Typography variant="body2">
                {new Date(subscription.expire_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </Typography>
            </Stack>
            {subscription.days_remaining > 0 && subscription.days_remaining <= 30 && (
              <Typography 
                variant="caption" 
                color={subscription.days_remaining <= 15 ? "warning.main" : "text.secondary"}
                sx={{
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    fontWeight: 'bold'
                  }
                }}
              >
                {subscription.days_remaining} days remaining
              </Typography>
            )}
          </Stack>
        </Grid>
        
        <Grid item xs={6} sm={3}>
          <Stack direction="column" spacing={0.5}>
            <Typography variant="caption" color="text.secondary" display="block">
              Usage
            </Typography>
            <Box 
              sx={{ 
                width: '100%', 
                maxWidth: 150,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              <LinearProgress 
                variant="determinate" 
                value={usagePercentage} 
                sx={{
                  height: 6,
                  borderRadius: 3,
                  mb: 0.5,
                  '& .MuiLinearProgress-bar': {
                    transition: 'transform 0.8s ease'
                  }
                }}
                color={
                  usagePercentage > 80 ? "error" :
                  usagePercentage > 60 ? "warning" : "primary"
                }
              />
              <Typography variant="caption">
                {Math.round(usagePercentage)}% used
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default SubscriptionItem;