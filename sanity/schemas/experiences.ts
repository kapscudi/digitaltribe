import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {name: 'jobTitle', title: 'JobTitle', type: 'string'},
    {name: 'company', title: 'Company', type: 'text'},
    {name: 'companyImage', title: 'Company Image', type: 'image', options: {hotspot: true}},
    {name: 'dateStarted', title: 'DateStarted', type: 'date'},
    {name: 'dateEnded', title: 'DateEnded', type: 'date'},
    {name: 'isCurrentlyWorkingHere', title: 'IsCurrentlyWorkingHere', type: 'boolean'},
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'Skills'}}],
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
})
