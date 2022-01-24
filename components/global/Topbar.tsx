import {
  AppBar,
  makeStyles,
  Slide,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
} from '@material-ui/core';
import * as React from 'react';
import { Logo, MobileDropdown, NavLinks } from '../header';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

const useStyle = makeStyles(() => ({
  appBar: {
    // boxShadow: 'none',
    backgroundColor: 'white',
  },
}));

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Topbar(props: Props) {
  const styles = useStyle();
  const smallScreen = useMediaQuery('(max-width: 600px)');

  return (
    <>
      {/*<Slide appear={false} direction='down' in={!trigger}>*/}
      <ElevationScroll {...props}>
        <AppBar className={styles.appBar} position='fixed'>
          <Toolbar>
            <Logo />
            <div style={{ width: '100%' }} />
            {smallScreen ? <MobileDropdown /> : <NavLinks />}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/*</Slide>*/}
    </>
  );
}
