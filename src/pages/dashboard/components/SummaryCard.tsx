import React from 'react';
import {
  Card,
  CardContent,
  Stack,
  Typography,
  Avatar,
  Button
} from '@mui/material';
import { ChevronRight } from 'lucide-react';

const SummaryCard = ({ 
  title, 
  value, 
  icon, 
  color = 'primary', 
  subtitle, 
  subtitleIcon,
  buttonText,
  onButtonClick
}) => {
  return (
    <Card 
      elevation={0} 
      sx={{ 
        border: '1px solid', 
        borderColor: 'divider',
        borderRadius: 4,
        background: 'linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(18, 18, 18) 100%)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
          borderColor: 'white'
        }
      }}
    >
      <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
          <Typography color="white" variant="subtitle2">
            {title}
          </Typography>
          {icon && (
            <Avatar 
              sx={{ 
                bgcolor: `${color}.main`, 
                width: 48, 
                height: 48,
                borderRadius: 3,
                boxShadow: `0 4px 12px rgba(0, 0, 0, 0.1)`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  bgcolor: `${color}.dark`,
                  boxShadow: `0 6px 16px rgba(0, 0, 0, 0.15)`
                }
              }}
            >
              {icon}
            </Avatar>
          )}
        </Stack>
        <Typography variant="h4" fontWeight="bold" color="white">
          {value}
        </Typography>
        
        {subtitle && (
          <Typography variant={buttonText ? "caption" : "body2"} color="white" sx={{ mt: 1 }}>
            {subtitle}
          </Typography>
        )}
        
        {buttonText && (
          <Button 
            variant="text" 
            size="small" 
            endIcon={<ChevronRight size={16} />}
            onClick={onButtonClick}
                        sx={{ 
              mt: 2, 
              borderRadius: 2,
              px: 2,
              py: 1,
              bgcolor: 'white',
              color: 'black',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateX(5px) translateY(-2px)',
                bgcolor: '#f5f5f5',
                boxShadow: `0 4px 12px rgba(255, 255, 255, 0.3)`
              }
            }}
          >
            {buttonText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;