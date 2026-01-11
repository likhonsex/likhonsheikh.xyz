'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearch } from '@/context/SearchContext';
import { buildSearchIndex, getGroupedResults, getSuggestedSearches, type SearchResult } from '@/lib/search';

/**
 * Command Palette Component
 * GitHub-inspired search modal with keyboard navigation
 */
export default function CommandPalette() {
  const { isOpen, closeSearch } = useSearch();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [results, setResults] = useState<{
    projects: SearchResult[];
    poems: SearchResult[];
    about: SearchResult[];
  }>({ projects: [], poems: [], about: [] });
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const searchIndex = buildSearchIndex();
  const suggestedSearches = getSuggestedSearches();

  // Update results when query changes
  useEffect(() => {
    if (query.trim()) {
      const searchResults = getGroupedResults(query, searchIndex);
      setResults(searchResults);
      setSelectedIndex(0);
    } else {
      setResults({ projects: [], poems: [], about: [] });
    }
  }, [query, searchIndex]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Calculate total results for navigation
  const totalResults = 
    (query.trim() ? results.projects.length + results.poems.length + results.about.length : suggestedSearches.length);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % totalResults);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + totalResults) % totalResults);
        break;
      case 'Enter':
        e.preventDefault();
        // Handle enter on selected item
        if (totalResults > 0) {
          closeSearch();
          // Navigation is handled by Link components
        }
        break;
      case 'Escape':
        e.preventDefault();
        closeSearch();
        break;
    }
  }, [totalResults, closeSearch]);

  // Get selected item based on index
  const getSelectedItem = (): SearchResult | null => {
    if (!query.trim()) {
      return suggestedSearches[selectedIndex] || null;
    }

    const allResults = [
      ...results.projects,
      ...results.poems,
      ...results.about,
    ];
    return allResults[selectedIndex] || null;
  };

  // Close when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeSearch();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="fixed inset-0 z-50 bg-github-bgOverlay/80 backdrop-blur-sm"
        onClick={handleBackdropClick}
        role="dialog"
        aria-modal="true"
        aria-label="Search"
      >
        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.15 }}
          className="fixed top-[10%] left-1/2 -translate-x-1/2 w-full max-w-2xl bg-github-surface border border-github-border rounded-xl shadow-github-lg overflow-hidden"
        >
          {/* Search Input */}
          <div className="flex items-center px-4 py-3 border-b border-github-border">
            <svg
              className="w-5 h-5 text-github-textSecondary mr-3 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search projects, poems, and pages..."
              className="flex-1 bg-transparent text-github-textPrimary placeholder-github-textSecondary outline-none text-sm"
              aria-label="Search input"
            />
            <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-xs font-medium text-github-textSecondary bg-github-bgSubtle border border-github-border rounded ml-2">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div
            ref={listRef}
            className="max-h-[60vh] overflow-y-auto"
            role="listbox"
            aria-label="Search results"
          >
            {query.trim() ? (
              // Search results
              <>
                {results.projects.length > 0 && (
                  <div className="py-2">
                    <div className="px-4 py-1.5 text-xs font-semibold text-github-textSecondary uppercase tracking-wider bg-github-bgSubtle/50">
                      Projects
                    </div>
                    {results.projects.map((result, idx) => {
                      const globalIdx = idx;
                      const isSelected = globalIdx === selectedIndex;
                      return (
                        <SearchResultItem
                          key={result.id}
                          result={result}
                          isSelected={isSelected}
                          onClick={closeSearch}
                        />
                      );
                    })}
                  </div>
                )}
                {results.poems.length > 0 && (
                  <div className="py-2">
                    <div className="px-4 py-1.5 text-xs font-semibold text-github-textSecondary uppercase tracking-wider bg-github-bgSubtle/50">
                      Poems
                    </div>
                    {results.poems.map((result, idx) => {
                      const globalIdx = results.projects.length + idx;
                      const isSelected = globalIdx === selectedIndex;
                      return (
                        <SearchResultItem
                          key={result.id}
                          result={result}
                          isSelected={isSelected}
                          onClick={closeSearch}
                        />
                      );
                    })}
                  </div>
                )}
                {results.about.length > 0 && (
                  <div className="py-2">
                    <div className="px-4 py-1.5 text-xs font-semibold text-github-textSecondary uppercase tracking-wider bg-github-bgSubtle/50">
                      About
                    </div>
                    {results.about.map((result, idx) => {
                      const globalIdx = results.projects.length + results.poems.length + idx;
                      const isSelected = globalIdx === selectedIndex;
                      return (
                        <SearchResultItem
                          key={result.id}
                          result={result}
                          isSelected={isSelected}
                          onClick={closeSearch}
                        />
                      );
                    })}
                  </div>
                )}
                {results.projects.length === 0 &&
                  results.poems.length === 0 &&
                  results.about.length === 0 && (
                    <div className="px-4 py-8 text-center">
                      <svg
                        className="w-12 h-12 mx-auto text-github-textSecondary/50 mb-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                      <p className="text-github-textSecondary text-sm">
                        No results found for &quot;{query}&quot;
                      </p>
                      <p className="text-github-textTertiary text-xs mt-1">
                        Try different keywords or browse the suggestions below
                      </p>
                    </div>
                  )}
              </>
            ) : (
              // Suggested searches
              <div className="py-2">
                <div className="px-4 py-1.5 text-xs font-semibold text-github-textSecondary uppercase tracking-wider bg-github-bgSubtle/50">
                  Suggested Searches
                </div>
                {suggestedSearches.map((result, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <SearchResultItem
                      key={result.id}
                      result={result}
                      isSelected={isSelected}
                      onClick={closeSearch}
                    />
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-4 py-2.5 border-t border-github-border bg-github-bgSubtle/30">
            <div className="flex items-center gap-4 text-xs text-github-textSecondary">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 text-xs font-mono bg-github-bgSubtle border border-github-border rounded">
                  ↑↓
                </kbd>
                Navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 text-xs font-mono bg-github-bgSubtle border border-github-border rounded">
                  ↵ 
                </kbd>
                Open
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 text-xs font-mono bg-github-bgSubtle border border-github-border rounded">
                  esc
                </kbd>
                Close
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-github-textTertiary">
                Search powered by
              </span>
              <span className="text-xs font-semibold text-github-textSecondary">
                Likhon Sheikh
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * Search Result Item Component
 */
function SearchResultItem({
  result,
  isSelected,
  onClick,
}: {
  result: SearchResult;
  isSelected: boolean;
  onClick: () => void;
}) {
  const getTypeIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'project':
        return (
          <svg className="w-4 h-4 text-github-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      case 'poem':
        return (
          <svg className="w-4 h-4 text-github-poetry" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'about':
        return (
          <svg className="w-4 h-4 text-github-about" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
    }
  };

  const getTypeLabel = (type: SearchResult['type']) => {
    switch (type) {
      case 'project':
        return 'Project';
      case 'poem':
        return 'Poem';
      case 'about':
        return 'About';
    }
  };

  return (
    <Link
      href={result.url}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-2.5 mx-2 rounded-md transition-colors ${
        isSelected
          ? 'bg-github-bgSelection text-github-textPrimary'
          : 'hover:bg-github-bgSubtle/50 text-github-textSecondary'
      }`}
      role="option"
      aria-selected={isSelected}
    >
      {getTypeIcon(result.type)}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className={`text-sm font-medium truncate ${isSelected ? 'text-github-textPrimary' : 'text-github-textPrimary'}`}>
            {result.title}
          </span>
          <span className="px-1.5 py-0.5 text-xs font-medium rounded bg-github-bgSubtle text-github-textTertiary">
            {getTypeLabel(result.type)}
          </span>
        </div>
        <p className="text-xs text-github-textTertiary truncate mt-0.5">
          {result.description}
        </p>
      </div>
      {isSelected && (
        <svg className="w-4 h-4 text-github-textTertiary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </Link>
  );
}
