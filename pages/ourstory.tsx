import Image from 'next/image';
import { MainLayout } from '../layouts';
import { cook, barista } from '../public';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { Border } from '../components/global';

const useStyles = makeStyles(() => ({
  imageContainer: {
    height: 300,
    width: 300,
    position: 'relative',
    marginTop: 40,
    boxShadow: '0 5px 10px gray',
    marginBottom: 40,
  },
}));

export default function OurStory() {
  const styles = useStyles();
  return (
    <MainLayout>
      <Container>
        <Grid
          container
          xs={12}
          justifyContent='space-evenly'
          style={{ marginBottom: 50 }}
          wrap='wrap'
        >
          <Grid item className={styles.imageContainer}>
            <Image src={cook} layout='fill' objectFit='cover' priority />
          </Grid>
          <Grid item md={6}>
            <Typography variant='h4' gutterBottom>
              Nam Sagittis
            </Typography>
            <Border width={'100%'} marginBottom={20} />
            <Typography>
              Nam sagittis elit sit amet nunc semper, et consequat eros maximus.
              Quisque dignissim metus sit amet odio rhoncus dictum. Donec
              vestibulum augue a nulla fringilla, feugiat convallis odio tempus.
              Curabitur fringilla erat vitae est scelerisque, et viverra tellus
              gravida. Suspendisse sagittis ex ligula, eu interdum enim posuere
              non. Etiam ultricies nunc velit, sed pretium urna rhoncus id.
              Pellentesque sed lobortis sapien. Maecenas iaculis, erat et
              posuere pharetra, est ligula iaculis lorem, ut aliquam justo neque
              eget urna. Mauris tempor orci ac risus porttitor, at convallis
              turpis fringilla.
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent='space-evenly' wrap='wrap-reverse'>
          <Grid item md={6}>
            <Typography variant='h4' gutterBottom>
              Nam Sagittis
            </Typography>
            <Border width={'100%'} marginBottom={20} />
            <Typography style={{ marginBottom: 50 }}>
              Nam sagittis elit sit amet nunc semper, et consequat eros maximus.
              Quisque dignissim metus sit amet odio rhoncus dictum. Donec
              vestibulum augue a nulla fringilla, feugiat convallis odio tempus.
              Curabitur fringilla erat vitae est scelerisque, et viverra tellus
              gravida. Suspendisse sagittis ex ligula, eu interdum enim posuere
              non. Etiam ultricies nunc velit, sed pretium urna rhoncus id.
              Pellentesque sed lobortis sapien. Maecenas iaculis, erat et
              posuere pharetra, est ligula iaculis lorem, ut aliquam justo neque
              eget urna. Mauris tempor orci ac risus porttitor, at convallis
              turpis fringilla.
            </Typography>
          </Grid>
          <Grid item className={styles.imageContainer}>
            <Image src={barista} layout='fill' objectFit='cover' priority />
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
}
