import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
  Badge,
  Divider,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material';
import {
  Menu as MenuIcon,
  LogOut,
  Settings,
  Bell,
  Clock,
  ShoppingCart,
  Heart,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/index.tsx';
import { getCurrentDateTime } from '../../utils/helper.ts';

interface HeaderProps {
  showSidebarToggle?: boolean;
  onMobileMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  showSidebarToggle = true,
  onMobileMenuClick
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [anchorElNotifications, setAnchorElNotifications] = useState<null | HTMLElement>(null);
  const [currentTime, setCurrentTime] = useState<string>(getCurrentDateTime());

  // Removed dark theme toggle state

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentDateTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate(routes.login.path);
  };

  const user = {
    name: 'Admin',
    avatar: '',
  };

  // Mock cart and wishlist counts - replace with actual state from your app
  const cartItemsCount = 5;
  const wishlistItemsCount = 2;
  
  // Navigation handlers for cart and wishlist
  const navigateToCart = () => {
    navigate(routes.cart.path);
  };
  
  const navigateToWishlist = () => {
    navigate(routes.wishlist.path);
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1, bgcolor: 'background.paper', color: 'text.primary' }}>
      <Toolbar>
        {showSidebarToggle && isMobile && (
          <IconButton onClick={onMobileMenuClick} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/skylark-logo-purple.png"
            alt="Logo"
            style={{ height: 40, width: 40, marginRight: 12 }}
          />
          <Typography variant="h6" noWrap fontWeight="bold">
            Partner Portal
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Chip
          icon={<Clock size={16} />}
          label={currentTime}
          variant="outlined"
          sx={{ display: { xs: 'none', sm: 'flex' }, height: 32, mr: 2 }}
        />

        {/* Added Wishlist Icon with Badge */}
        <Tooltip title="Wishlist">
          <IconButton sx={{ mr: 1 }} onClick={navigateToWishlist}>
            <Badge badgeContent={wishlistItemsCount} color="secondary">
              <Heart size={20} />
            </Badge>
          </IconButton>
        </Tooltip>

        {/* Added Cart Icon with Badge */}
        <Tooltip title="Shopping Cart">
          <IconButton sx={{ mr: 1 }} onClick={navigateToCart}>
            <Badge badgeContent={cartItemsCount} color="primary">
              <ShoppingCart size={20} />
            </Badge>
          </IconButton>
        </Tooltip>

        <Tooltip title="Notifications">
          <IconButton onClick={(e) => setAnchorElNotifications(e.currentTarget)}>
            <Badge badgeContent={3} color="primary">
              <Bell size={20} />
            </Badge>
          </IconButton>
        </Tooltip>

        <Menu
          anchorEl={anchorElNotifications}
          open={Boolean(anchorElNotifications)}
          onClose={() => setAnchorElNotifications(null)}
        >
          <MenuItem>
            <Typography variant="body2">New subscription created</Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="body2">Payment received</Typography>
          </MenuItem>
          <Divider />
          <MenuItem>
            <Typography variant="body2" sx={{ textAlign: 'center', width: '100%' }}>
              View all
            </Typography>
          </MenuItem>
        </Menu>

        <Box sx={{ ml: 2 }}>
          <Tooltip title="Account">
            <IconButton onClick={(e) => setAnchorElUser(e.currentTarget)}>
              <Avatar sx={{ bgcolor: 'primary.main' }}>{user.name.charAt(0)}</Avatar>
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={() => setAnchorElUser(null)}
          >
            <MenuItem>
              <ListItemIcon><Settings size={18} /></ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon><LogOut size={18} /></ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;