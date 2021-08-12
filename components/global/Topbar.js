import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const useStyle = makeStyles(() => ({
  appBar: {
    boxShadow: 'none',
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  link: {
    fontSize: '50px',
    fontFamily: 'Poiret One',
    fontWeight: '500',
    transition: 'all 0.3s',
  },
  smaller: {
    fontSize: '30px',
    fontFamily: 'Poiret One',
    fontWeight: '500',
    transition: 'all 0.3s',
  },
}));

export default function Topbar() {
  const styles = useStyle();
  const router = useRouter();

  return (
    <AppBar color='transparent' className={styles.appBar} position='static'>
      <Toolbar>
        <Link href='/'>
          <a style={{ width: '50%' }}>
            <Image
              src='/logo.png'
              alt='yeet'
              width={router.pathname === '/' ? '200' : '100'}
              height={router.pathname === '/' ? '200' : '100'}
              className={styles.image}
            />
          </a>
        </Link>
        <nav className={styles.nav}>
          <Link href='/menu'>
            <a
              className={router.pathname === '/' ? styles.link : styles.smaller}
            >
              Menu
            </a>
          </Link>
          <Link href='/location'>
            <a
              className={router.pathname === '/' ? styles.link : styles.smaller}
            >
              Location
            </a>
          </Link>
          <Link href='/ourstory'>
            <a
              className={router.pathname === '/' ? styles.link : styles.smaller}
            >
              Our Story
            </a>
          </Link>
        </nav>
        <div style={{ width: '50%' }}></div>
      </Toolbar>
    </AppBar>
  );
}
