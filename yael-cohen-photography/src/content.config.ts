import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/gallery' }),
  schema: z.object({
    cloudinaryPublicId: z.string(),
    titleHe: z.string(),
    titleEn: z.string(),
    altHe: z.string(),
    altEn: z.string(),
    category: z.enum(['portraits', 'newborn', 'editorial', 'landscapes']),
    displayOrder: z.number(),
    published: z.boolean().default(true),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/testimonials' }),
  schema: z.object({
    clientName: z.string(),
    quoteHe: z.string(),
    quoteEn: z.string(),
    displayOrder: z.number(),
  }),
});

const siteSettings = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/siteSettings' }),
  schema: z.object({
    photographerNameHe: z.string(),
    photographerNameEn: z.string(),
    taglineHe: z.string(),
    taglineEn: z.string(),
    aboutTeaserHe: z.string(),
    aboutTeaserEn: z.string(),
    whatsappNumber: z.string(),
    contactEmailRecipient: z.string(),
    instagramUrl: z.string(),
    facebookUrl: z.string(),
  }),
});

const aboutPage = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/aboutPage' }),
  schema: z.object({
    bioHe: z.string(),
    bioEn: z.string(),
    profileImageCloudinaryId: z.string(),
    servicesHe: z.array(z.string()),
    servicesEn: z.array(z.string()),
  }),
});

const pagesSeo = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/pagesSeo' }),
  schema: z.object({
    page: z.string(),
    titleHe: z.string(),
    titleEn: z.string(),
    descriptionHe: z.string(),
    descriptionEn: z.string(),
  }),
});

export const collections = {
  gallery,
  testimonials,
  siteSettings,
  aboutPage,
  pagesSeo,
};
