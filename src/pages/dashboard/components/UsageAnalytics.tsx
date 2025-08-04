import React from 'react';
import {
  Box,
  Typography,
  Stack,
  useTheme
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const UsageAnalytics = () => {
  const theme = useTheme();

  // Sample data for the chart - matches the reference image pattern
  const data = [
    { month: 'Jan', business: 10, other: 5 },
    { month: 'Feb', business: 12, other: 6 },
    { month: 'Mar', business: 15, other: 8 },
    { month: 'Apr', business: 18, other: 10 },
    { month: 'May', business: 22, other: 12 },
    { month: 'Jun', business: 28, other: 14 }
  ];

  return (
    <Box
      sx={{
        bgcolor: '#1a1a1a',
        borderRadius: 2,
        p: 3,
        color: 'white',
        border: '1px solid #333',
        height: '100%'
      }}
    >
      {/* Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
        <Typography variant="h6" fontWeight="bold" color="white">
          Usage Analytics
        </Typography>
        <Stack direction="row" spacing={3}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: '#9c27b0'
              }}
            />
            <Typography variant="body2" color="#ccc" fontSize="0.875rem">
              Business
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: '#2196f3'
              }}
            />
            <Typography variant="body2" color="#ccc" fontSize="0.875rem">
              Other Activities
            </Typography>
          </Stack>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#2196f3',
              cursor: 'pointer',
              fontSize: '0.875rem',
              '&:hover': { textDecoration: 'underline' }
            }}
          >
            View all
          </Typography>
        </Stack>
      </Stack>

      {/* Chart Container */}
      <Box sx={{ height: 280, position: 'relative' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart 
            data={data} 
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="businessGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9c27b0" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#9c27b0" stopOpacity={0.05}/>
              </linearGradient>
              <linearGradient id="otherGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2196f3" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#2196f3" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            
            <CartesianGrid 
              strokeDasharray="none" 
              stroke="#333" 
              horizontal={true} 
              vertical={false}
            />
            
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#888', fontSize: 12 }}
              tickMargin={10}
            />
            
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#888', fontSize: 12 }}
              domain={[0, 30]}
              ticks={[5, 10, 15, 20, 25, 30]}
              tickMargin={10}
            />
            
            {/* Business Area */}
            <Area
              type="monotone"
              dataKey="business"
              stroke="#9c27b0"
              strokeWidth={3}
              fill="url(#businessGradient)"
              fillOpacity={1}
            />
            
            {/* Other Activities Area */}
            <Area
              type="monotone"
              dataKey="other"
              stroke="#2196f3"
              strokeWidth={3}
              fill="url(#otherGradient)"
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default UsageAnalytics;