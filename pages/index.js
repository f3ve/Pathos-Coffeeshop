import { makeStyles, Typography, Grid, Container } from '@material-ui/core';
import { MainLayout } from '../layouts';
import Image from 'next/image';
import { Border } from '../components/global';
import interior from '../public/interior.png';
import cheers from '../public/cheers.png';
import pastries from '../public/pastries.png';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    marginBottom: '40px',
  },

  imageContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },

  smallImages: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20px',
  },
}));

export default function Home() {
  const styles = useStyles();
  return (
    <MainLayout>
      <Container className={styles.root} maxWidth='false'>
        <Typography variant='h3' className={styles.header}>
          Come have a cup with us
        </Typography>
        <Border width='800px' maxWidth='80%' marginBottom='15px' />
        <Border width='800px' maxWidth='80%' marginBottom='50px' />
        <Grid container justifyContent='center' spacing={4}>
          <Grid item>
            <Image src={interior} />
          </Grid>
          <Grid item>
            <Grid container direction='column' spacing={2}>
              <Grid item>
                <Image src={pastries} />
              </Grid>
              <Grid item>
                <Image src={cheers} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
}
