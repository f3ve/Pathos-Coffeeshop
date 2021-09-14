import Image from 'next/image';
import { Props } from 'next/script';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core';

interface CarouselProps extends Props {
  images: { src: StaticImageData; legend: string; alt: string }[];
  showArrows?: boolean;
  centerMode?: boolean;
  dynamicHeight?: boolean;
  labels?: boolean;
  infiniteLoop?: boolean;
  height?: number;
  autoPlay?: boolean;
}

const useStyles = makeStyles(() => ({
  img: {
    backgroundPosition: 'bottom',
  },
}));

export default function PCarousel({
  images,
  showArrows = true,
  centerMode = true,
  dynamicHeight = false,
  infiniteLoop = true,
  height = 500,
  autoPlay = true,
}: CarouselProps) {
  const styles = useStyles();

  return (
    <Carousel
      swipeable={true}
      showArrows={showArrows}
      centerMode={centerMode}
      dynamicHeight={dynamicHeight}
      infiniteLoop={infiniteLoop}
      centerSlidePercentage={65}
      autoPlay={autoPlay}
    >
      {images.map((image, index) => (
        <div key={index} style={{ height, position: 'relative' }}>
          <Image
            src={image.src}
            alt={image.alt}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            className={styles.img}
          />
        </div>
      ))}
    </Carousel>
  );
}
