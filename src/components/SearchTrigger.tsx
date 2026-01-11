'use client';

import { useSearch } from '@/context/SearchContext';

/**
 * Search Trigger Component
 * Button in header to open command palette
 */
export default function SearchTrigger() {
  const { openSearch, toggleSearch } = useSearch();

  return (
    <button
      onClick={toggleSearch}
      className="flex items-center gap-2 px-3 py-1.5 text-sm text-github-textSecondary bg-github-bgSubtle border border-github-border rounded-md hover:bg-github-bgHover hover:border-github-borderHover transition-colors"
      aria-label="Search"
      title="Search (Cmd+K)"
    >
      <svg
        className="w-4 h-4"
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
      <span className="hidden sm:inline text-xs">Search</span>
      <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 text-xs font-mono text-github-textTertiary bg-github-bg border border-github-border/50 rounded">
        ⌘K
      </kbd>
    </button>
  );
}
