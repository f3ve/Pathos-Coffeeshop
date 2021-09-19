import { RouteLink } from './index';
import { makeStyles } from '@material-ui/core';
import { Routes } from '../../constants';

const useStyle = makeStyles(() => ({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '600px',
    maxWidth: '100%',
  },
}));

export default function NavLinks() {
  const styles = useStyle();

  const routes = Routes.filter((route) => route.text !== 'Home');

  return (
    <nav className={styles.nav}>
      {routes.map((route, index) => (
        <RouteLink href={route.href} key={`route-${index}`}>
          {route.text}
        </RouteLink>
      ))}
    </nav>
  );
}
