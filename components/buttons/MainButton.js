import { Button } from '@material-ui/core';

export default function MainButton(props) {
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
