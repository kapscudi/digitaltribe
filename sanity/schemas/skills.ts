import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {name: 'title', title: 'title', description: 'title of the sill', type: 'string'},
    {
      name: 'progress',
      title: 'progress',
      type: 'number',
      description: 'progress of sill from 0 to 100%',
      validation: (Rule) => Rule.min(0).max(100),
    },
    {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
  ],
})
