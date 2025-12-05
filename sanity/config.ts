import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import post from './schemas/post'
import category from './schemas/category'

export default defineConfig({
  name: 'default',
  title: 'Site LJSantos CMS',
  appId: 'vd1808p1i1twadazyzrlya2q',
  projectId: 'o7mc56uo',
  dataset: 'production',
  basePath: '/studio',
  schema: {
    types: [post, category]
  },
  plugins: [structureTool(), visionTool()]
})
