import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton
} from '@mui/material';
import { Download, RefreshCcw } from 'lucide-react';

const PlansTable = ({ subscriptions }) => {
  // Add 2 more mock services to demonstrate the structure
  const mockServices = [
    {
      id: 'mock-1',
      service_name: 'Campus AI scurity',
      expire_date: '2024-12-15',
      amount: '$25',
      status: 'active',
      icon: '🟢'
    },
    {
      id: 'mock-2', 
      service_name: 'AI Security Premium',
      expire_date: '2024-11-20',
      amount: '$15',
      status: 'pending',
      icon: '🟡'
    }
  ];

  // Combine real subscriptions with mock services
  const allServices = [
    ...subscriptions.map(sub => ({
      id: sub.id,
      service_name: sub.bundle_name || 'Security Service',
      expire_date: sub.expire_date,
      amount: '$50', // Mock amount since not in API
      status: sub.status
    })),
    ...mockServices.map(service => ({
      ...service,
      icon: undefined // Remove icons from mock services too
    }))
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return { bgcolor: '#22c55e', color: 'white' };
      case 'pending':
        return { bgcolor: '#f59e0b', color: 'white' };
      case 'expired':
      case 'inactive':
        return { bgcolor: '#ef4444', color: 'white' };
      default:
        return { bgcolor: '#6b7280', color: 'white' };
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Box
      sx={{
        bgcolor: '#1a1a1a',
        borderRadius: 2,
        p: 3,
        color: 'white'
      }}
    >
      {/* Header */}
      <Typography variant="h6" fontWeight="bold" color="white" sx={{ mb: 3 }}>
        Your Plans
      </Typography>

      {/* Table */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#888', fontSize: '0.875rem', border: 'none', pb: 2 }}>
                Service Name
              </TableCell>
              <TableCell sx={{ color: '#888', fontSize: '0.875rem', border: 'none', pb: 2 }}>
                Expiry Date
              </TableCell>
              <TableCell sx={{ color: '#888', fontSize: '0.875rem', border: 'none', pb: 2 }}>
                Amount
              </TableCell>
              <TableCell sx={{ color: '#888', fontSize: '0.875rem', border: 'none', pb: 2 }}>
                Status
              </TableCell>
              <TableCell sx={{ color: '#888', fontSize: '0.875rem', border: 'none', pb: 2 }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allServices.map((service, index) => (
              <TableRow 
                key={service.id}
                sx={{ 
                  '&:hover': { 
                    bgcolor: 'rgba(255, 255, 255, 0.05)' 
                  }
                }}
              >
                <TableCell sx={{ border: 'none', py: 2 }}>
                  <Typography color="white" fontWeight="medium">
                    {service.service_name}
                  </Typography>
                </TableCell>
                <TableCell sx={{ border: 'none', py: 2 }}>
                  <Typography color="white">
                    {formatDate(service.expire_date)}
                  </Typography>
                </TableCell>
                <TableCell sx={{ border: 'none', py: 2 }}>
                  <Typography color="white" fontWeight="bold">
                    {service.amount}
                  </Typography>
                </TableCell>
                <TableCell sx={{ border: 'none', py: 2 }}>
                  <Chip
                    label={service.status}
                    size="small"
                    sx={{
                      ...getStatusColor(service.status),
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      textTransform: 'capitalize'
                    }}
                  />
                </TableCell>
                <TableCell sx={{ border: 'none', py: 2 }}>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton
                      size="small"
                      sx={{
                        color: '#22c55e',
                        '&:hover': {
                          bgcolor: 'rgba(34, 197, 94, 0.1)'
                        }
                      }}
                    >
                      <Download size={16} />
                    </IconButton>
                    <IconButton
                      size="small"
                      sx={{
                        color: '#ef4444',
                        '&:hover': {
                          bgcolor: 'rgba(239, 68, 68, 0.1)'
                        }
                      }}
                    >
                      <RefreshCcw size={16} />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PlansTable;