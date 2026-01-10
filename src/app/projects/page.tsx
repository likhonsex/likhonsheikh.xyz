import { Metadata } from 'next';
import MainLayout from '@/components/MainLayout';
import ProjectsContent from '@/components/ProjectsContent';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of AI tools, blockchain applications, and web development projects. Built with modern technologies and best practices.',
};

export default function ProjectsPage() {
  return (
    <MainLayout>
      <ProjectsContent />
    </MainLayout>
  );
}
