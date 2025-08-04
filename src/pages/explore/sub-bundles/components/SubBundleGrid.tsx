import React from 'react';
import { Grid, Container, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import EnhancedSubBundleCard from './EnhancedSubBundleCard.tsx';
import EmptyState from './EmptyState.tsx';
import { Star, TrendingUp, Shield } from 'lucide-react';

const SubBundleGrid = ({ subBundles, onSubBundleSelect, getTierChipColor, getMinPrice }) => {
  if (!subBundles || subBundles.length === 0) {
    return <EmptyState message="No sub-bundles available for this bundle." />;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <Container maxWidth="xl">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h3" 
              fontWeight="bold" 
              color="white" 
              sx={{ mb: 2 }}
            >
              Choose Your Security Plan
            </Typography>
            <Typography 
              variant="h6" 
              color="#bbb" 
              sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}
            >
              Select the perfect security package that matches your healthcare facility's needs. 
              Each package offers multiple tiers with advanced AI-powered protection.
            </Typography>
            
            {/* Feature highlights */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 4, 
              flexWrap: 'wrap',
              mb: 4 
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Star size={20} color="#9c27b0" />
                <Typography variant="body2" color="#ccc">
                  Premium Features
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <TrendingUp size={20} color="#4ade80" />
                <Typography variant="body2" color="#ccc">
                  AI-Powered Analytics
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Shield size={20} color="#60a5fa" />
                <Typography variant="body2" color="#ccc">
                  24/7 Security Monitoring
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* Cards Grid */}
        <Grid container spacing={4} sx={{ pb: 4 }}>
          {subBundles.map((subBundle, index) => (
            <Grid item xs={12} sm={6} md={4} key={subBundle.id}>
              <EnhancedSubBundleCard 
                subBundle={subBundle}
                onSelect={onSubBundleSelect}
                getTierChipColor={getTierChipColor}
                getMinPrice={getMinPrice}
                index={index}
              />
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Box sx={{ 
            textAlign: 'center', 
            mt: 6, 
            p: 4, 
            borderRadius: 4,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white'
          }}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
              Need Help Choosing the Right Plan?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
              Our security experts are here to help you find the perfect solution for your healthcare facility.
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              ✨ 30-day free trial • 🔒 HIPAA compliant • 🚀 Instant deployment • 📞 24/7 support
            </Typography>
          </Box>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default SubBundleGrid;