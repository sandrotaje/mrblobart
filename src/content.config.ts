import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artworkSchema = z.object({
  id: z.string(),
  order: z.number(),
  title: z.string(),
  imageUrl: z.string(),
  altText: z.string().optional(),
  description: z.string().optional(),
  location: z.string().optional(),
  year: z.string(),
  festival: z.string().optional(),
  project: z.string().optional(),
  dimensions: z.string().optional(),
  technique: z.string(),
  status: z.string().optional(),
  price: z.string().optional(),
  contact: z.string().optional(),
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
