/**
 * Projects Data
 * Structured project data for the portfolio
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  techStack: string[];
  category: 'ai' | 'web3' | 'web' | 'mobile';
  image?: string;
  links: {
    demo?: string;
    github?: string;
    documentation?: string;
  };
  featured?: boolean;
  date?: string;
}

export const projects: Project[] = [
  {
    id: 'autonomous-ai-agent',
    title: 'Autonomous AI Agent Framework',
    description: 'A comprehensive framework for building autonomous AI agents capable of complex task execution.',
    fullDescription: 'Built a production-ready autonomous AI agent framework featuring multi-step task planning, memory management, and tool integration. The framework supports various LLM providers and can execute complex workflows with minimal human intervention.',
    techStack: ['Next.js', 'TypeScript', 'OpenAI', 'LangChain', 'Node.js'],
    category: 'ai',
    links: {
      github: 'https://github.com/likhonsex/ai-agent',
      documentation: 'https://docs.example.com/ai-agent',
    },
    featured: true,
    date: '2024',
  },
  {
    id: 'defi-yield-aggregator',
    title: 'DeFi Yield Aggregator',
    description: 'Smart contract-based yield optimization platform across multiple DeFi protocols.',
    fullDescription: 'Developed a yield aggregator that automatically allocates funds to the highest-yielding DeFi protocols. Implemented sophisticated strategies for risk management and gas optimization. The platform supports major networks including Ethereum and Polygon.',
    techStack: ['Solidity', 'Hardhat', 'React', 'TypeScript', 'Ethers.js'],
    category: 'web3',
    links: {
      demo: 'https://yield.example.com',
      github: 'https://github.com/likhonsex/defi-yield',
    },
    featured: true,
    date: '2024',
  },
  {
    id: 'poetry-portfolio',
    title: 'Bengali Poetry Portfolio',
    description: 'A minimalist portfolio website for Bengali poetry and prose with Vercel-inspired design.',
    fullDescription: 'Created a beautiful, accessible portfolio website for Bengali poetry. Features smooth animations, responsive design, and excellent typography optimized for Bengali text rendering. Built with Next.js and Tailwind CSS.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'web',
    links: {
      demo: 'https://likhonsheikh.xyz',
      github: 'https://github.com/likhonsex/likhonsheikh.xyz',
    },
    featured: true,
    date: '2024',
  },
  {
    id: 'nft-marketplace',
    title: 'NFT Marketplace',
    description: 'Full-stack NFT marketplace with auction and fixed-price listing features.',
    fullDescription: 'Built a complete NFT marketplace supporting minting, buying, selling, and auctions. Integrated with IPFS for metadata storage and implemented royalty mechanisms for creators. Features advanced filtering and collection management.',
    techStack: ['Next.js', 'Solidity', 'IPFS', 'PostgreSQL', 'Prisma'],
    category: 'web3',
    links: {
      demo: 'https://nft.example.com',
      github: 'https://github.com/likhonsex/nft-marketplace',
    },
    featured: false,
    date: '2023',
  },
  {
    id: 'ai-chatbot',
    title: 'Context-Aware AI Chatbot',
    description: 'Enterprise-grade AI chatbot with RAG integration for accurate responses.',
    fullDescription: 'Developed a sophisticated chatbot that uses Retrieval-Augmented Generation to provide accurate, context-aware responses. Supports multiple knowledge bases and can be easily integrated into existing applications.',
    techStack: ['Python', 'FastAPI', 'LangChain', 'Pinecone', 'React'],
    category: 'ai',
    links: {
      github: 'https://github.com/likhonsex/ai-chatbot',
      documentation: 'https://chatbot.example.com/docs',
    },
    featured: false,
    date: '2024',
  },
  {
    id: 'smart-contract-auditor',
    title: 'Smart Contract Auditor',
    description: 'Automated security analysis tool for Ethereum smart contracts.',
    fullDescription: 'Created an automated smart contract security auditor that detects common vulnerabilities like reentrancy, overflow/underflow, and access control issues. Integrates with Slither and Mythril for comprehensive analysis.',
    techStack: ['Python', 'Solidity', 'Slither', 'Mythril', 'Docker'],
    category: 'web3',
    links: {
      github: 'https://github.com/likhonsex/smart-contract-auditor',
    },
    featured: false,
    date: '2023',
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((project) => project.category === category);
}
