const pkg = require('./package')
const resolve = require('path').resolve
const title       = "Hackerloop — Highly engaging live experiences and products that connect brands to customers"
const description = "Hackerloop is a creative tech agency run by a collective of creatives, designers and engineers who love making crazy products and events."
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
    title: title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Hackerloop is a creative tech agency run by a collective of creatives, designers and engineers who love making crazy products and events."},
      { name: 'robots', content: 'noindex' },
      { property: 'og:title', content: title },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'http://hackerloop.com' },
      { property: 'og:image', content: '/misc/ogimage.jpg' },
      { property: 'og:description', content: description },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/misc/favicon.ico' }
    ],
    script: [
      { src: 'https://cdn.plyr.io/3.4.8/plyr.js' }
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
