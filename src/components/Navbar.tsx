'use client';
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentModal from './AppointmentModal';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Appointment', href: '#appointments' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

// const PHONE_NUMBER = '438-920-0655';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAppointmentsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleConfirmBooking = () => {
    window.location.href = "https://squareup.com/appointments/book/q51mj1w3o8fqor/6FDCF5YS0F45W/start";
  };

  // const handlePhoneClick = () => {
  //   window.location.href = `tel:${PHONE_NUMBER.replace(/[^0-9]/g, '')}`;
  // };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black/80 via-black/60 to-transparent backdrop-blur-sm">
        <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 transition-transform hover:scale-105">
              <span className="sr-only">Arias Barber Studio</span>
              <Image
                src="/Logo/fulllogo_transparent_nobuffer.png"
                alt="Arias Barber Studio Logo"
                width={85}
                height={85}
                priority
                className="h-auto w-auto max-h-16"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden gap-2">
            {/* <button
              type="button"
              onClick={handlePhoneClick}
              className="inline-flex items-center justify-center rounded-full bg-barber-gold p-2.5 text-black hover:bg-barber-gold/90 transition-colors"
              aria-label="Call us"
            >
              <PhoneIcon className="h-5 w-5" aria-hidden="true" />
            </button> */}
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-8 w-8 text-white" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <div className="flex gap-x-14 items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.name === "Appointment" ? "#" : item.href}
                  onClick={item.name === "Appointment" ? handleAppointmentsClick : undefined}
                  className="text-base font-semibold leading-6 text-cream hover:text-barber-gold transition-colors tracking-wide"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right spacer for balance */}
          <div className="hidden lg:flex lg:flex-1"></div>
        </nav>

        {/* Mobile Menu */}
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50 bg-black/50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-rich-black px-6 py-6 sm:max-w-sm border-l-2 border-barber-gold">
            <div className="flex items-center justify-between">
              <div className="-m-1.5 p-1.5 pointer-events-none">
                <span className="sr-only">Arias Barber Studio</span>
                <Image
                  src="/Logo/grayscale_transparent.png"
                  alt="Arias Barber Studio Logo"
                  width={300}
                  height={300}
                  className="h-auto w-auto"
                />
              </div>
              <button
                type="button"
                autoFocus
                className="-m-2.5 rounded-md p-2.5 text-cream"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-7 w-7" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-barber-gold/20">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.name === "Appointment" ? "#" : item.href}
                      onClick={(e) => {
                        if (item.name === "Appointment") {
                          handleAppointmentsClick(e);
                        }
                        setMobileMenuOpen(false);
                      }}
                      className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-cream hover:bg-barber-gold/10 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                {/* <div className="py-6">
                  <button
                    onClick={handlePhoneClick}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-barber-gold px-4 py-3 text-base font-semibold text-black hover:bg-barber-gold/90 transition-colors"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    Call {PHONE_NUMBER}
                  </button>
                </div> */}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmBooking}
      />
    </>
  );
}
