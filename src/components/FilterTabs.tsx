'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useUIStore } from '@/lib/store';

interface FilterTabsProps {
  categories: string[];
}

export default function FilterTabs({ categories }: FilterTabsProps) {
  const { activeCategory, setActiveCategory } = useUIStore();
  const allCategories = ['all', ...categories];

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {allCategories.map((category) => (
        <motion.button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === category
              ? 'bg-dustyRose text-white shadow-md'
              : 'bg-white text-charcoal/70 hover:bg-dustyRose/10 hover:text-dustyRose'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category === 'all' ? 'সব' : category}
        </motion.button>
      ))}
    </div>
  );
}
