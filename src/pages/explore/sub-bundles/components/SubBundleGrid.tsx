import React from 'react';
import { Grid } from '@mui/material';
import SubBundleCard from './SubBundleCard.tsx';
import EmptyState from './EmptyState.tsx';

const SubBundleGrid = ({ subBundles, onSubBundleSelect, getTierChipColor, getMinPrice }) => {
  if (!subBundles || subBundles.length === 0) {
    return <EmptyState message="No sub-bundles available for this bundle." />;
  }

  return (
    <Grid container spacing={3} sx={{ pb: 2 }}>
      {subBundles.map((subBundle) => (
        <Grid item xs={12} sm={6} md={3} key={subBundle.id}>
          <SubBundleCard 
            subBundle={subBundle}
            onSelect={onSubBundleSelect}
            getTierChipColor={getTierChipColor}
            getMinPrice={getMinPrice}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default SubBundleGrid;