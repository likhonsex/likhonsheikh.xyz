'use client';

import { motion } from 'framer-motion';
import PoemCard from '@/components/PoemCard';
import FilterTabs from '@/components/FilterTabs';
import { useUIStore } from '@/lib/store';
import { PoemMeta } from '@/lib/types';
import { useEffect, useMemo } from 'react';

interface HomeClientProps {
  poems: PoemMeta[];
  categories: string[];
  tags: string[];
}

export default function HomeClient({ poems, categories, tags }: HomeClientProps) {
  const { activeCategory } = useUIStore();

  const filteredPoems = useMemo(() => {
    if (activeCategory === 'all') {
      return poems;
    }
    return poems.filter(poem => poem.category === activeCategory);
  }, [poems, activeCategory]);

  // Update store with first category if not set
  useEffect(() => {
    if (categories.length > 0) {
      useUIStore.getState().setActiveCategory('all');
    }
  }, [categories]);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Following Vercel Design Principles */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 overflow-hidden"
        role="banner"
        aria-label="Hero section"
      >
        {/* Preload hero image for LCP optimization */}
        <link rel="preload" as="image" href="/hero-banner.jpg" fetchPriority="high" />
        
        {/* Dark Overlay for Text Readability */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-charcoal-900/60 via-charcoal-900/40 to-charcoal-900/60"
          aria-hidden="true"
        />

        {/* Background Image with GPU acceleration */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/hero-banner.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            willChange: 'transform',
          }}
          role="img"
          aria-label="Decorative hero banner"
        />

        {/* Decorative Elements - Optimized with will-change */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <motion.div
            className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-dustyRose-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ willChange: 'transform, opacity' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-80 md:h-80 bg-mutedLavender-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ willChange: 'transform, opacity' }}
          />
        </div>

        {/* Hero Content - Centered with clear hierarchy */}
        <div className="relative max-w-4xl mx-auto text-center z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Eyebrow text - Following Vercel pattern */}
            <p className="text-dustyRose-400 text-xs sm:text-sm uppercase tracking-widest mb-4 font-medium">
              ব্যক্তিগত কবিতা সংগ্রহ
            </p>
            
            {/* Hero Heading - Large, bold typography */}
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight">
              ভালোবাসার কথা,<br />
              <span className="text-dustyRose-400">বিরহের গান</span>
            </h1>
            
            {/* Subtitle - Readable with good contrast */}
            <p className="text-charcoal-100 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              প্রেমের গভীরতা, বিরহের তীব্রতা, এবং জীবনের অনুভূতিকে কবিতার মাধ্যমে প্রকাশ করার একটি প্রচেষ্টা।
            </p>
          </motion.div>

          {/* CTA Button - Following Vercel button patterns */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="mt-10"
          >
            <a
              href="#poems"
              className="inline-flex items-center gap-2 text-white hover:text-dustyRose-300 transition-colors duration-200"
            >
              <span className="text-xs sm:text-sm uppercase tracking-wide font-medium">
                পড়তে থাকুন
              </span>
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                aria-hidden="true"
              >
                ↓
              </motion.span>
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator - Subtle animation */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Poems Section - Clean, grid-based layout */}
      <section 
        id="poems" 
        className="py-16 sm:py-20 px-4 sm:px-6"
        aria-labelledby="poems-heading"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header - Following Vercel patterns */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 
              id="poems-heading" 
              className="font-heading text-2xl sm:text-3xl font-semibold text-charcoal-900 mb-4"
            >
              আমার লেখা
            </h2>
            <div 
              className="w-12 h-0.5 bg-dustyRose-400 mx-auto" 
              role="presentation"
              aria-hidden="true"
            />
          </motion.div>

          {/* Filter Tabs */}
          <FilterTabs categories={categories} />

          {/* Poem Grid - Responsive grid layout */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
            role="list"
            aria-label="Poem listings"
          >
            {filteredPoems.map((poem, index) => (
              <PoemCard 
                key={poem.slug} 
                poem={poem} 
                index={index}
                role="listitem"
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredPoems.length === 0 && (
            <p className="text-center text-charcoal-500 py-12">
              এই বিভাগে এখনো কোনো লেখা নেই।
            </p>
          )}
        </div>
      </section>

      {/* Tags Section - Clean, minimal design */}
      <section 
        className="py-12 sm:py-16 px-4 sm:px-6 bg-charcoal-50"
        aria-labelledby="tags-heading"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 
            id="tags-heading" 
            className="font-heading text-lg sm:text-xl font-medium text-charcoal-900 mb-6"
          >
            বিষয় অনুসারে
          </h3>
          
          {/* Tags Grid - Clean spacing */}
          <div 
            className="flex flex-wrap gap-3 justify-center"
            role="list"
            aria-label="Topic tags"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                role="listitem"
                className="tag cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
