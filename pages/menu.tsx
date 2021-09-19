import Head from 'next/head';
import { makeStyles } from '@material-ui/core';
import { MainLayout } from '../layouts';
import { ImageCarousel, MenuItems } from '../components/menuPage';
import { interior, cheers, sandwich, croissants, pastries } from '../public';

const useStyles = makeStyles(() => ({
  carouselContainer: {
    height: 500,
    marginBottom: 50,
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
    {
      src: pastries,
      legend: 'legend 3',
      alt: 'Pastries',
    },
  ];

  return (
    <MainLayout>
      <Head>Pathos Coffeeshop | Menu</Head>
      <div className={styles.carouselContainer}>
        <ImageCarousel images={images} priority={true} />
      </div>
      <MenuItems />
    </MainLayout>
  );
}
