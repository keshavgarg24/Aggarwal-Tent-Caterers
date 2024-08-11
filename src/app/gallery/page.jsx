// app/gallery/page.js

import Image from 'next/image';

const GalleryPage = () => {
  // Cloudinary image URLs
  const imageUrls = [
    'https://res.cloudinary.com/dxhmdb3i7/image/upload/v1723384329/IMG-20231226-WA0029_dungby.jpg',
    'https://res.cloudinary.com/dxhmdb3i7/image/upload/v1723384320/IMG_20240811_185951_zbxglt.jpg',
    'https://res.cloudinary.com/dxhmdb3i7/image/upload/v1723384320/1_zz9mtz.png',
    'https://res.cloudinary.com/dxhmdb3i7/image/upload/v1723384320/IMG_20240811_190030_n71jby.jpg',
    'https://res.cloudinary.com/dxhmdb3i7/image/upload/v1723384320/IMG_20240811_190341_swcogs.jpg',
    'https://res.cloudinary.com/dxhmdb3i7/image/upload/v1723384320/IMG_20240811_185826_lsgmfg.jpg',
    'https://res.cloudinary.com/dxhmdb3i7/image/upload/v1723384329/IMG-20231226-WA0060_wlfys7.jpg',
    'https://res.cloudinary.com/dxhmdb3i7/image/upload/v1723384328/IMG-20231226-WA0085_dfjz9b.jpg',
    'https://res.cloudinary.com/dxhmdb3i7/image/upload/v1723384320/IMG_20240811_185848_jz12t4.jpg',
    'https://res.cloudinary.com/dxhmdb3i7/image/upload/v1723384320/IMG_20240811_185924_z5gpj5.jpg',
    'https://res.cloudinary.com/dxhmdb3i7/image/upload/v1723384319/IMG_20240811_190124_oyshin.jpg',
    'https://res.cloudinary.com/dxhmdb3i7/image/upload/v1723384319/51fdbd6a3229c53803a82f95f79c57c1_p0jpa0.jpg',
    'https://res.cloudinary.com/dxhmdb3i7/image/upload/v1723384319/IMG_20240811_190102_pslbki.jpg',
    'https://res.cloudinary.com/dxhmdb3i7/image/upload/v1723384319/Screenshot_2024-08-11-19-14-46-647_com.google.android.googlequicksearchbox-edit_ertisp.jpg',
    'https://res.cloudinary.com/dxhmdb3i7/image/upload/v1723384319/Screenshot_2024-08-11-19-18-55-687_com.google.android.googlequicksearchbox-edit_ks5cep.jpg',
    'https://res.cloudinary.com/dxhmdb3i7/image/upload/v1723384318/catering-services_27088_service_image_gyusxs.jpg',
    'https://res.cloudinary.com/dxhmdb3i7/image/upload/v1723384319/Screenshot_2024-08-11-19-13-46-835_com.google.android.googlequicksearchbox-edit_xhzkb6.jpg',
    'https://res.cloudinary.com/dxhmdb3i7/image/upload/v1723384319/Screenshot_2024-08-11-19-11-45-103_com.google.android.googlequicksearchbox-edit_jgwmci.jpg',
    'https://res.cloudinary.com/dxhmdb3i7/image/upload/v1723384318/Screenshot_2024-08-11-19-20-49-644_com.google.android.googlequicksearchbox-edit_k6tiba.jpg',
    'https://res.cloudinary.com/dxhmdb3i7/image/upload/v1723384318/Screenshot_2024-08-11-19-19-17-382_com.google.android.googlequicksearchbox-edit_nuvilg.jpg'
    // Add more image URLs as needed
  ];

  return (
    <section className="relative bg-[var(--background)] text-[var(--foreground)] py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center border-b-4 border-[var(--accent)] inline-block pb-2">
            Image Gallery
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {imageUrls.map((url, index) => (
            <div key={index} className="relative h-64 w-full">
              <Image 
                src={url} 
                alt={`Gallery Image ${index + 1}`} 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
