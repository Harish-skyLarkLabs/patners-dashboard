import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Tooltip,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  styled,
  IconButton,
  useTheme,
  useMediaQuery,
  Collapse,
  ListItemText,
  Typography,
  ListItemIcon
} from '@mui/material';
import {
  ChevronDown,
  ChevronRight,
  Home,
  Heart,
  Bell,
  MessageSquare,
  User,
  Settings,
  LogOut,
  LayoutDashboard,
  Cpu,
  FolderArchive,
  MapPin,
  User2
} from 'lucide-react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { routes } from '../../routes/index.tsx';
import { useAppDispatch } from '../../store/hooks.ts';
import { useSidebar } from '../../contexts/SidebarContext.tsx';
import { logout } from '../../store/auth/authThunk.ts';



// Constants for sidebar width
const EXPANDED_WIDTH = 260;
const COLLAPSED_WIDTH = 72;

const SidebarDrawer = styled(Drawer)<{ isCollapsed?: boolean }>(({ isCollapsed, theme }) => ({
  width: isCollapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH,
  flexShrink: 0,
  transition: 'width 0.3s ease',
  '& .MuiDrawer-paper': {
    width: isCollapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '0 20px 20px 0',
    border: 'none',
    boxShadow: theme.palette.mode === 'dark' 
      ? '0 4px 20px rgba(0, 0, 0, 0.5)' 
      : '0 4px 20px rgba(0, 0, 0, 0.05)',
    overflowX: 'hidden',
    transition: 'width 0.3s ease',
    height: 'calc(100% - 32px)',
    margin: '31px 0 4px 0px',
  },
  ml:10
}));

const StyledListItemButton = styled(ListItemButton)<{ 
  active: number; 
  isCollapsed?: boolean;
}>(({ active, isCollapsed, theme }) => ({
  margin: '8px 12px',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: isCollapsed ? 'center' : 'flex-start',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' 
      ? 'rgba(147, 51, 234, 0.04)' 
      : 'rgba(147, 51, 234, 0.04)',
  },
  ...(active && {
    backgroundColor: theme.palette.mode === 'dark' 
      ? 'rgba(147, 51, 234, 0.08)' 
      : 'rgba(147, 51, 234, 0.08)',
    '&:hover': {
      backgroundColor: theme.palette.mode === 'dark' 
        ? 'rgba(147, 51, 234, 0.12)' 
        : 'rgba(147, 51, 234, 0.12)',
    },
    '& svg': {
      color: theme.palette.primary.main,
    }
  }),
}));

const menuItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: LayoutDashboard,
    path: routes.dashboard.path,
  },
  {
    id: 'explore',
    title: 'Explore',
    icon: FolderArchive, // Replace with a better icon if needed
    path: routes.explore.path,
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: Settings,
    path: routes.settings.path,
  },
];
interface SidebarProps {
  open: boolean;
  onClose: () => void;
  variant?: 'permanent' | 'temporary';
}

