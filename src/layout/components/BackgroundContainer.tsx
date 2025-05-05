import React from 'react';
import { Box, useTheme } from '@mui/material';

const BackgroundContainer = ({ children }) => {
  const theme = useTheme();
  
  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.100',
        p: 2,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 
            'radial-gradient(circle at 20% 35%, rgba(76, 29, 149, 0.15) 0%, transparent 50%), ' +
            'radial-gradient(circle at 75% 65%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
          zIndex: 0
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          height: '300px',
          width: '300px',
          border: '50px solid rgba(99, 102, 241, 0.08)',
          borderRadius: '50%',
          top: '-100px',
          right: '-100px',
          zIndex: 0
        }
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundContainer;
