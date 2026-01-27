'use client';
import React from 'react';
import Image from 'next/image';
import { MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { businessHours, businessAddress } from '@/config/businessInfo';

// const PHONE_NUMBER = '438-920-0655';

export default function Contact() {
  return (
    <div className="min-h-screen bg-rich-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-cream mb-6">
            Visit Us
          </h1>
          <p className="text-xl text-cream/70 max-w-2xl mx-auto">
            Located in the heart of Verdun, we're ready to craft your perfect look. Stop by or book an appointment today.
          </p>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="relative aspect-square lg:aspect-auto rounded-2xl overflow-hidden border-2 border-barber-gold/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.5548549218283!2d-73.5788322237263!3d45.45862567107388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9105fdf690bd9%3A0xe48c7479982cda43!2s4605%20Rue%20Bannantyne%2C%20Montreal%2C%20QC%20H4G%201E4!5e0!3m2!1sen!2sca!4v1700281421453!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Address */}
              <div className="group p-8 bg-gradient-to-br from-barber-gold/10 to-transparent rounded-2xl border border-barber-gold/20 hover:border-barber-gold/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-barber-gold/20 rounded-full group-hover:bg-barber-gold/30 transition-colors">
                    <MapPinIcon className="h-6 w-6 text-barber-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-cream mb-3">Our Location</h3>
                    <p className="text-cream/80 text-lg leading-relaxed">
                      {businessAddress}
                    </p>
                    <a
                      href="https://maps.google.com/?q=4605+Av+Bannantyne,+Verdun,+QC,+Canada"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-barber-gold hover:text-light-gold font-semibold transition-colors"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="group p-8 bg-gradient-to-br from-barber-gold/10 to-transparent rounded-2xl border border-barber-gold/20 hover:border-barber-gold/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-barber-gold/20 rounded-full group-hover:bg-barber-gold/30 transition-colors">
                    <ClockIcon className="h-6 w-6 text-barber-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold text-cream mb-4">Business Hours</h3>
                    <div className="space-y-2">
                      {businessHours.map((schedule) => (
                        <div key={schedule.day} className="flex justify-between text-cream/80">
                          <span className="font-medium">{schedule.day}</span>
                          <span className={schedule.hours === 'Closed!' ? 'text-barber-gold' : ''}>
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
