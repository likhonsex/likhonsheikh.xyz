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
      {/* Hero Section with Banner */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden"
        role="banner"
        aria-label="Hero section"
      >
        {/* Preload hero image */}
        <link rel="preload" as="image" href="/hero-banner.jpg" fetchPriority="high" />
        
        {/* Dark Overlay for Text Readability */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/60"
          aria-hidden="true"
        />

        {/* Background Image with optimized loading */}
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
          aria-label="Decorative hero banner image"
        />

        {/* Decorative Elements - Reduced for performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-dustyRose/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-mutedLavender/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative max-w-3xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-dustyRose/90 text-sm uppercase tracking-widest mb-4">
              ব্যক্তিগত কবিতা সংগ্রহ
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-medium text-white mb-6 leading-tight drop-shadow-lg">
              ভালোবাসার কথা,<br />
              <span className="text-dustyRose">বিরহের গান</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              প্রেমের গভীরতা, বিরহের তীব্রতা, এবং জীবনের অনুভূতিকে কবিতার মাধ্যমে প্রকাশ করার একটি প্রচেষ্টা।
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12"
          >
            <a
              href="#poems"
              className="inline-flex items-center gap-2 text-white hover:text-dustyRose transition-colors"
            >
              <span className="text-sm uppercase tracking-wide">পড়তে থাকুন</span>
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

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Poems Section */}
      <section id="poems" className="py-20 px-6" aria-labelledby="poems-heading">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 id="poems-heading" className="font-heading text-3xl font-medium text-charcoal mb-4">
              আমার লেখা
            </h2>
            <div className="w-16 h-0.5 bg-dustyRose/30 mx-auto" />
          </motion.div>

          <FilterTabs categories={categories} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list" aria-label="Poem listings">
            {filteredPoems.map((poem, index) => (
              <PoemCard key={poem.slug} poem={poem} index={index} />
            ))}
          </div>

          {filteredPoems.length === 0 && (
            <p className="text-center text-charcoal/50 py-12">
              এই বিভাগে এখনো কোনো লেখা নেই।
            </p>
          )}
        </div>
      </section>

      {/* Tags Section */}
      <section className="py-16 px-6 bg-softGray/30" aria-labelledby="tags-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h3 id="tags-heading" className="font-heading text-xl font-medium text-charcoal mb-6">
            বিষয় অনুসারে
          </h3>
          <div className="flex flex-wrap gap-3 justify-center" role="list" aria-label="Topic tags">
            {tags.map((tag) => (
              <span
                key={tag}
                className="tag cursor-default"
                role="listitem"
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
