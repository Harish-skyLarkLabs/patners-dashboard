import React from 'react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        transition: theme => theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'flex-start' },
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ mb: { xs: 2, sm: 0 } }}>
            <Typography variant="body2" color="text.secondary" align="center">
              © {new Date().getFullYear()} Skylark Labs Patner Portal. All rights reserved.
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <FooterLink>Subscription Plans</FooterLink>
            <FooterLink>Support</FooterLink>
            <FooterLink>API Documentation</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>Terms & Conditions</FooterLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// Reusable footer link component
const FooterLink: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Typography
    component="a"
    href="#"
    variant="body2"
    color="text.secondary"
    sx={{
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        color: 'primary.main',
      },
    }}
  >
    {children}
  </Typography>
);

export default Footer;
