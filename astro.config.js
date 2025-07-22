import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'

/* 
  - https://astro.build/confi
  - see [here](https://docs.astro.build/en/reference/configuration-reference/#markdown-options) for additional options
*/
export default defineConfig({
  site: 'https://kaizer1v.github.io',
  // site: 'https://vivekipedia.in',
  // base: '/',
  // trailingSlash: 'always',
  // src: './src',
  // publicDir: './public',
  // compressHTML: false,
  integrations: [mdx(), react()],
  markdown: {
    shikiConfig: {
      theme: 'synthwave-84',    // syntax highlighter theme
    }
  },

  // these are dev options when running `astro dev`
  server: {
    host: true,
    port: 8998
  }
})
