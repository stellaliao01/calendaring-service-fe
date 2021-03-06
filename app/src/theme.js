import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#249be5',
    },
    secondary: {
      main: '#fff',
    },
  },
  typography: {
    body2: {
      fontFamily: 'Times New Roman',
      fontSize: '1.1rem',
    },
  },
  textarea: {
    border: '1px solid red'
  },
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: '#FFC0CB',
      },
    },
    MuiInputLabel: {
      root: {
        backgroundColor: 'yellow',
      },
    },
    MuiIcon: {
      root: {
        height: '3rem',
        width: '3rem',
        color: '#249be5',
      },
    },
  },
});
