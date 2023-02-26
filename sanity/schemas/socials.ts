import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Socials',
  title: 'socials',
  type: 'document',
  fields: [
    {name: 'title', title: 'title', description: 'title of the media', type: 'string'},

    {name: 'url', title: 'Url', type: 'url'},
  ],
})
