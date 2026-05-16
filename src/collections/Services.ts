import type { CollectionConfig } from 'payload'

import { slugField } from '../fields/slugField'
import { seoField } from '../fields/seoField'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slugField,
    {
      name: 'shortDescription',
      type: 'textarea',
    },
    {
      name: 'description',
      type: 'richText',
    },
    seoField,
  ],
}
