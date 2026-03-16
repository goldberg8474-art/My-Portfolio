import type { Collection } from 'tinacms';

export const aboutPageCollection: Collection = {
  name: 'aboutPage',
  label: 'About Page',
  path: 'src/content/aboutPage',
  format: 'json',
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      type: 'string',
      name: 'bioHe',
      label: 'Biography (Hebrew)',
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'string',
      name: 'bioEn',
      label: 'Biography (English)',
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'string',
      name: 'profileImageCloudinaryId',
      label: 'Profile Photo Cloudinary ID',
    },
    {
      type: 'string',
      name: 'servicesHe',
      label: 'Services (Hebrew)',
      list: true,
    },
    {
      type: 'string',
      name: 'servicesEn',
      label: 'Services (English)',
      list: true,
    },
  ],
};
