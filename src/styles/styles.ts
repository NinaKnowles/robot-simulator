import { Paper } from '@mui/material';
import { createTheme, styled } from '@mui/material/styles';

export const customButtonTheme = createTheme({
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

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: 90,
  width: 90,
}));