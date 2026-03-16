import { defineConfig } from 'tinacms';
import { galleryCollection } from './collections/gallery';
import { testimonialsCollection } from './collections/testimonials';
import { siteSettingsCollection } from './collections/siteSettings';
import { aboutPageCollection } from './collections/aboutPage';
import { pagesSeoCollection } from './collections/pagesSeo';

export default defineConfig({
  branch:
    process.env.HEAD ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    'main',
  clientId: process.env.PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      galleryCollection,
      testimonialsCollection,
      siteSettingsCollection,
      aboutPageCollection,
      pagesSeoCollection,
    ],
  },
});
