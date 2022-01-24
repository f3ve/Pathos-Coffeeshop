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
        <link rel='icon' href='/logo.png' />
        {/* Twitter meta tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Pathos Coffeeshop' />
        <meta name='twitter:site' content='@f3veDev' />
        <meta name='twitter:creator' content='@f3veDev' />
        <meta
          name='twitter:description'
          content='Sample restaurant site built using TypeScript, NextJS, and Material-UI'
        />
        <meta
          name='twitter:image'
          content='https://pathos-coffeeshop.vercel.app/preview.png'
        />
        {/* End twitter meta tags */}

        <meta
          name='description'
          content='Sample restaurant site built using TypeScript, NextJS, and Material-UI'
        />
        <meta
          name='google-site-verification'
          content='Lp9a1YPrBv963HrvdTAhuI1-nyyOZq1nNVRqA8lC1ao'
        />
        <meta
          property='og:image'
          content='https://pathos-coffeeshop.vercel.app/preview.png'
        />
        <meta property='og:title' content='Pathos Coffeeshop' />
        <meta
          property='og:description'
          content='Sample restaurant site built using TypeScript, NextJS, and Material-UI'
        />
      </Head>
      <Container
        className={styles.root}
        maxWidth='lg'
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
          <Grid item className={styles.interiorImage} xs={12} md={6}>
            <Image
              src={interior}
              alt='Interior'
              quality={50}
              priority
              placeholder='blur'
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              direction='column'
              className={pictureWrap ? styles.smallScreen : styles.smallImages}
              justifyContent='space-between'
              spacing={1}
            >
              <Grid item>
                <Image
                  priority
                  src={pastries}
                  alt='Pastries'
                  height='1190'
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
                  height='1190'
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
