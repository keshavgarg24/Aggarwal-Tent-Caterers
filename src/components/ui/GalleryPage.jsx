import Image from 'next/image';

const GalleryPage = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Full Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative h-64">
            <Image src="/images/gallery1.jpg" alt="Gallery Image 1" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <div className="relative h-64">
            <Image src="/images/gallery2.jpg" alt="Gallery Image 2" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <div className="relative h-64">
            <Image src="/images/gallery3.jpg" alt="Gallery Image 3" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          {/* Add more gallery images here */}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
