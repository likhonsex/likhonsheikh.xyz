'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import MainLayout from '@/components/MainLayout';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="min-h-screen py-20 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading text-4xl font-medium text-charcoal mb-4">
              About
            </h1>
            <div className="w-16 h-0.5 bg-dustyRose/30 mx-auto" />
          </motion.div>

          {/* Avatar and Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center mb-12"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-dustyRose/20 mb-6 relative">
              <Image
                src="https://cdn-avatars.huggingface.co/v1/production/uploads/6817131f726d5c2ff1f0070d/h6uHsPg3KFRz79CWyq82j.png"
                alt="Likhon Sheikh"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="font-heading text-2xl font-medium text-charcoal mb-2">
              Likhon Sheikh
            </h2>
            <p className="text-charcoal/50 text-sm max-w-md text-center">
              Creator of autonomous AI tools at Likhon Razz · Expert in React, Next.js, Solidity, Node.js, AI agents, and smart contracts.
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg prose-p:text-charcoal/70 prose-headings:font-heading prose-headings:text-charcoal"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-softGray/50 mb-8">
              <p className="text-charcoal/70 leading-relaxed mb-4">
                I am Likhon Sheikh, a passionate developer and creator specializing in building autonomous AI tools and decentralized applications. My expertise spans across modern web technologies and blockchain development.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                At Likhon Razz, I focus on creating innovative solutions that bridge the gap between artificial intelligence and practical applications. Whether it's developing smart contracts, building scalable web applications, or crafting intelligent AI agents, I am committed to delivering cutting-edge technology.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                My technical journey includes mastery in React, Next.js, Solidity, Node.js, and various AI frameworks. I believe in the power of technology to transform ideas into reality and am always exploring new frontiers in software development.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-dustyRose/30 pl-6 my-8 italic text-charcoal/60">
              "Code is poetry written in logic, and AI is the verse that learns to write itself."
            </blockquote>

            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {['React', 'Next.js', 'Solidity', 'Node.js', 'AI Agents', 'Smart Contracts'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-dustyRose/10 text-dustyRose rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>

            {/* Contact */}
            <div className="bg-softGray/30 rounded-xl p-6 mt-8">
              <h3 className="font-heading text-lg font-medium text-charcoal mb-3">
                Get in Touch
              </h3>
              <p className="text-charcoal/70 text-sm mb-4">
                I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out for collaboration or inquiries.
              </p>
              <a
                href="https://t.me/likhonsheikh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-dustyRose hover:text-dustyRose/80 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.696.064-1.225-.46-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram
              </a>
            </div>
          </motion.div>

          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-dustyRose hover:text-dustyRose/80 transition-colors"
            >
              ← Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}
