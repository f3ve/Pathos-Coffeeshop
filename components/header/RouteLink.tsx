import Link from 'next/link';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core';
import colors from '../../styles/colors';
import { Props } from 'next/script';

interface RouteLinkProps extends Props {
  href: string;
}

const useStyles = makeStyles(() => ({
  link: {
    fontSize: '30px',
    fontFamily: 'Josefin Slab',
    transition: 'font-size 0.3s ease-in, color 0.3s ease-in',
    margin: '0 10px',
    color: colors.textDark,
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

export default function RouteLink({ href, children }: RouteLinkProps) {
  const styles = useStyles();
  const router = useRouter();

  const active = router.pathname === href ? ` ${styles.active}` : '';
  const activeUnderline =
    router.pathname === href ? ` ${styles.activeUnderline}` : '';

  return (
    <div>
      <Link href={href}>
        <a className={`${styles.link}${active} `}>{children}</a>
      </Link>
      <div className={`${styles.underline}${activeUnderline}`} />
    </div>
  );
}
