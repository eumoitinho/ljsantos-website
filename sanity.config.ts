import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'
import {projectId, dataset, apiVersion} from './sanity/projectDetails'

export default defineConfig({
  name: 'default',
  title: 'Site LJSantos CMS',
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
