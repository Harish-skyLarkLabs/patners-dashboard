import React from 'react';
import { Chip } from '@mui/material';
import { AlertCircle, CheckCircle, Clock } from 'lucide-react';

const StatusChip = ({ status, variant = "filled" }) => {
  // Get appropriate status chip props
  const getStatusChip = (status) => {
    switch (status) {
      case 'active':
        return { 
          label: 'Active', 
          color: 'success',
          icon: <CheckCircle size={14} />
        };
      case 'expiring':
      case 'expiring_soon':
        return { 
          label: 'Expiring Soon', 
          color: 'warning',
          icon: <Clock size={14} />
        };
      case 'inactive':
      case 'expired':
        return { 
          label: 'Inactive', 
          color: 'error',
          icon: <AlertCircle size={14} />
        };
      case 'verified':
        return { 
          label: 'Verified', 
          color: 'success',
          icon: <CheckCircle size={14} />
        };
      case 'paid':
        return { 
          label: 'PAID', 
          color: 'success',
          icon: null
        };
      case 'unpaid':
        return { 
          label: 'UNPAID', 
          color: 'error',
          icon: null
        };
      default:
        return { 
          label: status, 
          color: 'default',
          icon: null
        };
    }
  };

  const statusProps = getStatusChip(status);
  
  return (
    <Chip 
      size="small"
      label={statusProps.label}
      color={statusProps.color}
      icon={statusProps.icon}
      variant={variant}
      sx={{
        transition: 'all 0.2s ease',
        '&:hover': {
          transform: 'scale(1.05)'
        }
      }}
    />
  );
};

export default StatusChip;