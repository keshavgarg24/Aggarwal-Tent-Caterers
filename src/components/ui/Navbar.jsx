'use client';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[var(--background)] text-[var(--primary-foreground)] py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Tent and Catering"
              className="h-16 md:h-16" // Responsive logo size
            />
          </Link>

          {/* Hamburger Icon for Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 border border-[var(--primary-foreground)] rounded p-1"
          >
            <svg
              className={`w-6 h-6 text-[var(--primary-foreground)] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Navigation Links */}
          <div className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'} absolute md:static top-full right-0 bg-[var(--dropdown-background)] md:bg-[var(--background)]`}>
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
              <Link href="#home" className="px-4 py-2 rounded-md hover:bg-[var(--accent)] hover:text-[var(--primary-foreground)] transition-colors duration-300">
                Home
              </Link>
              <Link href="#services" className="px-4 py-2 rounded-md hover:bg-[var(--accent)] hover:text-[var(--primary-foreground)] transition-colors duration-300">
                Services
              </Link>
              <Link href="#gallery" className="px-4 py-2 rounded-md hover:bg-[var(--accent)] hover:text-[var(--primary-foreground)] transition-colors duration-300">
                Gallery
              </Link>
              <Link href="#about" className="px-4 py-2 rounded-md hover:bg-[var(--accent)] hover:text-[var(--primary-foreground)] transition-colors duration-300">
                About Us
              </Link>
              <Link href="#footer" className="px-4 py-2 rounded-md hover:bg-[var(--accent)] hover:text-[var(--primary-foreground)] transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
