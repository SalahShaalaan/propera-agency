'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/properties", label: "Properties" },
    { href: "/features", label: "Services" },
  ];

  return (
    <nav className="bg-white relative">
      {/* Top Information Bar */}
      <div className="bg-mainBlack text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 items-center md:items-start">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-mainGold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +1 (234) 567-890
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-mainGold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              123 Luxury Avenue, NY
            </div>
          </div>
          <p className="text-mainGold mt-2 md:mt-0">
            Premium Real Estate Solutions Since 2010
          </p>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png" 
              alt="Propera Logo" 
              className="h-12 md:h-16 w-auto"
              width={100}
              height={100}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-grow justify-center items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-mainBlack hover:text-mainGold transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link 
            href="/properties" 
            className="hidden md:inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-full text-white bg-mainGold hover:bg-mainGold/90 transition-colors"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-mainBlack hover:text-mainGold"
            aria-label="Toggle menu"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-mainBlack hover:text-mainGold hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/properties"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-mainGold hover:bg-mainGold/90 transition-colors text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}