import {
  AppBar,
  makeStyles,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
} from '@material-ui/core';
import * as React from 'react';
import { Logo, MobileDropdown, NavLinks } from '../header';

interface Props {
  children: React.ReactElement;
}

const useStyle = makeStyles(() => ({
  appBar: {
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

export default function Topbar() {
  const styles = useStyle();
  const smallScreen = useMediaQuery('(max-width: 600px)');

  return (
    <>
      <ElevationScroll>
        <AppBar className={styles.appBar} position='fixed'>
          <Toolbar>
            <Logo />
            <div style={{ width: '100%' }} />
            {smallScreen ? <MobileDropdown /> : <NavLinks />}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
}
