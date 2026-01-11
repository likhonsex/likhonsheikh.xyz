/**
 * Search Utility
 * Provides search functionality for the portfolio
 * Indexed content from projects, poems, and about page
 */

import { projects } from '@/data/projects';

// Search result types
export type SearchResultType = 'project' | 'poem' | 'about';

export interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  description: string;
  url: string;
  tags: string[];
  date?: string;
  language?: string;
}

export interface SearchIndex {
  projects: SearchResult[];
  poems: SearchResult[];
  about: SearchResult[];
}

// Sample poems data for search index
const poemsData = [
  {
    slug: 'meya',
    title: 'মেয়া',
    description: 'প্রেম ও সৌন্দর্যের বর্ণনা করা একটি কবিতা',
    tags: ['প্রেম', 'সৌন্দর্য', 'রোমান্টিক'],
  },
  {
    slug: 'jontrona',
    title: 'জন্ট্রনা',
    description: 'জীবনের প্রতি অনুপ্রেরণাদায়ক কবিতা',
    tags: ['জীবন', 'প্রেরণা', 'দৃঢ়তা'],
  },
  {
    slug: 'sheshkanna',
    title: 'শেষ কান্না',
    description: 'বিরহ ও ক্ষতির গভীর অনুভূতি নিয়ে কবিতা',
    tags: ['বিরহ', 'কষ্ট', 'ভালোবাসা'],
  },
  {
    slug: 'avijog',
    title: 'আমার সকল অভিযোগে তুমি',
    description: 'ভালোবাসার প্রতি পূর্ণ আস্থার কবিতা',
    tags: ['ভালোবাসা', 'বিশ্বাস', 'রোমান্টিক'],
  },
  {
    slug: 'kivhabo',
    title: 'কী হবো',
    description: 'জীবনের প্রশ্ন ও সংকল্প নিয়ে কবিতা',
    tags: ['জীবন', 'সংকল্প', 'দার্শনিক'],
  },
];

// About page sections for search
const aboutSections = [
  {
    id: 'intro',
    title: 'About Me',
    description: 'Introduction and professional background as an AI and Blockchain developer',
    tags: ['about', 'bio', 'developer'],
  },
  {
    id: 'expertise',
    title: 'Expertise',
    description: 'Technical skills in React, Next.js, Solidity, Node.js, AI agents, and smart contracts',
    tags: ['skills', 'tech', 'react', 'nextjs', 'solidity'],
  },
  {
    id: 'contact',
    title: 'Get in Touch',
    description: 'Contact information and ways to connect',
    tags: ['contact', 'telegram', 'email'],
  },
  {
    id: 'quote',
    title: 'Philosophy',
    description: 'Quote about code being poetry written in logic',
    tags: ['philosophy', 'code', 'poetry'],
  },
];

// Build search index from all content
export function buildSearchIndex(): SearchIndex {
  // Index projects
  const projectsIndex: SearchResult[] = projects.map((project) => ({
    id: project.id,
    type: 'project',
    title: project.title,
    description: project.fullDescription || project.description,
    url: `/projects#${project.id}`,
    tags: project.techStack.concat([project.category]),
    date: project.date,
  }));

  // Index poems
  const poemsIndex: SearchResult[] = poemsData.map((poem) => ({
    id: poem.slug,
    type: 'poem',
    title: poem.title,
    description: poem.description,
    url: `/poems/${poem.slug}`,
    tags: poem.tags,
  }));

  // Index about sections
  const aboutIndex: SearchResult[] = aboutSections.map((section) => ({
    id: section.id,
    type: 'about',
    title: section.title,
    description: section.description,
    url: `/about#${section.id}`,
    tags: section.tags,
  }));

  return {
    projects: projectsIndex,
    poems: poemsIndex,
    about: aboutIndex,
  };
}

// Flatten index for search
function flattenIndex(index: SearchIndex): SearchResult[] {
  return [...index.projects, ...index.poems, ...index.about];
}

// Search function
export function searchContent(query: string, index: SearchIndex): SearchResult[] {
  if (!query.trim()) {
    return [];
  }

  const normalizedQuery = query.toLowerCase().trim();
  const allResults = flattenIndex(index);

  // Score and sort results
  const scoredResults = allResults.map((result) => {
    let score = 0;

    // Title match (highest weight)
    if (result.title.toLowerCase().includes(normalizedQuery)) {
      score += 100;
      if (result.title.toLowerCase().startsWith(normalizedQuery)) {
        score += 50;
      }
    }

    // Tag matches
    result.tags.forEach((tag) => {
      if (tag.toLowerCase().includes(normalizedQuery)) {
        score += 30;
      }
    });

    // Description match
    if (result.description.toLowerCase().includes(normalizedQuery)) {
      score += 20;
    }

    return { ...result, score };
  });

  // Filter and sort by score
  return scoredResults
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);
}

// Get all results grouped by type
export function getGroupedResults(query: string, index: SearchIndex): {
  projects: SearchResult[];
  poems: SearchResult[];
  about: SearchResult[];
} {
  if (!query.trim()) {
    return { projects: [], poems: [], about: [] };
  }

  const normalizedQuery = query.toLowerCase().trim();

  // Helper to filter by type
  const filterByType = (
    type: 'project' | 'poem' | 'about',
    data: SearchResult[]
  ): SearchResult[] => {
    return data
      .filter((item) => {
        const searchableText = `${item.title} ${item.description} ${item.tags.join(' ')}`.toLowerCase();
        return searchableText.includes(normalizedQuery);
      })
      .slice(0, 5); // Limit to 5 results per category
  };

  return {
    projects: filterByType('project', index.projects),
    poems: filterByType('poem', index.poems),
    about: filterByType('about', index.about),
  };
}

// Get recent/suggested searches (static for now)
export function getSuggestedSearches(): SearchResult[] {
  return [
    {
      id: 'react',
      type: 'project',
      title: 'React Projects',
      description: 'Search for React and Next.js projects',
      url: '/projects?q=react',
      tags: ['react', 'nextjs', 'frontend'],
    },
    {
      id: 'ai',
      type: 'project',
      title: 'AI & Machine Learning',
      description: 'Search for AI agent and chatbot projects',
      url: '/projects?q=ai',
      tags: ['ai', 'machine-learning', 'chatbot'],
    },
    {
      id: 'blockchain',
      type: 'project',
      title: 'Blockchain Development',
      description: 'Search for DeFi and NFT projects',
      url: '/projects?q=blockchain',
      tags: ['solidity', 'defi', 'nft', 'web3'],
    },
    {
      id: 'poetry',
      type: 'poem',
      title: 'Bengali Poetry',
      description: 'Explore Bengali poems and prose',
      url: '/#poems',
      tags: ['poetry', 'bengali', 'literature'],
    },
  ];
}
