import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { Logo, RouteLink } from '../header';

const useStyle = makeStyles(() => ({
  appBar: {
    boxShadow: 'none',
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

  return (
    <AppBar color='transparent' className={styles.appBar} position='static'>
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
  );
}
