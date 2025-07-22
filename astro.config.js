import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  site: 'https://kaizer1v.github.io',
  // site: 'https://vivekipedia.in',
  // base: '/',
  // trailingSlash: 'always',
  integrations: [mdx(), react()],
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
    remarkPlugins: ['remark-gfm', 'remark-smartypants'],
    rehypePlugins: [
      [
        'rehype-external-links',
        {
          target: '_blank',
        },
      ],
    ],
  },
})
