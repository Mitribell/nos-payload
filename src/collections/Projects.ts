import type { CollectionConfig } from 'payload'

import { slugField } from '../fields/slugField'
import { seoField } from '../fields/seoField'

import { HeroBlock } from '../blocks/HeroBlock'
import { RichTextBlock } from '../blocks/RichTextBlock'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'client', 'updatedAt'],
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slugField,
    {
      name: 'client',
      type: 'text',
    },
    {
      name: 'year',
      type: 'number',
    },
    {
      name: 'excerpt',
      type: 'textarea',
    },
    {
      name: 'featured',
      type: 'checkbox',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
    },
    {
      name: 'contentBlocks',
      type: 'blocks',
      blocks: [HeroBlock, RichTextBlock],
    },
    seoField,
  ],
}
