import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Collapse,
  IconButton
} from '@mui/material';
import {
  Check,
  ShoppingCart,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const EnhancedTierCard = ({ 
  tier, 
  isInCart, 
  onAddToCart, 
  onRemoveFromCart,
  getTierColor,
  getTierIcon,
  getTierDescription,
  theme
}) => {
  const formatPrice = (price) => {
    if (!price) return '$29';
    const numericPrice = price.toString().replace(/[^0-9.]/g, '');
    const parsedPrice = parseFloat(numericPrice);
    if (isNaN(parsedPrice)) return '$29';
    return `$${Math.floor(parsedPrice)}`;
  };

  const getTierLabel = (tierName) => {
    return tierName.toUpperCase(); // Keep original names: CORE, PLUS, MAX
  };

  const [expanded, setExpanded] = useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card 
        sx={{
          bgcolor: '#1a1a1a',
          border: '1px solid #333',
          borderRadius: 3,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          minHeight: 'fit-content',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          }
        }}
      >
        {/* Header Section */}
        <Box sx={{ p: 3, pb: 2 }}>
          <Typography 
            variant="overline" 
            sx={{ 
              color: '#888',
              fontWeight: 'bold',
              letterSpacing: 1
            }}
          >
            {getTierLabel(tier.name)}
          </Typography>
          
          <Stack direction="row" alignItems="baseline" spacing={1} sx={{ mb: 2 }}>
            <Typography 
              variant="h2" 
              fontWeight="bold" 
              color="white"
            >
              {formatPrice(tier.price)}
            </Typography>
            <Typography variant="body2" color="#888">
              /month
            </Typography>
          </Stack>

          <Typography variant="body2" color="#bbb" sx={{ mb: 3 }}>
            {tier.name.includes('Core') && 'Essential security features for small teams'}
            {tier.name.includes('Plus') && 'Advanced protection with enhanced features'}
            {tier.name.includes('Max') && 'Complete enterprise security solution'}
          </Typography>
        </Box>

        {/* Features Section */}
        <CardContent sx={{ pt: 0, pb: 2 }}>
          <Typography 
            variant="subtitle2" 
            fontWeight="bold" 
            color="white" 
            sx={{ mb: 2 }}
          >
            FEATURES
          </Typography>
          
          <List dense sx={{ p: 0 }}>
            {tier.features && tier.features.slice(0, 4).map((feature, idx) => (
              <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <Check size={14} color="#4caf50" />
                </ListItemIcon>
                <ListItemText 
                  primary={feature}
                  primaryTypographyProps={{
                    variant: 'body2',
                    color: '#ccc',
                    fontSize: '0.875rem'
                  }}
                />
              </ListItem>
            ))}
            
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <List dense sx={{ p: 0 }}>
                {tier.features && tier.features.slice(4).map((feature, idx) => (
                  <ListItem key={idx + 4} sx={{ px: 0, py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 24 }}>
                      <Check size={14} color="#4caf50" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={feature}
                      primaryTypographyProps={{
                        variant: 'body2',
                        color: '#ccc',
                        fontSize: '0.875rem'
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Collapse>
            
            {tier.features && tier.features.length > 4 && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                <Button
                  size="small"
                  onClick={handleExpandClick}
                  endIcon={expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  sx={{
                    color: '#9c27b0',
                    textTransform: 'none',
                    fontSize: '0.75rem',
                    fontWeight: 'medium'
                  }}
                >
                  {expanded ? 'Show Less' : `Show ${tier.features.length - 4} More Features`}
                </Button>
              </Box>
            )}
          </List>
        </CardContent>

        {/* Action Button */}
        <Box sx={{ p: 3, pt: 1 }}>
          {isInCart ? (
            <Button
              fullWidth
              variant="outlined"
              onClick={() => onRemoveFromCart(tier.id)}
              sx={{
                borderColor: '#f44336',
                color: '#f44336',
                borderRadius: 2,
                py: 1.5,
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: '0.875rem',
                '&:hover': {
                  borderColor: '#d32f2f',
                  bgcolor: 'rgba(244, 67, 54, 0.1)'
                }
              }}
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              fullWidth
              variant="contained"
              startIcon={<ShoppingCart size={16} />}
              onClick={() => onAddToCart(tier)}
              sx={{
                background: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)',
                borderRadius: 2,
                padding: 10,
                py: 1.5,
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: '0.875rem',
                boxShadow: 'none',
                '&:hover': {
                  background: 'linear-gradient(135deg, #7b1fa2 0%, #512da8 100%)',
                  boxShadow: 'none'
                }
              }}
            >
              Add to Cart
            </Button>
          )}
        </Box>
      </Card>
    </Grid>
  );
};

export default EnhancedTierCard;