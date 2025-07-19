export const theme = {
  colors: {
    primary: '#6853FF',
    primaryLight: '#8A79FF',
    secondary: '#FF6E7F',
    accent: '#FF9676',
    dark: '#121212',
    darkSurface: '#1E1E1E',
    darkSurface2: '#2A2A2A',
    gray: {
      800: '#333333',
      700: '#444444',
      600: '#666666',
      400: '#999999',
      300: '#BBBBBB',
      200: '#DDDDDD',
    },
    white: '#FFFFFF',
  },
  spacing: {
    section: '50px',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px',
  },
  borderRadius: {
    small: '8px',
    medium: '12px',
    large: '16px',
  },
  shadows: {
    small: '0px 6px 15px rgba(104, 83, 255, 0.3)',
    medium: '0px 8px 16px rgba(0, 0, 0, 0.2)',
    large: '0px 15px 30px rgba(0, 0, 0, 0.3)',
  },
};

export type Theme = typeof theme;