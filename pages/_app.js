import '../styles/globals.css'
import '@fontsource/roboto'
import theme from '../theme'
import {ThemeProvider} from "@material-ui/core";
import {useState} from "react";

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState('light')

  return (
    <ThemeProvider theme={theme(mode)}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
