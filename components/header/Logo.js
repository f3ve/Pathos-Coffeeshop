import { makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png';

const useStyles = makeStyles(() => ({
  img: {
    width: 200,
    transition: 'height 0.3s ease-in, width 0.3s ease-in',
  },
  smImg: {
    width: 100,
    transition: 'height 0.3s ease-in, width 0.3s ease-in',
  },
}));

export default function Logo({ style }) {
  const styles = useStyles();
  const router = useRouter();

  const className = router.pathname === '/' ? styles.img : styles.smImg;

  return (
    <Link href='/'>
      <a style={style}>
        <div className={className}>
          <Image src={logo} alt='Logo of example restaurant' />
        </div>
      </a>
    </Link>
  );
}
