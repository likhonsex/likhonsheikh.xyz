'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import MainLayout from '@/components/MainLayout';
import { Poem } from '@/lib/types';
import { PoemMeta } from '@/lib/types';
import { useEffect, useRef } from 'react';

interface PoemPageClientProps {
  poem: Poem;
  prevPoem: PoemMeta | null;
  nextPoem: PoemMeta | null;
}

export default function PoemPageClient({ poem, prevPoem, nextPoem }: PoemPageClientProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <MainLayout>
      <article className="min-h-screen py-20 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-charcoal/50 mb-8"
          >
            <Link href="/" className="hover:text-dustyRose transition-colors">
              হোম
            </Link>
            <span>/</span>
            <Link href="/#poems" className="hover:text-dustyRose transition-colors">
              কবিতা
            </Link>
            <span>/</span>
            <span className="text-charcoal/70">{poem.title}</span>
          </motion.nav>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-dustyRose bg-dustyRose/10 px-3 py-1 rounded-full">
                {poem.category}
              </span>
              <span className="text-sm text-charcoal/40">{poem.date}</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-medium text-charcoal mb-6">
              {poem.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {poem.tags.map((tag) => (
                <span key={tag} className="tag text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </motion.header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div 
              ref={contentRef}
              className="poetry-content prose prose-lg max-w-none
                prose-p:text-charcoal/80 prose-p:leading-loose
                prose-headings:font-heading prose-headings:text-charcoal
                prose-blockquote:border-l-dustyRose/30 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-charcoal/60
                prose-strong:text-dustyRose prose-strong:font-medium
                prose-hr:border-dustyRose/20"
              dangerouslySetInnerHTML={{ __html: poem.content }}
            />
          </motion.div>

          {/* Excerpt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-softGray/30 rounded-xl p-6 mb-12"
          >
            <p className="text-charcoal/60 text-sm italic text-center">
              {poem.excerpt}
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 border-t border-softGray"
          >
            {prevPoem ? (
              <Link
                href={`/poems/${prevPoem.slug}`}
                className="flex items-center gap-2 text-charcoal/60 hover:text-dustyRose transition-colors group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                <div className="text-left">
                  <span className="text-xs text-charcoal/40 block">পূর্ববর্তী</span>
                  <span className="text-sm">{prevPoem.title}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/#poems"
              className="text-dustyRose hover:text-dustyRose/80 transition-colors text-sm"
            >
              সব কবিতা
            </Link>

            {nextPoem ? (
              <Link
                href={`/poems/${nextPoem.slug}`}
                className="flex items-center gap-2 text-charcoal/60 hover:text-dustyRose transition-colors group"
              >
                <div className="text-right">
                  <span className="text-xs text-charcoal/40 block">পরবর্তী</span>
                  <span className="text-sm">{nextPoem.title}</span>
                </div>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            ) : (
              <div />
            )}
          </motion.div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-charcoal/50 hover:text-dustyRose transition-colors text-sm"
            >
              ← হোমে ফিরে যান
            </Link>
          </motion.div>
        </div>
      </article>
    </MainLayout>
  );
}
