// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: Update with real Vercel deployment URL
  site: 'https://shimongoldberg.vercel.app',

  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'he'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
