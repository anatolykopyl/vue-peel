import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Peel",
  description: "A Vue wrapper around peel.js",
  base: '/vue-peel/',
  lang: 'en-US',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/getting-started' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        link: '/getting-started',
      },
      {
        text: 'Examples',
        items: [
          {
            text: 'Dynamic Examples',
            link: '/examples/dynamic'
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/anatolykopyl/vue-peel' }
    ]
  }
})
