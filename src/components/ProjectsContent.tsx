'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

/**
 * Projects Content Component
 * Client component for animated project grid
 */
export default function ProjectsContent() {
  const categories = ['all', 'ai', 'web3', 'web'] as const;

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-charcoal-900 dark:text-white mb-4">
            Projects
          </h1>
          <p className="text-lg text-charcoal-600 dark:text-charcoal-400 max-w-2xl mx-auto">
            A collection of my work in AI, blockchain, and web development. 
            Each project represents a journey of learning and problem-solving.
          </p>
          <div className="w-16 h-0.5 bg-dustyRose-300 dark:bg-dustyRose-700 mx-auto mt-6" role="presentation" aria-hidden="true" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State (if no projects) */}
        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-charcoal-500 dark:text-charcoal-400">
              No projects to display at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
