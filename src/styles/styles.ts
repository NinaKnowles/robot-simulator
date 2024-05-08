import { createTheme } from '@mui/material/styles';

const customButtonTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white',
          backgroundColor: 'black',
          borderRadius: 0,
          '&:hover': {
            backgroundColor: 'grey',
          },
          '&:active': {
            backgroundColor: 'grey',
          },
        },
      },
    },
  },
});

export default customButtonTheme;
