import { makeStyles } from '@material-ui/core';

export default function useStyles(cb) {
  return makeStyles(cb());
}
