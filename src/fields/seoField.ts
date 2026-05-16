import type { Field } from 'payload'

export const seoField: Field = {
  name: 'seo',
  type: 'group',
  fields: [
    {
      name: 'metaTitle',
      type: 'text',
    },
    {
      name: 'metaDescription',
      type: 'textarea',
    },
    {
      name: 'shareImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
