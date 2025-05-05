import React, { useState, useEffect } from 'react';
import { Box, Container, Toolbar, useTheme, useMediaQuery, IconButton } from '@mui/material';
import { Menu } from 'lucide-react';
import Header from './components/Header.tsx';
import Sidebar from './components/Sidebar.tsx';
import Footer from './components/Footer.tsx';
import { SidebarProvider, useSidebar } from '../contexts/SidebarContext.tsx';

// Sidebar width constants
const EXPANDED_WIDTH = 260;
const COLLAPSED_WIDTH = 72;

const DashboardBaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isCollapsed } = useSidebar();
  
  const handleDrawerToggle = () => {
    console.log("🚀 ~ handleDrawerToggle ~ toggling mobileOpen:", !mobileOpen);
    setMobileOpen(!mobileOpen);
  };

  // Calculate proper sidebar width based on collapse state
  const sidebarWidth = isCollapsed ? 0 : 0;

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Header with mobile menu button handler */}
      <Header 
        showSidebarToggle={true}
        onMobileMenuClick={handleDrawerToggle}
      />

      {/* Sidebar */}
      <Sidebar 
        open={isMobile ? mobileOpen : true} 
        onClose={() => setMobileOpen(false)}
        variant={isMobile ? 'temporary' : 'permanent'}
      />

      {/* Main content wrapper */}
      <Box 
        component="main" 
        sx={{ 
          background: theme.palette.background.default,
          flexGrow: 1,
          ml: { 
            xs: 0,
            md: isMobile ? 0 : `${sidebarWidth}px`
          },
          width: { 
            xs: '100%',
            md: `calc(100% - ${isMobile ? 0 : sidebarWidth}px)`
          },
          transition: theme => theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Toolbar /> {/* Spacing below app bar */}
        
        {/* Content area */}
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          minHeight: 'calc(100vh - 64px)', // Subtract toolbar height
          background: theme.palette.background.paper,
        }}>
          {/* Main content */}
          <Container 
            maxWidth={false} 
            sx={{ 
              flexGrow: 1,
              py: 3,
            }}
          >
            {children}
          </Container>
          
          {/* Footer */}
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

// Wrap the layout with SidebarProvider
const DashboardBaseLayoutWithProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SidebarProvider>
      <DashboardBaseLayout>
        {children}
      </DashboardBaseLayout>
    </SidebarProvider>
  );
};

export default DashboardBaseLayoutWithProvider;