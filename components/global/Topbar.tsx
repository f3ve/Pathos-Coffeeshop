import {
  AppBar,
  makeStyles,
  Slide,
  Toolbar,
  useScrollTrigger,
} from '@material-ui/core';
import { Logo, RouteLink } from '../header';

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

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      <AppBar className={styles.appBar} position='fixed'>
        <Toolbar>
          <Logo />
          <div style={{ width: '100%' }} />
          <nav className={styles.nav}>
            <RouteLink href='/menu'>Menu</RouteLink>
            <RouteLink href='/location'>Location</RouteLink>
            <RouteLink href='/ourstory'>Our Story</RouteLink>
          </nav>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}
