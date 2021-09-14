import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Image from 'next/image';
import { Props } from 'next/script';

interface CarouselProps extends Props {
  images: { src: StaticImageData; legend: string; alt: string }[];
}

export default function PCarousel({ images }: CarouselProps) {
  return (
    <Carousel>
      {images.map((image, index) => (
        <div key={index}>
          <Image src={image.src} alt={image.alt} />
        </div>
      ))}
    </Carousel>
  );
}
