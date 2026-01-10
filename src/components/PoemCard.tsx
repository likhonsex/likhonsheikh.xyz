'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PoemMeta } from '@/lib/types';

/**
 * PoemCard Component - Following Vercel Design Guidelines
 * Clean, minimal card with clear hierarchy and smooth hover states
 */
interface PoemCardProps {
  poem: PoemMeta;
  index: number;
  role?: string;
}

export default function PoemCard({ poem, index, role = 'listitem' }: PoemCardProps) {
  const categoryLabel = poem.category === 'কবিতা' ? 'কবিতা' : 'গদ্য';

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.4), ease: 'easeOut' }}
      className="group"
      role={role}
    >
      <Link 
        href={`/poems/${poem.slug}`}
        className="block"
        aria-label={`Read "${poem.title}"`}
      >
        <article className="bg-white rounded-lg border border-charcoal-200 p-5 sm:p-6 hover:border-dustyRose-300 hover:shadow-md transition-all duration-200">
          {/* Header - Category and Date */}
          <header className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-dustyRose-600 bg-dustyRose-50 px-2.5 py-1 rounded-full">
              {categoryLabel}
            </span>
            <time 
              className="text-xs text-charcoal-400" 
              dateTime={poem.date}
            >
              {poem.date}
            </time>
          </header>

          {/* Title */}
          <h3 className="font-heading text-lg sm:text-xl font-medium text-charcoal-900 mb-3 group-hover:text-dustyRose-600 transition-colors duration-200">
            {poem.title}
          </h3>

          {/* Excerpt - Readable with good line height */}
          <p className="text-charcoal-600 text-sm leading-relaxed line-clamp-3 mb-4">
            {poem.excerpt}
          </p>

          {/* Tags */}
          <footer className="flex flex-wrap gap-2">
            {poem.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-charcoal-500 bg-charcoal-100 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </footer>
        </article>
      </Link>
    </motion.article>
  );
}
