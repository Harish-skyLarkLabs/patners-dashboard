import React from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { ArrowLeft } from 'lucide-react';

const TierHeader = ({ bundle, subBundle, onBackClick, isDarkMode }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
      <IconButton
        onClick={onBackClick}
        sx={{ mr: 2, bgcolor: isDarkMode ? 'grey.700' : 'grey.100' }}
      >
        <ArrowLeft size={20} />
      </IconButton>
      <Box>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="h5" fontWeight="bold" color="text.primary">
            {bundle.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            /
          </Typography>
          <Typography variant="h5" fontWeight="bold" color="text.primary">
            {subBundle.name}
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          Choose the tier that best fits your needs
        </Typography>
      </Box>
    </Box>
  );
};

export default TierHeader;