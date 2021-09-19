import Image from 'next/image';
import {
  makeStyles,
  Typography,
  Grid,
  Container,
  useMediaQuery,
} from '@material-ui/core';
import { MainLayout } from '../layouts';
import { Border } from '../components/global';
import { interior, cheers, pastries } from '../public';
import Head from 'next/head';

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

  smallScreen: {
    maxWidth: 800,
  },

  interiorImage: {
    maxWidth: 800,
  },
}));

export default function Home() {
  const styles = useStyles();
  const smallScreen = useMediaQuery('(max-width: 704px)');
  const pictureWrap = useMediaQuery('(max-width: 1333px)');

  return (
    <MainLayout>
      <Head>
        <title>Pathos Coffeeshop</title>
      </Head>
      <Container
        className={styles.root}
        maxWidth='xl'
        style={{ marginBottom: pictureWrap ? 50 : 0 }}
      >
        <Typography
          variant={smallScreen ? 'h4' : 'h3'}
          className={styles.header}
          align='center'
        >
          Come have a cup with us
        </Typography>
        <Border width='800px' maxWidth='80%' marginBottom='15px' />
        <Border width='800px' maxWidth='80%' marginBottom='50px' />
        <Grid container justifyContent='center' spacing={4}>
          <Grid item className={styles.interiorImage}>
            <Image
              src={interior}
              alt='Interior'
              quality={50}
              priority
              placeholder='blur'
            />
          </Grid>
          <Grid item>
            <Grid
              container
              direction='column'
              spacing={2}
              className={pictureWrap ? styles.smallScreen : styles.smallImages}
            >
              <Grid item>
                <Image
                  priority
                  src={pastries}
                  alt='Pastries'
                  height='1212'
                  objectFit='cover'
                  quality={50}
                  placeholder='blur'
                />
              </Grid>
              <Grid item style={{ position: 'relative' }}>
                <Image
                  priority
                  src={cheers}
                  alt='Cheers'
                  height='1212'
                  objectFit='cover'
                  quality={50}
                  placeholder='blur'
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
}
