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
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          title: 'Texto alternativo',
          type: 'string'
        },
        {
          name: 'caption',
          title: 'Legenda',
          type: 'string'
        }
      ]
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
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Título H1', value: 'h1'},
            {title: 'Título H2', value: 'h2'},
            {title: 'Título H3', value: 'h3'},
            {title: 'Citação', value: 'blockquote'}
          ],
          lists: [
            {title: 'Lista', value: 'bullet'},
            {title: 'Lista numerada', value: 'number'}
          ],
          marks: {
            decorators: [
              {title: 'Negrito', value: 'strong'},
              {title: 'Itálico', value: 'em'},
              {title: 'Sublinhado', value: 'underline'},
              {title: 'Código', value: 'code'}
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL'
                  },
                  {
                    name: 'newTab',
                    type: 'boolean',
                    title: 'Abrir em nova aba',
                    initialValue: true
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              title: 'Texto alternativo',
              type: 'string'
            },
            {
              name: 'caption',
              title: 'Legenda',
              type: 'string'
            }
          ]
        },
        {
          type: 'object',
          name: 'callout',
          title: 'Caixa de destaque',
          fields: [
            {
              name: 'tone',
              title: 'Estilo',
              type: 'string',
              options: {
                list: [
                  {title: 'Informativo', value: 'info'},
                  {title: 'Sucesso', value: 'success'},
                  {title: 'Aviso', value: 'warning'}
                ]
              },
              initialValue: 'info'
            },
            {
              name: 'title',
              title: 'Título',
              type: 'string'
            },
            {
              name: 'body',
              title: 'Texto',
              type: 'text'
            }
          ]
        },
        {
          type: 'object',
          name: 'video',
          title: 'Vídeo do YouTube',
          fields: [
            {
              name: 'url',
              title: 'URL do vídeo (YouTube)',
              type: 'url',
              description: 'Cole a URL completa do YouTube (watch, share ou embed).',
              validation: (rule: any) =>
                rule
                  .required()
                  .uri({scheme: ['http', 'https']})
                  .regex(/(youtu\\.be\\/|youtube\\.com\\/(watch\\?v=|embed\\/|shorts\\/))/i, {
                    name: 'YouTube URL',
                    message: 'Use um link do YouTube (youtu.be ou youtube.com/watch?v=...)'
                  })
            },
            {
              name: 'caption',
              title: 'Legenda',
              type: 'string'
            }
          ]
        },
        {
          name: 'codeBlock',
          title: 'Código',
          type: 'object',
          fields: [
            {name: 'filename', title: 'Nome do arquivo', type: 'string'},
            {name: 'language', title: 'Linguagem', type: 'string'},
            {name: 'code', title: 'Código', type: 'text', rows: 6, validation: (rule: any) => rule.required()}
          ]
        },
        {
          type: 'object',
          name: 'divider',
          title: 'Separador',
          fields: [
            {name: 'style', type: 'string', initialValue: 'line', hidden: true}
          ]
        },
        {
          type: 'object',
          name: 'embed',
          title: 'Embed (vídeo ou mapa)',
          fields: [
            {
              name: 'title',
              title: 'Título',
              type: 'string'
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (rule: any) => rule.uri({allowRelative: false, scheme: ['http', 'https']})
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
