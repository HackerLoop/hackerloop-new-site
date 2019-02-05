const pkg = require('./package')
const resolve = require('path').resolve

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
      { hid: 'description', name: 'description', content: pkg.description }
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

  ],

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
