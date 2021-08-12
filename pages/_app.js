import '../styles/globals.css';
import '@fontsource/roboto';
import '@fontsource/poiret-one';
import '@fontsource/josefin-slab';
import theme from '../theme';
import { ThemeProvider } from '@material-ui/core';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme()}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