const Sidebar: React.FC<SidebarProps> = ({ 
  open, 
  onClose, 
  variant = 'permanent'
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const { isCollapsed, toggleSidebar } = useSidebar();
  
  // Add a variable to check if we're in dark mode
  const isDarkMode = theme.palette.mode === 'dark';

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  };

  const handleItemClick = (item: any) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    
    if (hasSubItems) {
      setExpandedItem(expandedItem === item.id ? null : item.id);
    } else if (item.path) {
      navigate(item.path);
      if (isMobile) {
        onClose();
      }
    }
  };

  const renderMenuItem = (item: any) => {
    const isActive = location.pathname === item.path;
    const isExpanded = expandedItem === item.id;
    const hasSubItems = item.subItems && item.subItems.length > 0;
  
    return (
      <React.Fragment key={item.id}>
        <ListItem disablePadding >
          {isCollapsed ? (
            <Tooltip title={item.title} placement="right">
              <StyledListItemButton
                active={isActive ? 1 : 0}
                isCollapsed={isCollapsed}
                onClick={() => handleItemClick(item)}
              >
                <ListItemIcon sx={{ 
                  minWidth: 'auto',
                  color: isActive ? 'primary.main' : 'text.secondary',
                  justifyContent: 'center',
                }}>
                  <item.icon size={20} />
                </ListItemIcon>
              </StyledListItemButton>
            </Tooltip>
          ) : (
            <StyledListItemButton
              active={isActive ? 1 : 0}
              isCollapsed={isCollapsed}
              onClick={() => handleItemClick(item)}
            >
              <ListItemIcon sx={{ 
                minWidth: 40,
                color: isActive ? 'primary.main' : 'text.secondary'
              }}>
                <item.icon size={20} />
              </ListItemIcon>
              <ListItemText 
                primary={
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.primary', // Use theme's text color instead of hardcoded white
                      fontWeight: isActive ? 500 : 400,
                      fontSize: '14px',
                    }}
                  >
                    {item.title}
                  </Typography>
                } 
              />
              {hasSubItems && (
                <Box sx={{ ml: 'auto' }}>
                  {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </Box>
              )}
            </StyledListItemButton>
          )}
        </ListItem>
        
        {hasSubItems && !isCollapsed && (
          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.subItems.map((subItem: any) => {
                const isSubActive = location.pathname === subItem.path;
                return (
                  <ListItem key={subItem.id} disablePadding>
                    <StyledListItemButton
                      active={isSubActive ? 1 : 0}
                      isCollapsed={isCollapsed}
                      onClick={() => handleItemClick(subItem)}
                      sx={{ ml: 2 }}
                    >
                      <ListItemIcon sx={{ 
                        minWidth: 40,
                        color: isSubActive ? 'primary.main' : 'text.secondary'
                      }}>
                        <subItem.icon size={18} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: 'text.primary', // Use theme's text color
                              fontWeight: isSubActive ? 500 : 400,
                              fontSize: '14px',
                            }}
                          >
                            {subItem.title}
                          </Typography>
                        }
                      />
                    </StyledListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    );
  };

  const sidebarContent = (
    <>
      {/* Logo Section with Toggle Button */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '16px',
        mt: 6
      }}>
        {/* Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
           src={isDarkMode ? "/skylark-logo.png" : "/skylarklab_logo_for_light.png"}
            alt="Skylark Logo"
            style={{ height: 30, width: 30 }}
          />
          {!isCollapsed && (
            <Typography
              variant="h6"
              sx={{
                ml: 1.5,
                fontWeight: 300,
                color: 'text.primary', // Use theme's text color
              }}
            >
              SKYLARK LABS
            </Typography>
          )}
        </Box>

        {/* Toggle Button */}
        {!isMobile && (
          <IconButton
            onClick={toggleSidebar}
            size="small"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            sx={{
              width: 24,
              height: 24,
              color: 'text.primary', // Use theme's text color
              '&:hover': {
                backgroundColor: 'action.hover'
              }
            }}
          >
            {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        )}
      </Box>

      {/* Menu Items */}
      <List sx={{ px: isCollapsed ? 1 : 0 }}>
        {menuItems.map(renderMenuItem)}
      </List>

      {/* Bottom Section with Logout Button */}
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTop: `1px solid ${theme.palette.divider}`,
        pt: 2,
        pb: 2
      }}>
        {/* Logout Button */}
        <Box sx={{ px: isCollapsed ? 1 : 2 }}>
          {isCollapsed ? (
            <Tooltip title="Logout" placement="right">
              <StyledListItemButton
                active={0}
                isCollapsed={isCollapsed}
                onClick={handleLogout}
              >
                <ListItemIcon sx={{ minWidth: 'auto', color: 'text.secondary' }}>
                  <LogOut size={20} />
                </ListItemIcon>
              </StyledListItemButton>
            </Tooltip>
          ) : (
            <StyledListItemButton
              active={0}
              onClick={handleLogout}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'text.secondary' }}>
                <LogOut size={20} />
              </ListItemIcon>
              <ListItemText 
                primary={
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.primary', // Use theme's text color
                      fontSize: '14px'
                    }}
                  >
                    Logout
                  </Typography>
                }
              />
            </StyledListItemButton>
          )}
        </Box>
      </Box>
    </>
  );

  if (variant === 'temporary') {
    return (
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: EXPANDED_WIDTH, // Always use expanded width for mobile drawer
            backgroundColor: theme.palette.background.paper,
            borderRadius: '0 20px 20px 0',
            boxShadow: theme.palette.mode === 'dark' 
              ? '0 4px 20px rgba(0, 0, 0, 0.5)' 
              : '0 4px 20px rgba(0, 0, 0, 0.05)',
            transition: 'width 0.3s ease',
            height: '100%',
          },
        }}
      >
        {sidebarContent}
      </Drawer>
    );
  }

  return (
    <SidebarDrawer 
      variant="permanent" 
      isCollapsed={isCollapsed}
      open={open}
    >
      {sidebarContent}
    </SidebarDrawer>
  );
};

export default Sidebar;