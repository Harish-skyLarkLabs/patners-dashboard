import { PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    video: {
      background: string;
      player: string;
      overlay: string;
      gradient: string;
      liveBackground: string;
      liveText: string;
      controlsColor: string;
    };
    alert: {
      background: string;
      hoverBackground: string;
      infoDetail: string;
    };
    dialog: {
      background: string;
      paper: string;
      border: string;
      inputBackground: string;
      previewBackground: string;
    };
    location: {
      cardBackground: string;
      cardBorder: string;
      cardHoverBorder: string;
      divider: string;
      iconBackground: string;
    };
    building: {
      pageBackground: string;
      cardBackground: string;
      cardBorder: string;
      cardHoverBorder: string;
      iconContainerBackground: string;
      inputBackground: string;
      floorCardBackground: string;
      floorCardBorder: string;
    };
    devices: {
      buildingCard?: {
        background?: string;
        backgroundHover?: string;
        border?: string;
      }
    };
    camera: {
      formBackground: string;
      inputBackground: string;
      inputBorder: string;
      sectionDivider: string;
      previewBorder: string;
      previewBackground: string;
      previewPlaceholderBackground: string;
      iconButtonBackground: string;
      iconButtonHover: string;
      videoOverlayGradient: string;
    };
    dashboardContainer:any
  }

  interface PaletteOptions {
    video?: {
      background?: string;
      player?: string;
      overlay?: string;
      gradient?: string;
      liveBackground?: string;
      liveText?: string;
      controlsColor?: string;
    };
    alert?: {
      background?: string;
      hoverBackground?: string;
      infoDetail?: string;
    };
    dialog?: {
      background?: string;
      paper?: string;
      border?: string;
      inputBackground?: string;
      previewBackground?: string;
    };
    location?: {
      cardBackground?: string;
      cardBorder?: string;
      cardHoverBorder?: string;
      divider?: string;
      iconBackground?: string;
    };
    building: {
      pageBackground: string;
      cardBackground: string;
      cardBorder: string;
      cardHoverBorder: string;
      iconContainerBackground: string;
      inputBackground: string;
      floorCardBackground: string;
      floorCardBorder: string;
    };
    devices?: {
      buildingCard?: {
        background?: string;
        backgroundHover?: string;
        border?: string;
      }
    };
    camera?: {
      formBackground?: string;
      inputBackground?: string;
      inputBorder?: string;
      sectionDivider?: string;
      previewBorder?: string;
      previewBackground?: string;
      previewPlaceholderBackground?: string;
      iconButtonBackground?: string;
      iconButtonHover?: string;
      videoOverlayGradient?: string;
    };
    dashboardContainer:any
  }
}

// Shared colors for both themes
const commonColors = {
  primary: {
    main: '#7A73D1',
    light: '#a855f7',
    dark: '#7e22ce',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#3b82f6',
    light: '#60a5fa',
    dark: '#2563eb',
    contrastText: '#ffffff',
  },
  error: {
    main: '#ef4444',
    light: '#f87171',
    dark: '#dc2626',
  },
  warning: {
    main: '#f59e0b',
    light: '#fbbf24',
    dark: '#d97706',
  },
  info: {
    main: '#06b6d4',
    light: '#22d3ee',
    dark: '#0891b2',
  },
  success: {
    main: '#10b981',
    light: '#34d399',
    dark: '#059669',
  },
};


const transparentize = (hexColor: string, alpha: number) => {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Dark mode palette
export const darkModePalette: PaletteOptions = {
  ...commonColors,
  background: {
    default: '#030712', 
    paper: '#111827',   
  },
  text: {
    primary: '#f9fafb',
    secondary: '#9ca3af',
    disabled: '#6b7280',
  },
  divider: 'rgba(107, 114, 128, 0.12)',
  action: {
    active: 'rgba(255, 255, 255, 0.56)',
    hover: 'rgba(255, 255, 255, 0.08)',
    selected: 'rgba(255, 255, 255, 0.16)',
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    focus: 'rgba(255, 255, 255, 0.12)',
  },
  grey: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    A100: '#f3f4f6',
    A200: '#d1d5db',
    A400: '#4b5563',
    A700: '#1f2937',
  },
  video: {
    background: 'rgba(15, 23, 42, 0.6)',
    player: 'rgba(0, 0, 0, 0.7)',
    overlay: 'rgba(15, 23, 42, 0.7)',
    gradient: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
    liveBackground: 'rgba(16, 185, 129, 0.2)',
    liveText: '#10b981',
    controlsColor: '#ffffff'
  },
  alert: {
    background: 'rgba(15, 23, 42, 0.4)',
    hoverBackground: 'rgba(15, 23, 42, 0.6)',
    infoDetail: 'rgba(30, 41, 59, 0.5)'
  },
  dialog: {
    background: '#030712',
    paper: '#111827',
    border: 'rgba(75, 85, 99, 0.3)',
    inputBackground: 'rgba(15, 23, 42, 0.3)',
    previewBackground: 'rgba(15, 23, 42, 0.3)'
  },
  location: {
    cardBackground: '#111827',
    cardBorder: 'rgba(75, 85, 99, 0.3)',
    cardHoverBorder: 'rgba(147, 51, 234, 0.5)',
    divider: 'rgba(75, 85, 99, 0.3)',
    iconBackground: transparentize('#9333ea', 0.1)
  },
  building: {
    pageBackground: '#0f172a',
    cardBackground: '#111827',
    cardBorder: 'rgba(75, 85, 99, 0.3)',
    cardHoverBorder: 'rgba(147, 51, 234, 0.5)',
    iconContainerBackground: '#0f172a',
    inputBackground: 'rgba(15, 23, 42, 0.3)',
    floorCardBackground: '#111827',
    floorCardBorder: 'rgba(75, 85, 99, 0.3)'
  },
  devices: {
    buildingCard: {
      background: 'rgba(15, 23, 42, 0.6)',
      backgroundHover: 'rgba(15, 23, 42, 0.8)',
      border: 'rgba(75, 85, 99, 0.3)'
    }
  },
  camera: {
    formBackground: 'transparent',
    inputBackground: 'rgba(15, 23, 42, 0.3)',
    inputBorder: 'rgba(75, 85, 99, 0.3)',
    sectionDivider: 'rgba(255, 255, 255, 0.1)',
    previewBorder: 'rgba(75, 85, 99, 0.4)',
    previewBackground: 'rgba(0, 0, 0, 0.2)',
    previewPlaceholderBackground: 'transparent',
    iconButtonBackground: 'rgba(15, 23, 42, 0.3)',
    iconButtonHover: 'rgba(15, 23, 42, 0.5)',
    videoOverlayGradient: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)'
  },
  dashboardContainer:{
    containerBackground:'radial-gradient(72.99% 100% at 50% 0%, rgba(46, 163, 255, 0.09) 0%, rgba(46, 163, 255, 0) 78.65%, rgba(46, 163, 255, 0) 100%)'
  }
};

