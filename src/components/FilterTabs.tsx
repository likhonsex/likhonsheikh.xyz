'use client';

import { motion } from 'framer-motion';
import { useUIStore } from '@/lib/store';

/**
 * FilterTabs Component - Following Vercel Design Guidelines
 * Clean, accessible tabs with smooth state transitions
 */
interface FilterTabsProps {
  categories: string[];
}

export default function FilterTabs({ categories }: FilterTabsProps) {
  const { activeCategory, setActiveCategory } = useUIStore();
  const allCategories = ['all', ...categories];

  return (
    <div 
      className="flex flex-wrap gap-2 justify-center mb-10"
      role="tablist"
      aria-label="Filter poems by category"
    >
      {allCategories.map((category, index) => {
        const isActive = activeCategory === category;
        
        return (
          <motion.button
            key={category}
            role="tab"
            aria-selected={isActive}
            aria-controls="poems-panel"
            onClick={() => setActiveCategory(category)}
            className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
              isActive
                ? 'text-white'
                : 'text-charcoal-600 hover:text-charcoal-900 bg-white hover:bg-charcoal-50'
            }`}
            style={{
              backgroundColor: isActive ? undefined : undefined,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Background for active state */}
            {isActive && (
              <motion.span
                layoutId="activeTab"
                className="absolute inset-0 bg-dustyRose-600 rounded-full"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            
            {/* Background for hover state on inactive tabs */}
            {!isActive && (
              <span className="absolute inset-0 bg-charcoal-100 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200" />
            )}
            
            {/* Label */}
            <span className="relative z-10">
              {category === 'all' ? 'সব' : category}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
