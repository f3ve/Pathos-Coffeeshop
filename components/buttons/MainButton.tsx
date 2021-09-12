import { Button } from '@material-ui/core';
import { Props } from 'next/script';

interface MainButtonProps extends Props {
  href: string;
  className: string;
  classes: object;
}

export default function MainButton(props: MainButtonProps) {
  return (
    <Button
      href={props.href}
      className={props.className}
      variant='outlined'
      classes={{ ...props.classes }}
    >
      {props.children}
    </Button>
  );
}
