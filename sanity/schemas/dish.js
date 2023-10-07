import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "string",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "price",
      title: "Price of the dish in INR",
      type: "number",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "image",
      title: "Image of the dish",
      type: "image",
      options: {
        hotspot: true // <-- Defaults to false
      },
    })
  ],
})
