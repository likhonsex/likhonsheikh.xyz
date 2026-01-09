import { getAllPoems, getPoemBySlug } from '@/lib/poems';
import { PoemPageProps } from './page.types';
import PoemPageClient from './PoemPageClient';

// Generate static params for all poems
export async function generateStaticParams() {
  const poems = getAllPoems();
  return poems.map((poem) => ({
    slug: poem.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PoemPageProps) {
  const { slug } = await params;
  const poem = await getPoemBySlug(slug);
  
  if (!poem) {
    return {
      title: 'পাওয়া যায়নি | Likhon Sheikh',
    };
  }

  return {
    title: `${poem.title} | Likhon Sheikh`,
    description: poem.excerpt,
    keywords: poem.tags,
  };
}

export default async function PoemPage({ params }: PoemPageProps) {
  const { slug } = await params;
  const poem = await getPoemBySlug(slug);

  if (!poem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading mb-4">পাওয়া যায়নি</h1>
          <p className="text-charcoal/60">এই কবিতাটি খুঁজে পাওয়া যায়নি।</p>
        </div>
      </div>
    );
  }

  const allPoems = getAllPoems();
  const currentIndex = allPoems.findIndex(p => p.slug === slug);
  
  const prevPoem = currentIndex < allPoems.length - 1 ? allPoems[currentIndex + 1] : null;
  const nextPoem = currentIndex > 0 ? allPoems[currentIndex - 1] : null;

  return (
    <PoemPageClient 
      poem={poem} 
      prevPoem={prevPoem} 
      nextPoem={nextPoem}
    />
  );
}
