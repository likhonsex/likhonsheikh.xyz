'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

/**
 * Project Card Component
 * Clean, minimalist card design following Vercel/Geist principles
 * Features hover effects, tech stack badges, and link actions
 */
export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-paper-50 dark:bg-charcoal-900/50 rounded-xl border border-charcoal-200 dark:border-charcoal-800 overflow-hidden hover:border-dustyRose-300 dark:hover:border-dustyRose-700 transition-all duration-300"
    >
      {/* Card Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-dustyRose-100 dark:bg-dustyRose-900/30 text-dustyRose-700 dark:text-dustyRose-400">
            {project.category.toUpperCase()}
          </span>
          {project.date && (
            <span className="text-xs text-charcoal-500 dark:text-charcoal-400">
              {project.date}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg font-semibold text-charcoal-900 dark:text-white mb-2 group-hover:text-dustyRose-600 dark:group-hover:text-dustyRose-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-charcoal-600 dark:text-charcoal-400 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium rounded-md bg-charcoal-100 dark:bg-charcoal-800 text-charcoal-700 dark:text-charcoal-300"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 text-xs font-medium rounded-md bg-charcoal-100 dark:bg-charcoal-800 text-charcoal-500 dark:text-charcoal-400">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-charcoal-100 dark:border-charcoal-800">
          {project.links.demo && (
            <Link
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-dustyRose-600 dark:text-dustyRose-400 hover:text-dustyRose-700 dark:hover:text-dustyRose-300 transition-colors"
              aria-label={`View live demo of ${project.title}`}
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Demo
            </Link>
          )}
          {project.links.github && (
            <Link
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-charcoal-600 dark:text-charcoal-400 hover:text-charcoal-900 dark:hover:text-white transition-colors"
              aria-label={`View source code of ${project.title}`}
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              Code
            </Link>
          )}
          {project.links.documentation && (
            <Link
              href={project.links.documentation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-charcoal-600 dark:text-charcoal-400 hover:text-charcoal-900 dark:hover:text-white transition-colors"
              aria-label={`View documentation of ${project.title}`}
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Docs
            </Link>
          )}
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-dustyRose-300 dark:group-hover:border-dustyRose-700 transition-all duration-300 pointer-events-none" />
    </motion.article>
  );
}
