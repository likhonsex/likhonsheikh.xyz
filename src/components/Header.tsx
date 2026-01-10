'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Header Component - Following Vercel Design Guidelines
 * Minimal, accessible, with smooth scroll-based appearance changes
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll for background appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links with clear hierarchy
  const navLinks = [
    { href: '/', label: 'হোম' },
    { href: '/#poems', label: 'কবিতা' },
    { href: '/about', label: 'সম্পর্কে' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-charcoal-100' 
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav 
        className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-medium text-charcoal-700 hover:text-dustyRose-600 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Hamburger icon */}
          <button
            className="md:hidden p-2 text-charcoal-700 hover:text-dustyRose-600 transition-colors ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-5 h-4 flex flex-col justify-between" aria-hidden="true">
              <span
                className={`h-0.5 w-full bg-current transition-all duration-200 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current transition-all duration-200 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current transition-all duration-200 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu - Slide animation */}
        <AnimatePresence mode="wait">
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2.5 text-charcoal-700 hover:text-dustyRose-600 hover:bg-charcoal-50 rounded-md transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
