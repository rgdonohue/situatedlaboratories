import { defineCollection, z } from 'astro:content';

const fieldNotes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    // Optional: for future image support
    image: z.string().optional(),
  }),
  // Allow HTML in markdown to use img tags for public folder images
});

const practices = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    audioUrl: z.string(), // Path relative to /public/audio/
    transcript: z.string(), // Markdown content for transcript
    duration: z.string(), // Format: "5:12"
    pubDate: z.date(),
    featured: z.boolean().default(false),
  }),
});

const study = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['dharma', 'yoga', 'ethics']),
    order: z.number().optional(), // For ordering study materials
  }),
});

export const collections = {
  'field-notes': fieldNotes,
  'practices': practices,
  'study': study,
};
