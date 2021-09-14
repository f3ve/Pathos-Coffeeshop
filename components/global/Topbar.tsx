import {
  AppBar,
  Drawer,
  IconButton,
  makeStyles,
  Slide,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Logo, RouteLink } from '../header';
import { useState } from 'react';

const useStyle = makeStyles(() => ({
  appBar: {
    boxShadow: 'none',
    backgroundColor: 'white',
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '600px',
    maxWidth: '100%',
  },
}));

export default function Topbar() {
  const styles = useStyle();
  const trigger = useScrollTrigger();
  const smallScreen = useMediaQuery('(max-width: 600px)');
  const [open, setOpen] = useState(false);

  function toggleDrawer(val?: boolean) {
    if (val !== undefined) {
      setOpen(val);
    } else {
      setOpen(!open);
    }
  }

  return (
    <>
      <Slide appear={false} direction='down' in={!trigger}>
        <AppBar className={styles.appBar} position='fixed'>
          <Toolbar>
            <Logo />
            <div style={{ width: '100%' }} />
            {!smallScreen ? (
              <>
                <nav className={styles.nav}>
                  <RouteLink href='/menu'>Menu</RouteLink>
                  <RouteLink href='/location'>Location</RouteLink>
                  <RouteLink href='/ourstory' style={{ wordWrap: 'unset' }}>
                    Our Story
                  </RouteLink>
                </nav>
              </>
            ) : (
              <IconButton onClick={() => toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </Slide>
      <Drawer anchor='top' open={open} onClose={() => toggleDrawer()}>
        <RouteLink href='/menu'>Menu</RouteLink>
        <RouteLink href='/location'>Location</RouteLink>
        <RouteLink href='/ourstory' style={{ wordWrap: 'unset' }}>
          Our Story
        </RouteLink>
      </Drawer>
    </>
  );
}
