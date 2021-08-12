import '../styles/globals.css';
import '@fontsource/roboto';
import '@fontsource/poiret-one';
import '@fontsource/josefin-slab';
import theme from '../theme';
import { ThemeProvider } from '@material-ui/core';
import { Topbar } from '../components/global';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme()}>
      <Topbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
