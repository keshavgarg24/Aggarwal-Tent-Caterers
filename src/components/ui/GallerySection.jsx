"use client"; // Ensure this is marked as a client component if it uses client-side features

import Image from 'next/image';
import { Button } from './Button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './carousel'; // Adjust path if needed

const GallerySection = ({ onViewMoreClick }) => {
  return (
    <section id='gallery' className="relative bg-[var(--background)] text-[var(--foreground)] py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 border-b-4 border-[var(--accent)] inline-block pb-2">
            Gallery
          </h2>
        </div>
        <Carousel className="relative">
          <CarouselContent className="relative">
            <CarouselItem className="relative h-64 md:h-80 lg:h-96 flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/dxhmdb3i7/image/upload/v1723384319/51fdbd6a3229c53803a82f95f79c57c1_p0jpa0.jpg"
                alt="Gallery Image 1"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </CarouselItem>
            <CarouselItem className="relative h-64 md:h-80 lg:h-96 flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/dxhmdb3i7/image/upload/v1723384319/Screenshot_2024-08-11-19-18-55-687_com.google.android.googlequicksearchbox-edit_ks5cep.jpg"
                alt="Gallery Image 2"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </CarouselItem>
            <CarouselItem className="relative h-64 md:h-80 lg:h-96 flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/dxhmdb3i7/image/upload/v1723384320/IMG_20240811_185951_zbxglt.jpg"
                alt="Gallery Image 3"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </CarouselItem>
            {/* Add more CarouselItems as needed */}
          </CarouselContent>
          <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="right-4 top-1/2 -translate-y-1/2" />
        </Carousel>
        <div className="text-center mt-8">
          <Button onClick={onViewMoreClick} className="bg-[var(--button-bg)] text-[var(--button-text)]">
            View Full Gallery →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
