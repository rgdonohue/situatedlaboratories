import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const fieldNotes = await getCollection('field-notes', ({ data }) => {
    return !data.draft;
  }).catch(() => []);
  const sortedNotes = fieldNotes.sort((a, b) => 
    b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );
  
  return rss({
    title: 'Situated Laboratories - Field Notes',
    description: 'Essays on suffering, systems, and the path.',
    site: context.site || 'https://situatedlaboratories.com',
    items: sortedNotes.map((note) => ({
      title: note.data.title,
      description: note.data.description,
      pubDate: note.data.pubDate,
      link: `/field-notes/${note.slug}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
