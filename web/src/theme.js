import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // can be switched dynamically later
    primary: {
      main: '#1976d2', // blue
    },
    secondary: {
      main: '#9c27b0', // purple
    },
    background: {
      default: '#f4f6f8',
    },
  },
  typography: {
    fontFamily: ['"Roboto"', 'sans-serif'].join(','),
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
