import { MainLayout } from '../layouts';
import { PCarousel } from '../components/menuPage';
import interior from '../public/interior.png';
import cheers from '../public/cheers.png';
import pastries from '../public/pastries.png';
import { Container } from '@material-ui/core';

export default function Menu() {
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
      src: pastries,
      legend: 'Legend 3',
      alt: 'Our pastries',
    },
  ];

  return (
    <MainLayout>
      <Container maxWidth='sm'>
        <PCarousel images={images} />
      </Container>

      <p>Menu</p>
    </MainLayout>
  );
}
