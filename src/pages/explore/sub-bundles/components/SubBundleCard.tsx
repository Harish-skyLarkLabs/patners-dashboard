import React from 'react';
import { Card, CardContent, Typography, Stack, Chip, Box } from '@mui/material';

const SubBundleCard = ({ subBundle, onSelect, getTierChipColor, getMinPrice }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'all 0.2s',
        '&:hover': {
          boxShadow: (theme) => theme.shadows[8]
        },
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'grey.300',
        borderRadius: 2
      }}
      onClick={() => onSelect(subBundle.id)}
    >
      <CardContent sx={{
        p: 2,
        flexGrow: 1,
        borderBottom: '1px solid',
        borderBottomColor: 'grey.200'
      }}>
        <Typography variant="h6" color="text.primary" gutterBottom>
          {subBundle.name}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 1 }}>
          {subBundle.tires && subBundle.tires.map((tier) => (
            <Chip
              key={tier.id}
              label={tier.name}
              size="small"
              color={getTierChipColor(tier.name)}
              sx={{
                borderRadius: '16px',
                fontSize: '0.75rem',
                mt: 0.5
              }}
            />
          ))}
        </Stack>
      </CardContent>
      <Box sx={{
        px: 2,
        py: 1.5,
        bgcolor: 'grey.700',
        color: 'white',
        fontSize: '0.875rem'
      }}>
        {subBundle.tires ? (
          <>
            {subBundle.tires.length} tiers available • Starting from {getMinPrice(subBundle.tires)}
          </>
        ) : (
          'No tiers available'
        )}
      </Box>
    </Card>
  );
};

export default SubBundleCard;