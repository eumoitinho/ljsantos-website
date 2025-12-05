import {defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Categoria',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
  validation: (rule: any) => rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
  validation: (rule: any) => rule.required()
    }
  ]
})
