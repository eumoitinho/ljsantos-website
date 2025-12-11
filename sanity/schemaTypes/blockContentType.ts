import {defineType, defineArrayMember} from 'sanity'
import {ImageIcon} from '@sanity/icons'

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'}
      ],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'},
          {title: 'Code', value: 'code'},
          {title: 'Highlight', value: 'highlight'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) => Rule.required()
              },
              {
                title: 'Abrir em nova aba',
                name: 'blank',
                type: 'boolean',
                initialValue: true
              }
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      icon: ImageIcon,
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Legenda (opcional)',
        }
      ]
    }),
    defineArrayMember({
      name: 'callout',
      title: 'Caixa de destaque',
      type: 'object',
      fields: [
        {
          name: 'tone',
          type: 'string',
          title: 'Tom',
          options: {
            list: [
              {title: 'Informação', value: 'info'},
              {title: 'Aviso', value: 'warning'},
              {title: 'Sucesso', value: 'success'}
            ],
            layout: 'radio'
          },
          initialValue: 'info'
        },
        {name: 'title', type: 'string', title: 'Título'},
        {name: 'body', type: 'text', rows: 3, title: 'Conteúdo'}
      ]
    }),
    defineArrayMember({
      name: 'video',
      title: 'Vídeo do YouTube',
      type: 'object',
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'URL do vídeo (YouTube)',
          description: 'Cole a URL completa do YouTube (watch, share ou embed).',
          validation: (Rule) =>
            Rule.required()
              .uri({scheme: ['http', 'https']})
              .regex(/(youtu\.be\/|youtube\.com\/(watch\?v=|embed\/|shorts\/))/i, {
                name: 'YouTube URL',
                message: 'Use um link do YouTube (youtu.be ou youtube.com/watch?v=...)',
              })
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Legenda'
        }
      ]
    }),
    defineArrayMember({
      name: 'divider',
      title: 'Separador',
      type: 'object',
      fields: [
        {
          name: 'style',
          type: 'string',
          initialValue: 'line',
          hidden: true,
        },
      ],
      preview: {
        prepare: () => ({title: 'Separador', subtitle: 'Linha divisória'}),
      },
    }),
    defineArrayMember({
      name: 'codeBlock',
      title: 'Código',
      type: 'object',
      fields: [
        {name: 'filename', type: 'string', title: 'Nome do arquivo'},
        {name: 'language', type: 'string', title: 'Linguagem'},
        {name: 'code', type: 'text', rows: 6, title: 'Código', validation: (Rule) => Rule.required()},
      ],
      preview: {
        select: {title: 'filename', subtitle: 'language'},
        prepare({title, subtitle}) {
          return {title: title || 'Bloco de código', subtitle: subtitle || 'Código'}
        },
      },
    }),
    defineArrayMember({
      name: 'embed',
      title: 'Embed',
      type: 'object',
      fields: [
        {name: 'url', type: 'url', title: 'URL incorporada', validation: (Rule) => Rule.required()},
        {name: 'title', type: 'string', title: 'Título'}
      ]
    })
  ],
})
