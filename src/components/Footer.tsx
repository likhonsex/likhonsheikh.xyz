'use client';

import Link from 'next/link';

/**
 * Footer Component - Following Vercel Design Guidelines
 * Minimal, clean design with clear hierarchy and accessibility
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-paper-50 dark:bg-charcoal-950 mt-auto border-t border-charcoal-100 dark:border-charcoal-900"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Brand/Description */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-charcoal-600 dark:text-charcoal-400">
              AI & Blockchain Developer
            </p>
            <p className="text-xs text-charcoal-400 dark:text-charcoal-500 mt-1">
              Building the future with code
            </p>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-4 sm:gap-6">
              <li>
                <Link 
                  href="/projects" 
                  className="text-sm text-charcoal-500 dark:text-charcoal-400 hover:text-dustyRose-600 dark:hover:text-dustyRose-400 transition-colors duration-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-sm text-charcoal-500 dark:text-charcoal-400 hover:text-dustyRose-600 dark:hover:text-dustyRose-400 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-charcoal-400 dark:text-charcoal-500">
            © {currentYear} Likhon Sheikh
          </p>
        </div>
      </div>
    </footer>
  );
}
