import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Poem, PoemMeta } from './types';

const poemsDirectory = path.join(process.cwd(), 'src/content/poems');

export function getAllPoems(): PoemMeta[] {
  const fileNames = fs.readdirSync(poemsDirectory);
  const allPoems = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(poemsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        category: data.category,
        tags: data.tags || [],
      };
    })
    .sort((a, b) => {
      // Sort by date descending (newest first)
      const dateA = new Date(a.date.replace(/১/g, '1').replace(/২/g, '2').replace(/৩/g, '3').replace(/৪/g, '4').replace(/৫/g, '5').replace(/৬/g, '6').replace(/৭/g, '7').replace(/৮/g, '8').replace(/৯/g, '9').replace(/০/g, '0'));
      const dateB = new Date(b.date.replace(/১/g, '1').replace(/২/g, '2').replace(/৩/g, '3').replace(/৪/g, '4').replace(/৫/g, '5').replace(/৬/g, '6').replace(/৭/g, '7').replace(/৮/g, '8').replace(/৯/g, '9').replace(/০/g, '0'));
      return dateB.getTime() - dateA.getTime();
    });

  return allPoems;
}

export async function getPoemBySlug(slug: string): Promise<Poem | null> {
  try {
    const fullPath = path.join(poemsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      category: data.category,
      tags: data.tags || [],
      content: contentHtml,
    };
  } catch (error) {
    return null;
  }
}

export function getPoemsByCategory(category: string): PoemMeta[] {
  const allPoems = getAllPoems();
  return allPoems.filter((poem) => poem.category === category);
}

export function getPoemsByTag(tag: string): PoemMeta[] {
  const allPoems = getAllPoems();
  return allPoems.filter((poem) => poem.tags.includes(tag));
}

export function getAllTags(): string[] {
  const allPoems = getAllPoems();
  const tagsSet = new Set<string>();
  allPoems.forEach((poem) => {
    poem.tags.forEach((tag) => tagsSet.add(tag));
  });
  return Array.from(tagsSet);
}
