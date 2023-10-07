import {defineField, defineType} from 'sanity'

export default defineField({
  name: 'featured',
  title: 'Featured Menu Categories',
  type: 'document',
  fields: [
    defineType({
      name: 'name',
      title: 'Featured Category Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineType({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineType({
      name: 'restaurants',
      title: 'Resturants',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    }),
  ],
})
