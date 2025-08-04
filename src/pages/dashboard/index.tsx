import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  List,
  Divider,
  Button,
  Stack,
  CircularProgress
} from '@mui/material';
import {
  AlertCircle,
  CheckCircle,
  Clock,
  TrendingUp,
  DollarSign,
  ArrowUpRight,
} from 'lucide-react';
import { getCustomerDashboard } from '../../store/customers/customerThunk.ts';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import SummaryCard from './components/SummaryCard.tsx';
import SectionCard from './components/SectionCard.tsx';
import SubscriptionItem from './components/SubscriptionItem.tsx';
import BundleCard from './components/BundleCard.tsx';
import UsageAnalytics from './components/UsageAnalytics.tsx';
import PlansTable from './components/PlansTable.tsx';

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount);
};

const Dashboard = () => {
  const dispatch = useAppDispatch();
  
  // Get dashboard data from Redux store
  const { dashboard, isLoading, error } = useAppSelector((state) => (state.customers));
  
  // Fetch dashboard data on component mount
  useEffect(() => {
    dispatch(getCustomerDashboard());
  }, [dispatch]);
  
  // If loading, show loading spinner
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }
  
  // If error, show error message
  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography color="error">Error loading dashboard: {error}</Typography>
      </Box>
    );
  }
  
  // Get customer data
  const { customer, total_spent, subscriptions, latest_bundles } = dashboard;
  
  // Calculate subscription stats
  const activeSubscriptions = subscriptions.filter(sub => sub.status === 'active').length;
  const expiringSubscriptions = subscriptions.filter(sub => 
    sub.status === 'active' && sub.days_remaining <= 15
  ).length;
  const inactiveSubscriptions = subscriptions.filter(sub => sub.status !== 'active').length;
  
  return (
    <Box sx={{ width: '100%', height: '100%', py: 4, px: { xs: 2, md: 3 } }}>
      <Typography variant="h4" component="h1" fontWeight="bold" sx={{ mb: 4 }}>
        Dashboard
      </Typography>
      
      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} lg={3}>
          <SummaryCard 
            title="Total Spent"
            value={formatCurrency(total_spent)}
            color="primary"
            subtitle={`Customer: ${customer?.name || 'N/A'}`}
          />
        </Grid>
        
        <Grid item xs={12} sm={6} lg={3}>
          <SummaryCard 
            title="Active Plans"
            value={activeSubscriptions}
            color="success"
            subtitle={`From ${subscriptions.length} total subscriptions`}
          />
        </Grid>
        
        <Grid item xs={12} sm={6} lg={3}>
          <SummaryCard 
            title="Expiring Soon"
            value={expiringSubscriptions}
            color="warning"
            subtitle="Plans expiring within 15 days"
          />
        </Grid>
        
        <Grid item xs={12} sm={6} lg={3}>
          <SummaryCard 
            title="Inactive Plans"
            value={inactiveSubscriptions}
            color="error"
            buttonText="Renew Now"
            onButtonClick={() => console.log('Renew now clicked')}
          />
        </Grid>
      </Grid>
      
      {/* Usage Analytics Chart */}
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} lg={8}>
          <UsageAnalytics />
        </Grid>
        <Grid item xs={12} lg={4}>
          {/* Latest Bundles */}
          <SectionCard 
            title="Latest Bundles"
            actionText="Explore"
            onActionClick={() => console.log('Explore bundles clicked')}
          >
            <Stack spacing={2}>
              {latest_bundles.map((bundle, index) => (
                <BundleCard 
                  key={bundle.id}
                  bundle={bundle}
                  index={index}
                  formatCurrency={formatCurrency}
                />
              ))}
              
              <Button 
                variant="contained" 
                fullWidth 
                sx={{ 
                  mt: 2,
                  borderRadius: 2,
                  bgcolor: 'white',
                  color: 'black',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    bgcolor: '#f5f5f5',
                    boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)'
                  }
                }}
                endIcon={<ArrowUpRight size={16} />}
              >
                View All Bundles
              </Button>
            </Stack>
          </SectionCard>
        </Grid>
      </Grid>
      
      {/* Main Content Grid */}
      <Grid container spacing={4}>
        {/* Your Plans Table - Full Width */}
        <Grid item xs={12}>
          <PlansTable subscriptions={subscriptions} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;