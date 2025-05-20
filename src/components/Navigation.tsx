"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
  name: string;
  href: string;
};

type NavigationProps = {
  links?: NavLink[];
};

export default function Navigation({ links = [] }: NavigationProps) {
  const pathname = usePathname();
  
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
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 