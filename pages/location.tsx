import { MainLayout } from '../layouts';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { Border } from '../components/global';
import Head from 'next/head';

const useStyles = makeStyles(() => ({
  map: {
    width: '100%',
    height: 400,
    border: 'none',
    marginBottom: 50,
  },
  contact: {
    marginBottom: 40,
  },
}));

export default function Location() {
  const classes = useStyles();

  const info = [
    {
      header: 'Location',
      body: '1234, Lorem Ipsum st.\nLorem, IP 654321',
    },
    {
      header: 'Hours',
      body: 'Monday - Friday: 9am - 9pm\nSaturday: 11am - 9pm\nSunday: Closed',
    },
    {
      header: 'Contact',
      body: '(123) 456-7890\nexample@example.com',
    },
  ];

  return (
    <MainLayout>
      <Head>
        <title>Pathos Coffeshop | Location</title>
      </Head>
      <Container>
        <Grid
          container
          justifyContent='space-evenly'
          className={classes.contact}
        >
          {info.map((item, index) => (
            <Grid item key={`item-${index}`} alignContent='center'>
              <Typography variant='h3' align='center'>
                {item.header}
              </Typography>
              <Border width={250} maxWidth={250} marginBottom={20} />
              <Typography variant='body1' align='center' gutterBottom>
                {item.body}
              </Typography>
            </Grid>
          ))}
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
