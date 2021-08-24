import { MainLayout } from '../layouts';
// import { useStyles } from '../hooks';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  heading: {
    marginBottom: 20,
  },
  map: {
    width: '100%',
    height: 400,
    border: 'none',
    boxShadow: '0 2px 10px 3px lightgray',
  },
  contact: {
    marginBottom: 40,
  },
}));

export default function Location() {
  const classes = useStyles();

  return (
    <MainLayout>
      <Container>
        <Grid
          container
          justifyContent='space-evenly'
          className={classes.contact}
        >
          <Grid item>
            <Typography variant='h3' align='center' className={classes.heading}>
              Our Location
            </Typography>
            <Typography variant='body1' align='center' gutterBottom>
              1234, Lorem Ipsum st.
            </Typography>
            <Typography variant='body1' align='center'>
              Lorem, IP 654321
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h3' align='center' className={classes.heading}>
              Hours
            </Typography>
            <Typography align='center' gutterBottom>
              Monday - Friday: 9am - 9pm
            </Typography>
            <Typography align='center' gutterBottom>
              Saturday: 11am - 9pm
            </Typography>
            <Typography align='center'>Sunday: Closed</Typography>
          </Grid>
          <Grid item>
            <Typography variant='h3' align='center' className={classes.heading}>
              Contact Us
            </Typography>
            <Typography align='center' gutterBottom>
              (123) 456-7890
            </Typography>
            <Typography align='center' gutterBottom>
              example@example.com
            </Typography>
          </Grid>
        </Grid>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d497521.13839441346!2d-89.90702583174712!3d34.9950232778141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x887f90074b27dbc5%3A0xabc541eb602a3d26!2s4080%20Kirby%20Pkwy%2C%20Memphis%2C%20TN%2038115!3m2!1d35.0375145!2d-89.84596619999999!5e0!3m2!1sen!2sus!4v1629764240289!5m2!1sen!2sus'
          loading='lazy'
          className={classes.map}
        />
      </Container>
    </MainLayout>
  );
}
