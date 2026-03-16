import type { Collection } from 'tinacms';

export const pagesSeoCollection: Collection = {
  name: 'pagesSeo',
  label: 'Pages SEO',
  path: 'src/content/pagesSeo',
  format: 'json',
  fields: [
    {
      type: 'string',
      name: 'page',
      label: 'Page Identifier',
      ui: {
        component: 'text',
      },
    },
    {
      type: 'string',
      name: 'titleHe',
      label: 'Page Title (Hebrew)',
    },
    {
      type: 'string',
      name: 'titleEn',
      label: 'Page Title (English)',
    },
    {
      type: 'string',
      name: 'descriptionHe',
      label: 'Meta Description (Hebrew)',
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'string',
      name: 'descriptionEn',
      label: 'Meta Description (English)',
      ui: {
        component: 'textarea',
      },
    },
  ],
};
