import React from 'react';
import { Card, CardContent, Typography, Stack, Chip, Box, Button, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Shield, Zap, Crown } from 'lucide-react';

const EnhancedSubBundleCard = ({ subBundle, onSelect, getTierChipColor, getMinPrice, index = 0 }) => {
  const getPackageIcon = (name) => {
    if (name.toLowerCase().includes('hospital')) return <Shield size={24} />;
    if (name.toLowerCase().includes('pharmaceutical')) return <Zap size={24} />;
    if (name.toLowerCase().includes('medical')) return <Crown size={24} />;
    return <Shield size={24} />;
  };

  const getTierGradient = (tierName) => {
    const name = tierName.toLowerCase();
    if (name.includes('core')) return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    if (name.includes('plus')) return 'linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)';
    if (name.includes('max')) return 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
    return 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)';
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -12,
      scale: 1.03,
      transition: { duration: 0.3, ease: "easeInOut" as const }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      style={{ height: '100%' }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
          borderRadius: 4,
          bgcolor: '#1a1a1a',
          border: '1px solid #333',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        }}
        onClick={() => onSelect(subBundle.id)}
      >
        {/* Header with gradient */}
        <Box sx={{
          p: 3,
          background: getTierGradient(subBundle.tires?.[0]?.name || 'core'),
          color: 'white',
          textAlign: 'center',
          position: 'relative'
        }}>
          <Box sx={{ fontSize: '2.5rem', mb: 2 }}>
            {getPackageIcon(subBundle.name)}
          </Box>
          
          <Typography variant="body2" sx={{ opacity: 0.9, mb: 1 }}>
            Premium Security
          </Typography>
          
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
            {subBundle.name.replace(' Package', '').replace(' Suite', '')}
          </Typography>
          
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            {subBundle.tires?.length || 0} tiers available
          </Typography>
        </Box>

        <CardContent sx={{
          flexGrow: 1,
          bgcolor: '#1a1a1a',
          color: 'white',
          p: 3,
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Pricing Display */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" color="#aaa" sx={{ mb: 1 }}>
              Starting from
            </Typography>
            <Typography variant="h3" fontWeight="bold" color="white" sx={{ mb: 1 }}>
              {getMinPrice(subBundle.tires)}
            </Typography>
            <Typography variant="body2" color="#aaa">
              per month
            </Typography>
          </Box>

          <Divider sx={{ bgcolor: '#333', mb: 3 }} />

          {/* Tier Pills */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" fontWeight="bold" color="white" sx={{ mb: 2 }}>
              Available Tiers
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {subBundle.tires && subBundle.tires.map((tier, idx) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  <Chip
                    label={tier.name}
                    size="small"
                    sx={{
                      bgcolor: getTierChipColor(tier.name) === 'primary' ? '#2196f3' : 
                               getTierChipColor(tier.name) === 'secondary' ? '#9c27b0' : '#f44336',
                      color: 'white',
                      borderRadius: '16px',
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      mb: 1
                    }}
                  />
                </motion.div>
              ))}
            </Stack>
          </Box>

          {/* Features Preview */}
          <Box sx={{ mb: 3, flexGrow: 1 }}>
            <Typography variant="subtitle2" fontWeight="bold" color="white" sx={{ mb: 2 }}>
              Key Features
            </Typography>
            <Stack spacing={1}>
              {subBundle.tires?.[0]?.features?.slice(0, 3).map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <Check size={16} color="#4ade80" style={{ marginTop: 2, flexShrink: 0 }} />
                    <Typography variant="body2" color="#ccc" sx={{ fontSize: '0.875rem' }}>
                      {feature}
                    </Typography>
                  </Box>
                </motion.div>
              )) || (
                <Typography variant="body2" color="#888" sx={{ fontStyle: 'italic' }}>
                  Multiple security features included
                </Typography>
              )}
              {subBundle.tires?.[0]?.features?.length > 3 && (
                <Typography variant="body2" color="#4ade80" sx={{ fontSize: '0.875rem', ml: 3 }}>
                  +{subBundle.tires[0].features.length - 3} more features
                </Typography>
              )}
            </Stack>
          </Box>

          {/* Action Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              fullWidth
              variant="contained"
              endIcon={<ArrowRight size={18} />}
              sx={{
                bgcolor: '#9c27b0',
                borderRadius: 3,
                py: 1.5,
                fontWeight: 'bold',
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': {
                  bgcolor: '#7b1fa2'
                }
              }}
            >
              View All Tiers
            </Button>
          </motion.div>

          {/* Footer text */}
          <Typography variant="caption" sx={{ 
            color: '#888', 
            mt: 2, 
            textAlign: 'center',
            fontSize: '0.75rem',
            lineHeight: 1.3
          }}>
            Starting from {getMinPrice(subBundle.tires)}, then standard pricing. 
            30-day free trial available.
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EnhancedSubBundleCard;