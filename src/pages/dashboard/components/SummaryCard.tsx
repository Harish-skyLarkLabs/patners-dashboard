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
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: (theme) => theme.shadows[4],
          borderColor: `${color}.light`
        }
      }}
    >
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
          <Typography color="text.secondary" variant="subtitle2">
            {title}
          </Typography>
          <Avatar 
            sx={{ 
              bgcolor: `${color}.main`, 
              width: 40, 
              height: 40,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                bgcolor: `${color}.dark`
              }
            }}
          >
            {icon}
          </Avatar>
        </Stack>
        <Typography variant="h4" fontWeight="bold">
          {value}
        </Typography>
        
        {subtitle && (
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
            {subtitleIcon}
            <Typography variant={buttonText ? "caption" : "body2"} color={buttonText ? "text.secondary" : `${color}.main`}>
              {subtitle}
            </Typography>
          </Stack>
        )}
        
        {buttonText && (
          <Button 
            variant="text" 
            size="small" 
            endIcon={<ChevronRight size={16} />}
            onClick={onButtonClick}
            sx={{ 
              mt: 1, 
              p: 0,
              transition: 'all 0.2s ease',
              '&:hover': {
                transform: 'translateX(5px)',
                color: `${color}.main`
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