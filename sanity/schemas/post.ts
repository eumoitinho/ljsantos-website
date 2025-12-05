import {defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
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
    },
    {
      name: 'excerpt',
      title: 'Resumo',
      type: 'text',
      rows: 3
    },
    {
      name: 'mainImage',
      title: 'Imagem Principal',
      type: 'image',
      options: {hotspot: true}
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'string'
    },
    {
      name: 'categories',
      title: 'Categorias',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'publishedAt',
      title: 'Publicado em',
      type: 'datetime'
    },
    {
      name: 'language',
      title: 'Idioma',
      type: 'string',
      options: {
        list: [
          {title: 'Português', value: 'pt'},
          {title: 'Inglês', value: 'en'},
          {title: 'Espanhol', value: 'es'}
        ]
      },
      initialValue: 'pt'
    },
    {
      name: 'body',
      title: 'Conteúdo',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              title: 'Texto alternativo',
              type: 'string'
            }
          ]
        }
      ]
    }
  ],
  orderings: [
    {
      title: 'Data de publicação, mais recente primeiro',
      name: 'publishedAtDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'},
        {field: 'title', direction: 'asc'}
      ]
    }
  ]
})
