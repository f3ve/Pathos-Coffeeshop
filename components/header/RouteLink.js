import Link from 'next/link';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core';

const useSyles = makeStyles(() => ({
  link: {
    fontSize: '50px',
    fontFamily: 'Poiret One',
    fontWeight: '500',
    transition: 'font-size 0.3s ease-in',
  },
  smLink: {
    fontSize: '30px',
    fontFamily: 'Poiret One',
    fontWeight: '500',
    transition: 'font-size 0.3s ease-in',
  },
}));

export default function RouteLink(props) {
  const style = useSyles();
  const router = useRouter();
  const className = router.pathname === '/' ? style.link : style.smLink;

  return (
    <Link href={props.href}>
      <a className={className}>{props.children}</a>
    </Link>
  );
}
