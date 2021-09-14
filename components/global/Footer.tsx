import Link from 'next/link';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  footer: {
    minHeight: 60,
    background: '#C4C4C4',
    marginTop: 8,
  },
}));

export default function Footer() {
  const styles = useStyles();
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className={styles.footer}>
      <Container maxWidth='xl'>
        <Grid
          container
          justifyContent='space-evenly'
          style={{ paddingTop: 20 }}
        >
          <Grid item>
            <Typography variant='caption' color='textSecondary'>
              Designed and built by{' '}
              <a
                style={{ textDecoration: 'underline' }}
                href='https://freedomevenden.com'
              >
                Freedom Evenden
              </a>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='caption' color='textSecondary'>
              View code on{' '}
              <a
                href='https://github.com/f3ve/Pathos-Coffeeshop'
                style={{ textDecoration: 'underline' }}
              >
                GitHub
              </a>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='caption' color='textSecondary'>
              &copy;{year} - Freedom Evenden All Rights Reserved
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
