import '../styles/globals.css';
import '@fontsource/roboto';
import '@fontsource/poiret-one';
import '@fontsource/josefin-slab';
import theme from '../theme';
import { ThemeProvider } from '@material-ui/core';
import { Topbar } from '../components/global';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme()}>
      <Topbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
