const pkg = require('./package')
const resolve = require('path').resolve

/* nuxt.config.js */
// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const base = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/hackerloop-new-site/' : '';
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: base
  }
} : {}

module.exports = {

  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'robots', content: 'noindex' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  modules: [
    ['nuxt-sass-resources-loader', resolve(__dirname, 'assets/variables.scss')],
  ],

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    'vue-plyr/dist/vue-plyr.css'
  ],

  ...routerBase,

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '@/plugins/tilt.min.js', ssr: false},
    {src: '@/plugins/plyr', ssr: false}
  ],

  /*
  ** Nuxt.js modules
  */

  /*
  ** Build configuration
  */


  build: {
    /*
    ** You can extend webpack config here
    */

    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'

      if (!ctx.isDev) { config.output.publicPath = './_nuxt/' }

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
