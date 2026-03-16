import type { Collection } from 'tinacms';

export const galleryCollection: Collection = {
  name: 'gallery',
  label: 'Gallery Photos',
  path: 'src/content/gallery',
  format: 'json',
  fields: [
    {
      type: 'string',
      name: 'cloudinaryPublicId',
      label: 'Cloudinary Public ID',
      required: true,
    },
    {
      type: 'string',
      name: 'titleHe',
      label: 'Title (Hebrew)',
      required: true,
    },
    {
      type: 'string',
      name: 'titleEn',
      label: 'Title (English)',
      required: true,
    },
    {
      type: 'string',
      name: 'altHe',
      label: 'Alt Text (Hebrew)',
      required: true,
    },
    {
      type: 'string',
      name: 'altEn',
      label: 'Alt Text (English)',
      required: true,
    },
    {
      type: 'string',
      name: 'category',
      label: 'Category',
      required: true,
      options: [
        { value: 'portraits', label: 'Portraits' },
        { value: 'newborn', label: 'Newborn & Family' },
        { value: 'editorial', label: 'Editorial' },
        { value: 'landscapes', label: 'Landscapes' },
      ],
    },
    {
      type: 'number',
      name: 'displayOrder',
      label: 'Display Order',
      required: true,
    },
    {
      type: 'boolean',
      name: 'published',
      label: 'Published',
    },
  ],
};