// Light mode palette
export const lightModePalette: PaletteOptions = {
  ...commonColors,
  background: {
    default: '#f9fafb',
    paper: '#ffffff',
  },
  text: {
    primary: '#111827',
    secondary: '#4b5563',
    disabled: '#9ca3af',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    selected: 'rgba(0, 0, 0, 0.08)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    focus: 'rgba(0, 0, 0, 0.12)',
  },
  grey: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    A100: '#f3f4f6',
    A200: '#e5e7eb',
    A400: '#6b7280',
    A700: '#374151',
  },
  video: {
    background: 'rgba(241, 245, 249, 0.8)',
    player: 'rgba(226, 232, 240, 0.8)',
    overlay: 'rgba(241, 245, 249, 0.85)',
    gradient: 'linear-gradient(to top, rgba(15,23,42,0.7) 0%, rgba(15,23,42,0) 100%)',
    liveBackground: 'rgba(16, 185, 129, 0.15)',
    liveText: '#10b981',
    controlsColor: '#1f2937'
  },
  alert: {
    background: 'rgba(241, 245, 249, 0.6)',
    hoverBackground: 'rgba(226, 232, 240, 0.8)',
    infoDetail: 'rgba(226, 232, 240, 0.6)'
  },
  dialog: {
    background: '#f9fafb',
    paper: '#ffffff',
    border: 'rgba(203, 213, 225, 0.5)',
    inputBackground: 'rgba(241, 245, 249, 0.5)',
    previewBackground: 'rgba(241, 245, 249, 0.7)'
  },
  location: {
    cardBackground: '#ffffff',
    cardBorder: 'rgba(226, 232, 240, 0.7)',
    cardHoverBorder: 'rgba(147, 51, 234, 0.4)',
    divider: 'rgba(226, 232, 240, 0.7)',
    iconBackground: transparentize('#9333ea', 0.08)
  },
  building: {
    pageBackground: '#f8fafc',
    cardBackground: '#ffffff',
    cardBorder: 'rgba(226, 232, 240, 0.7)',
    cardHoverBorder: 'rgba(147, 51, 234, 0.4)',
    iconContainerBackground: '#f1f5f9',
    inputBackground: 'rgba(241, 245, 249, 0.5)',
    floorCardBackground: '#ffffff',
    floorCardBorder: 'rgba(226, 232, 240, 0.7)'
  },
  devices: {
    buildingCard: {
      background: 'rgba(241, 245, 249, 0.6)',
      backgroundHover: 'rgba(241, 245, 249, 0.8)',
      border: 'rgba(226, 232, 240, 0.7)'
    }
  },
  camera: {
    formBackground: 'transparent',
    inputBackground: 'rgba(241, 245, 249, 0.5)',
    inputBorder: 'rgba(203, 213, 225, 0.5)',
    sectionDivider: 'rgba(0, 0, 0, 0.1)',
    previewBorder: 'rgba(203, 213, 225, 0.7)',
    previewBackground: 'rgba(241, 245, 249, 0.3)',
    previewPlaceholderBackground: 'rgba(241, 245, 249, 0.5)',
    iconButtonBackground: 'rgba(241, 245, 249, 0.7)',
    iconButtonHover: 'rgba(241, 245, 249, 0.9)',
    videoOverlayGradient: 'linear-gradient(to top, rgba(15,23,42,0.7) 0%, rgba(15,23,42,0) 100%)'
  },
  dashboardContainer:{
    containerBackground: "radial-gradient(72.99% 100% at 50% 0%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 50.52%, rgba(255, 255, 255, 0) 100%)",
  }
};