'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const images = [
  '/website/Cuts/0.jpeg',
  '/website/Cuts/1.jpeg',
  '/website/Cuts/2.jpeg',
  '/website/Cuts/3.jpeg',
  '/website/Cuts/4.jpeg',
  '/website/Cuts/5.jpeg',
  '/website/Cuts/6.jpeg',
  '/website/Cuts/7.jpeg',
  '/website/Cuts/8.jpeg',
  '/website/Cuts/9.jpeg',
  '/website/Cuts/10.jpeg',
  '/website/Cuts/11.jpeg',
  '/website/Cuts/12.jpeg',
  '/website/Cuts/13.jpeg',
  '/website/Cuts/14.jpeg',
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  return (
    <div className="min-h-screen bg-rich-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-cream mb-6">
            Our Work
          </h1>
          <p className="text-xl text-cream/70 max-w-2xl mx-auto">
            Explore our portfolio of precision cuts and timeless styles. Each haircut tells a story of craftsmanship and dedication.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-barber-gold/10 to-transparent border border-barber-gold/20 hover:border-barber-gold/60 transition-all duration-300"
              >
                <Image
                  src={src}
                  alt={`Haircut example ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-cream font-semibold">View Full Size</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 z-50 p-2 rounded-full bg-barber-gold/20 text-cream hover:bg-barber-gold/40 transition-colors"
            aria-label="Close"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-6 z-50 p-4 rounded-full bg-barber-gold/20 text-cream hover:bg-barber-gold/40 transition-all hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeftIcon className="h-8 w-8" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-6 z-50 p-4 rounded-full bg-barber-gold/20 text-cream hover:bg-barber-gold/40 transition-all hover:scale-110"
            aria-label="Next"
          >
            <ChevronRightIcon className="h-8 w-8" />
          </button>

          <div className="relative w-full h-full max-w-6xl max-h-[90vh] p-8">
            <Image
              src={images[selectedImage]}
              alt={`Haircut ${selectedImage + 1}`}
              fill
              className="object-contain"
              quality={100}
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/70">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
