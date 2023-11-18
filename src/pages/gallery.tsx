'use client';
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

import '../app/globals.css';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Appointments', href: '#' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

const images = [
    'Cuts/0.jpeg',
    'Cuts/1.jpeg',
    'Cuts/2.jpeg',
    'Cuts/3.jpeg',
    'Cuts/4.jpeg',
    'Cuts/5.jpeg',
    'Cuts/6.jpeg',
    'Cuts/7.jpeg',
    'Cuts/8.jpeg',
    'Cuts/9.jpeg',
    'Cuts/10.jpeg',
    'Cuts/11.jpeg',
    'Cuts/12.jpeg',
    'Cuts/13.jpeg',
    'Cuts/14.jpeg',
];

export default function Gallery() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);


    const handleAppointmentsClick = () => {
        window.location.href = "https://squareup.com/appointments/book/q51mj1w3o8fqor/6FDCF5YS0F45W/start"
    };

    const handlePrevClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="bg-black">

            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Arias Barber Studio</span>
                            <img
                                src="Logo/fulllogo_transparent_nobuffer.png"
                                alt="Logo"
                                width="225"
                                height="225"
                            />

                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-8 w-8" aria-hidden="true" style={{ color: "white" }} />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-20">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-s font-bold leading-6 text-gray-200"
                                onClick={item.name === "Appointments" ? handleAppointmentsClick : undefined}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        </a>
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Arias Barber Studio</span>
                                <img
                                    src="Logo/grayscale_transparent.png"
                                    alt="Logo"
                                    width="400"
                                    height="400"
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>

            <div className="relative isolate px-6 lg:px-8">

                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="relative isolate px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl py-32">
                        <div id="gallery" className="relative w-full" data-carousel="slide">
                            <div className="relative h-screen overflow-hidden rounded-lg">
                                {images.map((src, index) => (
                                    <div
                                        key={index}
                                        className={`absolute w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${index === activeIndex ? 'duration-700 ease-in-out opacity-100' : 'hidden opacity-0'
                                            }`}
                                        data-carousel-item={index === activeIndex ? 'active' : undefined}
                                    >
                                        <img src={src} alt="" className="object-scale-down w-full h-full" />
                                    </div>
                                ))}
                            </div>

                            <button
                                type="button"
                                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                data-carousel-prev
                                onClick={handlePrevClick}
                            >
                                {/* Previous button content */}
                                <ChevronLeftIcon className="h-8 w-8 text-white font-bold" />
                            </button>
                            <button
                                type="button"
                                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                data-carousel-next
                                onClick={handleNextClick}
                            >
                                {/* Next button content */}
                                <ChevronRightIcon className="h-8 w-8 text-white font-bold" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            <footer className="bg-black text-white py-8">
                <div className="container mx-auto text-center flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        {/* Company Logo */}
                        <img
                            src="Logo/grayscale_transparent.png"
                            alt="Your Company Logo"
                            className="w-70 h-60"
                        />
                    </div>
                    <div>

                        <address className="text-gray-400">
                            4605 Av Bannantyne<br />
                            Verdun, QC, Canada 🇨🇦<br />
                            H4G 1E4 <br />
                            {/* Phone: (123) 456-7890<br /> */}
                            {/* Email: info@example.com */}
                        </address>
                    </div>
                </div>
            </footer>

        </div>
    )
}
