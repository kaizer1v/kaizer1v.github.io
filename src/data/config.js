import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const reflections = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/reflections' }),
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    thumbnail: z.string().optional()
  })
})

export const collections = { reflections }