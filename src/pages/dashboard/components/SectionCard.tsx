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
          borderColor: 'primary.light',
        }
      }}
      {...props}
    >
      <CardHeader 
        title={title} 
        action={
          actionText && (
            <Button 
              variant="text" 
              endIcon={<ChevronRight size={16} />}
              size="small"
              onClick={onActionClick}
              sx={{ 
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'translateX(3px)',
                  color: 'primary.main'
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
