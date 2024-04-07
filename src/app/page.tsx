'use client';
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Appointments', href: '#' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

const people = [
  {
    name: 'Aria Roz',
    role: 'Founder',
    description: 'A master of the craft with years of expertise, Aria sculpts hairstyles with a touch of refined finesse that stand the test of time.',
    imageUrl:
      'Barbers/Aria/2.jpeg',
  },
  // More people...
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleAppointmentsClick = () => {
    window.location.href = "https://squareup.com/appointments/book/q51mj1w3o8fqor/6FDCF5YS0F45W/start"
  };

  return (
    // <div className="bg-white">
    // <div className="bg-white">
    <div style={{ backgroundImage: "url('Background/3.jpeg')", backgroundRepeat: "no-repeat", backgroundPosition: "center", width: "100%", height: "100vh", backgroundSize: "cover", color: "white" }}>


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
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div> */}
          <div className="text-center">
            <h1 className="text-6xl font-bold tracking-tight text-gray-50 sm:text-6xl">
              Arias Barber Studio
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Step into a world of grooming excellence and experience the art of crafting timeless styles like never before.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                onClick={handleAppointmentsClick}
                className="rounded-md bg-indigo-600 px-10 py-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                BOOK NOW
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-200">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
      </div>


      {/* More  */}
      <div className="relative isolate overflow-hidden bg-gray-100 py-24 sm:py-32">
        {/* <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          // src='barber1.jpeg'
          alt="About Us"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        /> */}
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-4xl">About us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-900">
              At Arias Barber Studio, every visit transforms you into your best self. Our dedicated team crafts your unique style, leaving you looking and feeling exceptional. Come experience the extraordinary.
            </p>
          </div>

        </div>
      </div>


      <div className="py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2> */}
            <h2 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-4xl">Meet our team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Our skilled, passionate team delivers personalized grooming experiences with professionalism, attention to detail, and exceptional customer service.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-1 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-10">
                  <img className="rounded" src={person.imageUrl} alt="Barber" width={"50%"} height={"50%"} />
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-100">{person.name}</h2>
                    <p className="text-sm font-semibold leading-6 text-indigo-500">{person.role}</p>
                    <br />
                    <p className="text-sm font-semibold leading-6 text-gray-400">{person.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto text-center flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            {/* Company Logo */}
            <img
              // src="logo.png"  // Replace with the path to your logo
              src="Logo/grayscale_transparent.png"
              alt="Your Company Logo"
              className="w-70 h-60"
            />
          </div>
          <div>
            {/* <h3 className="text-2xl font-bold">Sterling Barbershop</h3>
          <br/> */}
            <address className="text-gray-400">
              4605 Av Bannantyne<br />
              Verdun, QC, Canada 🇨🇦<br />
              H4G 1E4 <br />
              {/* Phone: (123) 456-7890<br /> */}
              Email: info@ariasbarberstudio.com
            </address>
          </div>
        </div>
      </footer>

    </div>
  )
}
