import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Peel",
  description: "A Vue wrapper around peel.js",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples/dynamic' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          {
            text: 'Dynamic',
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
