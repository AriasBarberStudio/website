'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppointmentModal from '@/components/AppointmentModal';

const people = [
  {
    name: 'Aria Roz',
    role: 'Founder',
    description: 'An expert of the craft with years of expertise, Aria sculpts hairstyles with a touch of refined finesse that stand the test of time.',
    imageUrl: '/Barbers/Aria/2.jpeg',
  },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAppointmentsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleConfirmBooking = () => {
    window.location.href = "https://squareup.com/appointments/book/q51mj1w3o8fqor/6FDCF5YS0F45W/start";
  };

  return (
    <div className="bg-rich-black">
      <Navbar />

      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            willChange: 'transform',
          }}
        >
          <Image
            src="/Background/3.jpeg"
            alt="Barbershop interior"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div 
            className="max-w-4xl"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
              opacity: 1 - scrollY / 500,
            }}
          >
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold text-cream mb-6 tracking-tight">
              Arias Barber Studio
            </h1>
            <p className="text-xl sm:text-2xl text-cream/90 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              Your trusted barber in the heart of Verdun
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleAppointmentsClick}
                className="group relative px-8 py-4 bg-gradient-gold text-black font-semibold rounded-full text-lg shadow-2xl hover:shadow-barber-gold/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Book Your Appointment
                <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </button>
              <a
                href="#about"
                className="px-8 py-4 border-2 border-barber-gold text-cream font-semibold rounded-full text-lg hover:bg-barber-gold/10 transition-all duration-300 w-full sm:w-auto"
              >
                Learn More
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-cream/80">
              <a 
                href="https://www.google.com/search?sca_esv=35a3b6627eae767b&sxsrf=ANbL-n4pkW81AfHy6mEL_GP72ey3e6yLPA:1769484349822&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOdo2bQVPH8YqUv1Xc6vjAyFk2vChaVBjhRdnTwFfsh7scBClHO_1cIFVdAHsNhapnm5S4TBsjLdET2rlEDbQ6tM35WoQ&q=Arias+Reviews&sa=X&ved=2ahUKEwiLke3w4qqSAxVdtIkEHf2gMbsQ0bkNegQIIxAH&biw=1728&bih=935&dpr=2&aic=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
              >
                <span className="text-barber-gold text-2xl">★★★★★</span>
                <span className="text-sm">50+ Google Reviews</span>
              </a>
              <div className="hidden sm:block w-px h-6 bg-cream/30"></div>
              <div className="text-sm">By Appointment</div>
              <div className="hidden sm:block w-px h-6 bg-cream/30"></div>
              <div className="text-sm">Premium Quality</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-10 h-10 text-barber-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(90deg)' }}>
            <circle cx="6" cy="6" r="3"/>
            <circle cx="6" cy="18" r="3"/>
            <line x1="20" y1="4" x2="8.12" y2="15.88"/>
            <line x1="14.47" y1="14.48" x2="20" y2="20"/>
            <line x1="8.12" y1="8.12" x2="12" y2="12"/>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 sm:py-32 bg-black">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream mb-6">
              The Art of the Perfect Cut
            </h2>
            <p className="text-lg leading-8 text-cream/70">
              Every haircut at Arias is more than just a service, it's an experience. We take the time to understand your style, lifestyle, and vision to deliver results that look great today and grow out naturally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-barber-gold mb-3">Expert Technique</h3>
              <p className="text-cream/60 text-sm leading-relaxed">Years of training in classic and contemporary cutting methods</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-barber-gold mb-3">Personal Service</h3>
              <p className="text-cream/60 text-sm leading-relaxed">One-on-one attention in a comfortable, relaxed environment</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-barber-gold mb-3">Quality Products</h3>
              <p className="text-cream/60 text-sm leading-relaxed">Premium grooming products that enhance and maintain your look</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 sm:py-32 bg-rich-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-barber-gold mb-6">
              Meet Your Barber
            </h2>
            <p className="text-lg text-cream/70 max-w-2xl mx-auto">
              At Arias Barber Studio, we deliver personalized grooming experiences with professionalism, attention to detail, and exceptional customer service.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {people.map((person) => (
              <div key={person.name} className="group">
                <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-barber-gold/10 to-transparent rounded-3xl p-8 border border-barber-gold/20 hover:border-barber-gold/40 transition-all duration-500">
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src={person.imageUrl}
                      alt={person.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      quality={95}
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-bold text-cream mb-2">{person.name}</h3>
                    <p className="text-barber-gold font-semibold mb-6 text-lg">{person.role}</p>
                    <p className="text-cream/80 leading-relaxed text-lg">{person.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmBooking}
      />
    </div>
  );
}
