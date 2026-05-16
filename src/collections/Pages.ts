import type { CollectionConfig } from 'payload'

import { slugField } from '../fields/slugField'
import { seoField } from '../fields/seoField'

import { HeroBlock } from '../blocks/HeroBlock'
import { RichTextBlock } from '../blocks/RichTextBlock'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
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
      name: 'layoutBlocks',
      type: 'blocks',
      blocks: [HeroBlock, RichTextBlock],
    },
    seoField,
  ],
}
