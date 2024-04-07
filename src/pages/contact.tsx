// 'use client';
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import '../app/globals.css';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Appointments', href: '#' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
]

export default function Contact() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleAppointmentsClick = () => {
        window.location.href = "https://squareup.com/appointments/book/q51mj1w3o8fqor/6FDCF5YS0F45W/start"
    };

    return (
        <div className="bg-black">

            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Arias Barber Studio</span>
                            <img
                                // className="h-8 w-auto"
                                // src="logo.png"
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
                            {/* Log in <span aria-hidden="true">&rarr;</span> */}
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
                                    // className="h-8 w-auto"
                                    // src="logo.png"
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
                                            onClick={item.name === "Appointments" ? handleAppointmentsClick : undefined}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    {/* <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a> */}
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>

            <div className="relative isolate px-6 pt-14 lg:px-8">
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
                <div className="mx-auto max-w-12xl py-32 sm:py-48 lg:py-56">

                    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-extrabold text-white">Visit Our Location</h2>
                            <br /><br /><br />
                        </div>
                        <div >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="rounded-lg overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.5548549218283!2d-73.5788322237263!3d45.45862567107388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9105fdf690bd9%3A0xe48c7479982cda43!2s4605%20Rue%20Bannantyne%2C%20Montreal%2C%20QC%20H4G%201E4!5e0!3m2!1sen!2sca!4v1700281421453!5m2!1sen!2sca"
                                        width="100%" height="480" loading="lazy"></iframe>
                                </div>
                                <div>
                                    <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                                        <div className="px-6 py-4">
                                            <h3 className="text-lg font-medium text-white py-6">Our Address</h3>
                                            <p className="mt-1 text-gray-300">4605 Av Bannantyne, Verdun, QC, Canada 🇨🇦</p>
                                        </div>
                                        <div className="border-t border-gray-200 px-6 py-4">
                                            <h3 className="text-lg font-medium text-white py-6">Hours</h3>
                                            <p className="mt-1 text-gray-300">Monday: Closed!</p>
                                            <p className="mt-1 text-gray-300">Tuesday: 11am - 6pm</p>
                                            <p className="mt-1 text-gray-300">Wednesday: 11am - 6pm</p>
                                            <p className="mt-1 text-gray-300">Thursday: 11am - 6pm</p>
                                            <p className="mt-1 text-gray-300">Friday: 11am - 6pm</p>
                                            <p className="mt-1 text-gray-300">Saturday: 10am - 5pm</p>
                                            <p className="mt-1 text-gray-300">Sunday: Closed!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




        </div>
    )
}
