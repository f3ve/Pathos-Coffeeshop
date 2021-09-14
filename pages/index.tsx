import Image from 'next/image';
import { makeStyles, Typography, Grid, Container } from '@material-ui/core';
import { MainLayout } from '../layouts';
import { Border } from '../components/global';
import { interior, cheers, pastries } from '../public';

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
    maxWidth: 500,
  },

  interiorImage: {
    maxWidth: 800,
  },
}));

export default function Home() {
  const styles = useStyles();
  return (
    <MainLayout>
      <Container className={styles.root} maxWidth='xl'>
        <Typography variant='h3' className={styles.header}>
          Come have a cup with us
        </Typography>
        <Border width='800px' maxWidth='80%' marginBottom='15px' />
        <Border width='800px' maxWidth='80%' marginBottom='50px' />
        <Grid container justifyContent='center' spacing={4}>
          <Grid item className={styles.interiorImage}>
            <Image src={interior} alt='Interior' quality={50} priority />
          </Grid>
          <Grid item>
            <Grid
              container
              direction='column'
              spacing={2}
              className={styles.smallImages}
            >
              <Grid item>
                <Image src={pastries} alt='Pastries' quality={50} priority />
              </Grid>
              <Grid item style={{ position: 'relative' }}>
                <Image
                  src={cheers}
                  alt='Cheers'
                  height='1210'
                  objectFit='cover'
                  quality={50}
                  priority
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
}
