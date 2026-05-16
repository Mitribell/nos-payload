import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { Projects } from './collections/Projects'
import { Pages } from './collections/Pages'
import { Services } from './collections/Services'
import { People } from './collections/People'
import { Media } from './collections/Media'
import { Notes } from './collections/Notes'

import { SiteSettings } from './globals/SiteSettings'
import { Navigation } from './globals/Navigation'
import { ContactInfo } from './globals/ContactInfo'

export default buildConfig({
  editor: lexicalEditor(),
  collections: [
    Projects,
    Pages,
    Services,
    People,
    Media,
    Notes,
  ],
  globals: [
    SiteSettings,
    Navigation,
    ContactInfo,
  ],
  secret: process.env.PAYLOAD_SECRET || 'change-me',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  typescript: {
    outputFile: 'src/payload-types.ts',
  },
})
