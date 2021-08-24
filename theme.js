import { createTheme } from '@material-ui/core/styles';

export default function theme() {
  return createTheme({
    palette: {
      type: 'light',
    },
    overrides: {
      MuiTypography: {
        body1: {
          fontFamily: 'Josefin Slab',
          whiteSpace: 'pre-line',
        },
        body2: {
          fontFamily: 'Josefine Slab',
        },
      },
    },
  });
}
