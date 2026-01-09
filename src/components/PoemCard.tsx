'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PoemMeta } from '@/lib/types';

interface PoemCardProps {
  poem: PoemMeta;
  index: number;
}

export default function PoemCard({ poem, index }: PoemCardProps) {
  const categoryLabel = poem.category === 'কবিতা' ? 'কবিতা' : 'গদ্য';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/poems/${poem.slug}`}>
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-softGray/50 hover:border-dustyRose/20">
          {/* Category Badge */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-dustyRose bg-dustyRose/10 px-3 py-1 rounded-full">
              {categoryLabel}
            </span>
            <span className="text-xs text-charcoal/40">{poem.date}</span>
          </div>

          {/* Title */}
          <h3 className="font-heading text-xl font-medium text-charcoal mb-3 group-hover:text-dustyRose transition-colors duration-300">
            {poem.title}
          </h3>

          {/* Excerpt */}
          <p className="text-charcoal/70 text-sm leading-relaxed line-clamp-3 mb-4">
            {poem.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {poem.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="tag text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
