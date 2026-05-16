import type { Field } from 'payload'

export const slugField: Field = {
  name: 'slug',
  type: 'text',
  index: true,
  required: true,
  unique: true,
  admin: {
    position: 'sidebar',
  },
}
