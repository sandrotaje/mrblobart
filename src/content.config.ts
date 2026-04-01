import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artworkSchema = z.object({
  id: z.number(),
  title: z.string(),
  imageUrl: z.string(),
  description: z.string(),
  location: z.string().optional(),
  year: z.string(),
  dimensions: z.string(),
  technique: z.string(),
  status: z.string().optional(),
});

const walls = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/walls' }),
  schema: artworkSchema,
});

const canvas = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/canvas' }),
  schema: artworkSchema,
});

const advWalls = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/advWalls' }),
  schema: artworkSchema,
});

export const collections = { walls, canvas, advWalls };
