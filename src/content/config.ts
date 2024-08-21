import { z, defineCollection } from 'astro:content';

const animations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    length: z.number(),
    alt: z.string(),
    yt: z.string()
  })
});

const engineering = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    alt: z.string(),
    yt: z.string().optional()
  })
});

export const collections = {
  animations: animations,
  engineering: engineering
};
