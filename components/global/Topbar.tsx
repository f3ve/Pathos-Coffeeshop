import {
  AppBar,
  makeStyles,
  Slide,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
} from '@material-ui/core';
import { Logo, MobileDropdown, NavLinks } from '../header';

const useStyle = makeStyles(() => ({
  appBar: {
    boxShadow: 'none',
    backgroundColor: 'white',
  },
}));

export default function Topbar() {
  const styles = useStyle();
  const trigger = useScrollTrigger();
  const smallScreen = useMediaQuery('(max-width: 600px)');

  return (
    <>
      <Slide appear={false} direction='down' in={!trigger}>
        <AppBar className={styles.appBar} position='fixed'>
          <Toolbar>
            <Logo />
            <div style={{ width: '100%' }} />
            {smallScreen ? <MobileDropdown /> : <NavLinks />}
          </Toolbar>
        </AppBar>
      </Slide>
    </>
  );
}
