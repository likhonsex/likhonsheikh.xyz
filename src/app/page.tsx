import { getAllPoems, getAllTags } from '@/lib/poems';
import HomeClient from './HomeClient';

export default function HomePage() {
  const poems = getAllPoems();
  const tags = getAllTags();

  // Get unique categories
  const categories = Array.from(new Set(poems.map(poem => poem.category)));

  return <HomeClient poems={poems} categories={categories} tags={tags} />;
}
