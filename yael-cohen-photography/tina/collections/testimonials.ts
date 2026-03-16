import type { Collection } from 'tinacms';

export const testimonialsCollection: Collection = {
  name: 'testimonials',
  label: 'Testimonials',
  path: 'src/content/testimonials',
  format: 'json',
  fields: [
    {
      type: 'string',
      name: 'clientName',
      label: 'Client Name',
      required: true,
    },
    {
      type: 'string',
      name: 'quoteHe',
      label: 'Quote (Hebrew)',
      required: true,
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'string',
      name: 'quoteEn',
      label: 'Quote (English)',
      required: true,
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'number',
      name: 'displayOrder',
      label: 'Display Order',
      required: true,
    },
  ],
};
