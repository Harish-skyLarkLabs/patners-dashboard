import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button
} from '@mui/material';
import { ChevronRight } from 'lucide-react';

const SectionCard = ({ 
  title, 
  actionText, 
  onActionClick, 
  children, 
  ...props 
}) => {
  return (
    <Card 
      elevation={0} 
      sx={{ 
        border: '1px solid', 
        borderColor: 'divider', 
        height: '100%',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: (theme) => theme.shadows[2],
          borderColor: 'white',
        }
      }}
      {...props}
    >
      <CardHeader 
        title={title} 
        action={
          actionText && (
            <Button 
              variant="contained" 
              endIcon={<ChevronRight size={16} />}
              size="small"
              onClick={onActionClick}
              sx={{ 
                borderRadius: 2,
                bgcolor: 'white',
                color: 'black',
                px: 2,
                py: 1,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateX(3px) translateY(-2px)',
                  bgcolor: '#f5f5f5',
                  boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)'
                }
              }}
            >
              {actionText}
            </Button>
          )
        }
      />
      <Divider />
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default SectionCard;
