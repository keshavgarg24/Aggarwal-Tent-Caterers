"use client";

import HeroSection from "@/components/ui/HeroSection";
import ServicesSection from "@/components/ui/ServicesSection";
import GallerySection from "@/components/ui/GallerySection";
import AboutUsSection from "@/components/ui/AboutUsSection";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleViewMoreClick = () => {
    router.push('/gallery'); // Redirect to the full gallery page
  };

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <GallerySection onViewMoreClick={handleViewMoreClick} />
      <AboutUsSection />
    </>
  );
}
