import { Container, makeStyles } from '@material-ui/core';
import { MainLayout } from '../layouts';
import { PCarousel } from '../components/menuPage';
import { interior, cheers, pastries, sandwich, croissants } from '../public';

const useStyles = makeStyles(() => ({
  carouselContainer: {
    height: 500,
  },
}));

export default function Menu() {
  const styles = useStyles();

  const images = [
    {
      src: interior,
      legend: 'Legend 1',
      alt: 'Our interior',
    },
    {
      src: cheers,
      legend: 'Legend 2',
      alt: 'cheers',
    },
    // {
    //   src: pastries,
    //   legend: 'Legend 3',
    //   alt: 'Our pastries',
    // },
    {
      src: sandwich,
      legend: 'Legend 4',
      alt: 'A sandwich',
    },
    {
      src: croissants,
      legend: 'Legend 5',
      alt: 'Croissants',
    },
  ];

  return (
    <MainLayout>
      <div className={styles.carouselContainer}>
        <PCarousel images={images} />
      </div>

      <p>Menu</p>
    </MainLayout>
  );
}
