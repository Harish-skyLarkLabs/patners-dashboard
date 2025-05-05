import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { Feature } from "../Login.tsx";
import FeatureCard from "./FeatureCard.tsx";
import { ArrowRight } from "lucide-react";

interface FeatureShowcaseProps {
  features: Feature[];
}

const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({ features }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isLightMode = theme.palette.mode === "light";

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "50%" },
        bgcolor: theme.palette.background.paper,
        display: { xs: isMobile ? "none" : "flex", md: "flex" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: isLightMode ? 0.7 : 0.8,
          pointerEvents: "none",
          backgroundImage: isLightMode
            ? 'url("/subscription-bg-light.jpg")'
            : 'url("/subscription-bg-dark.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(0px)",
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundColor: isLightMode
              ? "rgba(255, 255, 255, 0.2)"
              : "rgba(15, 19, 25, 0.5)",
            zIndex: 1,
          },
        }}
      />
      <Container
        maxWidth="sm"
        sx={{
          py: { xs: 4, sm: 6, md: 8 },
          px: { xs: 2, sm: 4 },
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            variant={isMobile ? "h5" : "h4"}
            fontWeight="bold"
            gutterBottom
            color="text.primary"
          >
            Subscription Management Platform
          </Typography>
          <Typography
            variant={isMobile ? "body2" : "body1"}
            color="text.primary"
            sx={{ fontSize: 18, fontWeight: "medium", mb: 4 }}
          >
            Simplify your subscription management with our powerful platform
          </Typography>
          
          <Button 
            variant="contained" 
            color="primary"
            endIcon={<ArrowRight size={16} />}
            sx={{ 
              mb: 6, 
              px: 4,
              py: 1.5, 
              borderRadius: 2,
              fontSize: 16, 
              display: { xs: 'none', sm: 'inline-flex' } 
            }}
          >
            Take a Tour
          </Button>
        </Box>
        
        <Stack spacing={{ xs: 2, md: 3 }}>
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </Stack>
        
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ mb: 2 }}
          >
            Trusted by leading organizations worldwide
          </Typography>
          
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 4,
              filter: isLightMode ? 'grayscale(1) opacity(0.7)' : 'grayscale(1) opacity(0.5)',
              '& img': {
                height: 40,
                width: 'auto'
              }
            }}
          >
            {/* Placeholder for company logos */}
            <Box sx={{ width: 80, height: 30, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 1 }} />
            <Box sx={{ width: 80, height: 30, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 1 }} />
            <Box sx={{ width: 80, height: 30, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 1 }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FeatureShowcase;