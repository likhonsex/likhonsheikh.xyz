'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-softGray/30 mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-base text-charcoal/60">
              বাংলা কবিতা ও গদ্য সংগ্রহ
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <Link href="/#poems" className="text-sm text-charcoal/60 hover:text-dustyRose transition-colors">
              কবিতা
            </Link>
            <Link href="/about" className="text-sm text-charcoal/60 hover:text-dustyRose transition-colors">
              সম্পর্কে
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-charcoal/40">
            © {currentYear} Likhon Sheikh
          </p>
        </div>
      </div>
    </footer>
  );
}
