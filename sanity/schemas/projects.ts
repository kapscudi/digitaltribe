import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {name: 'title', title: 'title', type: 'string'},
    {name: 'Summary', title: 'Summary', type: 'text'},
    {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
    {name: 'link', title: 'Link', type: 'url'},
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'Skills'}}],
    },
  ],
})
