import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Tabs,
  Tab,
  TextField,
  Button,
  Grid,
  IconButton,
  Divider,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Tooltip,
  Stack,
  LinearProgress,
  Card
} from '@mui/material';
import {
  Edit,
  Save,
  User,
  Mail,
  Phone,
  Building,
  MapPin,
  Globe,
  Eye,
  Copy,
  FileText,
  RotateCw,
  // FileArrowDown
} from 'lucide-react';

// Tab Panel Component
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`settings-tabpanel-${index}`}
      aria-labelledby={`settings-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Settings = () => {
  // Tab state
  const [tabValue, setTabValue] = useState(0);
  
  // Edit mode state
  const [editMode, setEditMode] = useState(false);
  
  // User data state
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    company: 'Acme Corporation',
    address: '123 Business Avenue',
    city: 'Tech City',
    state: 'CA',
    zipCode: '90210',
    country: 'United States',
    website: 'www.acmecorp.com'
  });
  
  // License data
  const licenseData = [
    {
      id: 'LIC-2025-001',
      bundle: 'PUBLIC SAFETY SUITE',
      key: '••••-••••-••••-••••',
      status: 'Active',
      expiry: 'March 15, 2026',
      activations: '3 / 5 devices',
      activationPercentage: 60,
      tier: 'Max'
    },
    {
      id: 'LIC-2025-002',
      bundle: 'TRAFFIC MANAGEMENT SUITE',
      key: '••••-••••-••••-••••',
      status: 'Active',
      expiry: 'February 3, 2026',
      activations: '2 / 3 devices',
      activationPercentage: 67,
      tier: 'Plus'
    },
    {
      id: 'LIC-2024-003',
      bundle: 'RETAIL ANALYTICS SUITE',
      key: '••••-••••-••••-••••',
      status: 'Expired',
      expiry: 'January 10, 2025',
      activations: '1 / 2 devices',
      activationPercentage: 50,
      tier: 'Core'
    }
  ];
  
  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  
  // Handle edit toggle
  const handleEditToggle = () => {
    if (editMode) {
      // If saving, would typically call an API here
    }
    setEditMode(!editMode);
  };
  
  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };
  
  // Get chip color based on status
  const getStatusChipProps = (status) => {
    if (status === 'Active') {
      return { 
        color: 'success',
        icon: <span style={{ fontSize: '8px', marginRight: '4px' }}>●</span>
      };
    } else if (status === 'Expired') {
      return { 
        color: 'error',
        icon: <span style={{ fontSize: '8px', marginRight: '4px' }}>●</span>
      };
    } else {
      return { 
        color: 'warning',
        icon: <span style={{ fontSize: '8px', marginRight: '4px' }}>●</span>
      };
    }
  };
  
  // Get tier chip color
  const getTierChipColor = (tier) => {
    switch (tier) {
      case 'Max':
        return 'error';
      case 'Plus':
        return 'primary';
      case 'Core':
        return 'secondary';
      default:
        return 'default';
    }
  };
  
  // Helper function to view license key
  const handleViewKey = (index) => {
    // In a real app, this would reveal the actual key
    console.log(`View key for license ${index}`);
  };
  
  // Helper function to copy license key
  const handleCopyKey = (index) => {
    // In a real app, this would copy the key to clipboard
    console.log(`Copy key for license ${index}`);
  };
  
  // Helper function to view license details
  const handleViewDetails = (id) => {
    console.log(`View details for license ${id}`);
  };
  
  // Helper function to renew license
  const handleRenewLicense = (id) => {
    console.log(`Renew license ${id}`);
  };
  
  return (
    <Container maxWidth={false} sx={{ py: 2 }}>
      <Typography variant="h4" component="h1" fontWeight="bold" color="text.primary" sx={{ mb: 4 }}>
        Settings
      </Typography>
      
      <Paper sx={{ mb: 8 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange}
            aria-label="settings tabs"
          >
            <Tab label="General Information" />
            <Tab label="My Licenses" />
          </Tabs>
        </Box>
        
        {/* General Information Tab */}
        <TabPanel value={tabValue} index={0}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="h6" component="h2">
              User Profile
            </Typography>
            
            <Button
              variant={editMode ? "contained" : "outlined"}
              color={editMode ? "primary" : "inherit"}
              startIcon={editMode ? <Save size={18} /> : <Edit size={18} />}
              onClick={handleEditToggle}
            >
              {editMode ? "Save Changes" : "Edit Profile"}
            </Button>
          </Box>
          
          <Divider sx={{ mb: 4 }} />
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={4} lg={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar 
                  sx={{ 
                    width: 100, 
                    height: 100, 
                    mb: 2,
                    bgcolor: 'primary.main',
                    fontSize: '2rem'
                  }}
                >
                  {userData.firstName.charAt(0)}{userData.lastName.charAt(0)}
                </Avatar>
                
                {editMode && (
                  <Button 
                    variant="outlined" 
                    size="small"
                    sx={{ mt: 1 }}
                  >
                    Change Picture
                  </Button>
                )}
                
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {userData.firstName} {userData.lastName}
                </Typography>
                
                <Typography variant="body2" color="text.secondary">
                  {userData.email}
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={8} lg={9}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleInputChange}
                    fullWidth
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: (
                        <User size={18} style={{ marginRight: '8px', opacity: 0.7 }} />
                      ),
                    }}
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleInputChange}
                    fullWidth
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: (
                        <User size={18} style={{ marginRight: '8px', opacity: 0.7 }} />
                      ),
                    }}
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    fullWidth
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: (
                        <Mail size={18} style={{ marginRight: '8px', opacity: 0.7 }} />
                      ),
                    }}
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone"
                    name="phone"
                    value={userData.phone}
                    onChange={handleInputChange}
                    fullWidth
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: (
                        <Phone size={18} style={{ marginRight: '8px', opacity: 0.7 }} />
                      ),
                    }}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    label="Company"
                    name="company"
                    value={userData.company}
                    onChange={handleInputChange}
                    fullWidth
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: (
                        <Building size={18} style={{ marginRight: '8px', opacity: 0.7 }} />
                      ),
                    }}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    label="Address"
                    name="address"
                    value={userData.address}
                    onChange={handleInputChange}
                    fullWidth
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: (
                        <MapPin size={18} style={{ marginRight: '8px', opacity: 0.7 }} />
                      ),
                    }}
                  />
                </Grid>
                
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="City"
                    name="city"
                    value={userData.city}
                    onChange={handleInputChange}
                    fullWidth
                    disabled={!editMode}
                  />
                </Grid>
                
                <Grid item xs={6} sm={4}>
                  <TextField
                    label="State/Province"
                    name="state"
                    value={userData.state}
                    onChange={handleInputChange}
                    fullWidth
                    disabled={!editMode}
                  />
                </Grid>
                
                <Grid item xs={6} sm={4}>
                  <TextField
                    label="Zip/Postal Code"
                    name="zipCode"
                    value={userData.zipCode}
                    onChange={handleInputChange}
                    fullWidth
                    disabled={!editMode}
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Country"
                    name="country"
                    value={userData.country}
                    onChange={handleInputChange}
                    fullWidth
                    disabled={!editMode}
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Website"
                    name="website"
                    value={userData.website}
                    onChange={handleInputChange}
                    fullWidth
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: (
                        <Globe size={18} style={{ marginRight: '8px', opacity: 0.7 }} />
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        
        {/* My Licenses Tab */}
        <TabPanel value={tabValue} index={1}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="h6" component="h2">
              License Keys
            </Typography>
            
            <Button
              variant="outlined"
              color="primary"
              // startIcon={<FileArrowDown size={18} />}
            >
              Export All
            </Button>
          </Box>
          
          <TableContainer>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Bundle / License ID</TableCell>
                  <TableCell>License Key</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Expiry</TableCell>
                  <TableCell>Activations</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {licenseData.map((license) => {
                  const statusChipProps = getStatusChipProps(license.status);
                  
                  return (
                    <TableRow key={license.id} hover>
                      <TableCell>
                        <Box>
                          <Typography variant="subtitle2" fontWeight="bold">
                            {license.bundle}
                          </Typography>
                          <Stack direction="row" spacing={1} alignItems="center">
                            <Typography variant="body2" color="text.secondary">
                              {license.id}
                            </Typography>
                            <Chip 
                              label={license.tier} 
                              size="small"
                              color={getTierChipColor(license.tier)}
                              sx={{ height: 20, fontSize: '0.7rem' }}
                            />
                          </Stack>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Typography variant="body2" fontFamily="monospace">
                            {license.key}
                          </Typography>
                          <Tooltip title="View Key">
                            <IconButton size="small" onClick={() => handleViewKey(license.id)}>
                              <Eye size={16} />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Copy Key">
                            <IconButton size="small" onClick={() => handleCopyKey(license.id)}>
                              <Copy size={16} />
                            </IconButton>
                          </Tooltip>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Chip 
                          icon={statusChipProps.icon}
                          label={license.status} 
                          size="small"
                          color={statusChipProps.color}
                        />
                      </TableCell>
                      <TableCell>
                        {license.expiry}
                      </TableCell>
                      <TableCell>
                        <Box sx={{ width: '100%', maxWidth: 150 }}>
                          <Typography variant="body2" sx={{ mb: 1 }}>
                            {license.activations}
                          </Typography>
                          <LinearProgress 
                            variant="determinate" 
                            value={license.activationPercentage} 
                            sx={{
                              height: 6,
                              borderRadius: 3
                            }}
                          />
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Stack direction="row" spacing={1}>
                          <Tooltip title="License Details">
                            <IconButton size="small" onClick={() => handleViewDetails(license.id)}>
                              <FileText size={18} />
                            </IconButton>
                          </Tooltip>
                          
                          {license.status === 'Expired' && (
                            <Button
                              variant="outlined"
                              size="small"
                              color="secondary"
                              startIcon={<RotateCw size={16} />}
                              onClick={() => handleRenewLicense(license.id)}
                            >
                              Renew
                            </Button>
                          )}
                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default Settings;