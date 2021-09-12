import Link from 'next/link';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core';
import colors from '../../styles/colors';

const useStyles = makeStyles(() => ({
  link: {
    fontSize: '30px',
    fontFamily: 'Josefin Slab',
    fontWeight: '500',
    transition: 'font-size 0.3s ease-in, color 0.3s ease-in',
    margin: '0 10px',
  },

  active: {
    color: colors.primary,
  },

  underline: {
    width: 0,
    borderBottom: `2px solid ${colors.primary}`,
    transition: 'width 0.3s',
  },

  activeUnderline: {
    width: '100%',
  },
}));

export default function RouteLink(props) {
  const styles = useStyles();
  const router = useRouter();

  const active = router.pathname === props.href ? ` ${styles.active}` : '';
  const activeUnderline =
    router.pathname === props.href ? ` ${styles.activeUnderline}` : '';

  return (
    <div>
      <Link href={props.href}>
        <a className={`${styles.link}${active}`}>{props.children}</a>
      </Link>
      <div className={`${styles.underline}${activeUnderline}`} />
    </div>
  );
}
