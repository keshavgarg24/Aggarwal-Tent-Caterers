"use client"; // Ensure this is marked as a client component if it uses client-side features

import { useState } from 'react';

const ServicesSection = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id='services' className='relative bg-[var(--background)] text-[var(--foreground)] py-16' style={styles.section}>
      <div style={styles.container}>
      <div className="flex justify-center mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center border-b-4 border-[var(--accent)] inline-block pb-2">
          Our Services
        </h2>
      </div>
        <h3 style={styles.subHeading}>
          Specialist in: Pipe Pandal and Outdoor Catering
        </h3>
        <div style={styles.grid}>
          {[
            { 
              title: "Tent House", 
              info: "Our Tent House service provides a variety of high-quality tents suitable for weddings, parties, and large gatherings.",
              image: "url('/images/s1.png')" 
            },
            { 
              title: "Tent Services", 
              info: "Tent Services includes setup, maintenance, and management to ensure your event runs smoothly.",
              image: "url('/images/s2.png')" 
            },
            { 
              title: "Pure Veg Catering Services", 
              info: "Our Pure Veg Catering Services offer a range of vegetarian options, from appetizers to main courses.",
              image: "url('/images/s3.png')" 
            },
            { 
              title: "Religious Decor", 
              info: "We provide decor services for religious ceremonies, including floral arrangements, banners, and more.",
              image: "url('/images/s4.png')" 
            },
            { 
              title: "Wedding Decor", 
              info: "Our Wedding Decor services include everything from table settings to elaborate stage decorations.",
              image: "url('/images/s5.png')" 
            },
            { 
              title: "Birthday Decor", 
              info: "Celebrate birthdays with our vibrant and fun decorations tailored to your theme and preferences.",
              image: "url('/images/s6.png')"
            },
          ].map((service, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                ...(flippedIndex === index ? styles.flippedCard : {}),
              }}
              onClick={() => handleFlip(index)}
              onMouseEnter={() => handleFlip(index)}
              onMouseLeave={() => flippedIndex === index && handleFlip(index)}
            >
              <div style={{ ...styles.cardInner, ...(flippedIndex === index ? styles.flippedCardInner : {}) }}>
                <div style={styles.front}>
                  <div style={{ ...styles.backgroundImage, backgroundImage: service.image, opacity: flippedIndex === index ? '0.1' : '0.5' }} />
                  {flippedIndex !== index && <h3 style={styles.cardTitle}>{service.title}</h3>}
                </div>
                <div style={styles.back}>
                  <div style={{ ...styles.backgroundImage, backgroundImage: service.image, opacity: '0.1' }} />
                  <p style={styles.cardInfo}>{service.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  heading: {
    fontSize: '3.5rem',
    fontWeight: '900',
    textAlign: 'center',
  },
  subHeading: {
    fontSize: '1.5rem',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#555',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '2rem',
  },
  card: {
    position: 'relative',
    width: '100%',
    height: '15rem',
    perspective: '1000px',
  },
  cardInner: {
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s ease, box-shadow 0.3s ease',
    transformStyle: 'preserve-3d',
  },
  flippedCardInner: {
    transform: 'rotateY(180deg)',
  },
  front: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Ensure background color is consistent
    borderRadius: '0.5rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    overflow: 'hidden',
    color: '#333',
    textAlign: 'center',
  },
  back: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Ensure background color is consistent
    borderRadius: '0.5rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    color: '#333',
    textAlign: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    zIndex: 1,
  },
  cardInfo: {
    fontSize: '1rem',
    padding: '1rem',
  },
  flippedCard: {
    cursor: 'pointer',
  },
};

export default ServicesSection;
