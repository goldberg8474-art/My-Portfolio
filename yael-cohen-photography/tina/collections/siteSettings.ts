import type { Collection } from 'tinacms';

export const siteSettingsCollection: Collection = {
  name: 'siteSettings',
  label: 'Site Settings',
  path: 'src/content/siteSettings',
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
      name: 'photographerNameHe',
      label: 'Photographer Name (Hebrew)',
    },
    {
      type: 'string',
      name: 'photographerNameEn',
      label: 'Photographer Name (English)',
    },
    {
      type: 'string',
      name: 'taglineHe',
      label: 'Tagline (Hebrew)',
    },
    {
      type: 'string',
      name: 'taglineEn',
      label: 'Tagline (English)',
    },
    {
      type: 'string',
      name: 'aboutTeaserHe',
      label: 'About Teaser (Hebrew)',
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'string',
      name: 'aboutTeaserEn',
      label: 'About Teaser (English)',
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'string',
      name: 'whatsappNumber',
      label: 'WhatsApp Number (E.164 without +, e.g. 972500000000)',
    },
    {
      type: 'string',
      name: 'contactEmailRecipient',
      label: 'Contact Email Recipient',
    },
    {
      type: 'string',
      name: 'instagramUrl',
      label: 'Instagram URL',
    },
    {
      type: 'string',
      name: 'facebookUrl',
      label: 'Facebook URL',
    },
  ],
};
