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
      className="bg-charcoal-50 mt-auto border-t border-charcoal-100"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Brand/Description */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-charcoal-600">
              বাংলা কবিতা ও গদ্য সংগ্রহ
            </p>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-4 sm:gap-6">
              <li>
                <Link 
                  href="/#poems" 
                  className="text-sm text-charcoal-500 hover:text-dustyRose-600 transition-colors duration-200"
                >
                  কবিতা
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-sm text-charcoal-500 hover:text-dustyRose-600 transition-colors duration-200"
                >
                  সম্পর্কে
                </Link>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-charcoal-400">
            © {currentYear} Likhon Sheikh
          </p>
        </div>
      </div>
    </footer>
  );
}
