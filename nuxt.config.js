export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Candor Generator - Generate Positive, Actionable Candor' || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { hid: 'og:title', name: 'og:title', content: 'Candor Generator - Generate Positive, Actionable Candor' },
      { hid: 'og:image', name: 'og:image', content: '/assets/img/projectScreen.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/vue-select/3.11.2/vue-select.css' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/emoji', 'vue-select/dist/vue-select.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-input-dropdown.client.js',
    '~/plugins/vue-clipboard.client.js',
    '~/plugins/vue-toast.client.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/svg'],
  purgeCSS: {
    whitelist: ['hidden'],
    whitelistPatterns: [/md:w-[1-6]/]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    }
  }
}
