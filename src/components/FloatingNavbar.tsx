"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navItems, cities } from "@/data";

const FloatingNavbar = () => {
  const [isLocationMenuOpen, setIsLocationMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLocationMenu = () => {
    setIsLocationMenuOpen(!isLocationMenuOpen);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isLocationMenuOpen) setIsLocationMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 ${
        scrolled ? "top-0 w-full max-w-none rounded-none" : ""
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-lg flex items-center justify-between px-4 py-2 transition-all duration-300 ${
          scrolled ? "rounded-none" : ""
        }`}
      >
        <Link href="/" className="flex-shrink-0">
          <Image
            src="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=256&q=75"
            alt="Wonderla"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <div className="relative">
            <button
              onClick={toggleLocationMenu}
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="https://d22pimhl2qmbj7.cloudfront.net/public/marker_02_e495ae7481.svg?w=48&q=75"
                  alt="Locations"
                  width={20}
                  height={20}
                />
                <span className="font-medium">LOCATIONS</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isLocationMenuOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            {isLocationMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl py-2 z-10">
                <div className="grid grid-cols-1 gap-2 p-3">
                  {cities.map((city) => (
                    <div key={city.name} className="relative">
                      <Link
                        href={"/"}
                        className="flex items-center p-2 rounded-lg hover:bg-gray-100"
                      >
                        <Image
                          src={city.image.trimStart()}
                          alt={city.name}
                          width={48}
                          height={48}
                          className="rounded-full h-12 w-12 object-cover"
                        />
                        <span className="ml-3 font-medium capitalize">
                          {city.name}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={`/${item.label.toLowerCase()}`}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Image
                src={item.link.trimStart()}
                alt={item.label}
                width={20}
                height={20}
              />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="flex items-center">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-[#334dcf] font-bold py-2 px-6 rounded-lg flex items-center transition-colors">
            BOOK TICKETS
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <button className="ml-4 block md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white rounded-b-lg shadow-lg mt-1 overflow-hidden">
          <div className="p-4 space-y-4">
            <div>
              <button
                onClick={toggleLocationMenu}
                className="flex items-center justify-between w-full p-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="https://d22pimhl2qmbj7.cloudfront.net/public/marker_02_e495ae7481.svg?w=48&q=75"
                    alt="Locations"
                    width={20}
                    height={20}
                  />
                  <span className="font-medium">LOCATIONS</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isLocationMenuOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isLocationMenuOpen && (
                <div className="mt-2 space-y-2 pl-8">
                  {cities.map((city) => (
                    <div key={city.name} className="space-y-2">
                      <Link
                        href="/"
                        className="flex items-center p-2 rounded-lg hover:bg-gray-100"
                      >
                        <Image
                          src={city.image}
                          alt={city.name}
                          width={36}
                          height={36}
                          className="rounded-full h-9 w-9 object-cover"
                        />
                        <span className="ml-3 capitalize">{city.name}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={`/${item.label.toLowerCase()}`}
                className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <Image
                  src={item.link.trimStart()}
                  alt={item.label}
                  width={20}
                  height={20}
                  className="text-gray-700"
                />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default FloatingNavbar;
