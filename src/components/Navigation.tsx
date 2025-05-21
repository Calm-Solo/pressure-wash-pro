"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type NavLink = {
  name: string;
  href: string;
};

type NavigationProps = {
  links?: NavLink[];
};

export default function Navigation({ links = [] }: NavigationProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Default links if none provided
  const navLinks = links.length > 0 ? links : [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-blue-900 text-white fixed w-full z-10 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/pr_1.jpg" 
              alt="PressureWash Pro Logo" 
              width={40} 
              height={40} 
              className="rounded-full"
            />
            <span className="font-bold text-xl">PressureWash Pro</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:text-blue-300 transition-colors ${
                  pathname === link.href ? 'text-blue-300 font-medium' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-2 bg-blue-800 rounded-b-lg animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md hover:bg-blue-700 transition-colors ${
                    pathname === link.href ? 'bg-blue-700 font-medium' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/quote"
                className="block px-3 py-2 bg-blue-600 text-white rounded-md text-center font-medium hover:bg-blue-500 transition-colors mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 