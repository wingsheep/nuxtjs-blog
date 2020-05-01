
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#51aded' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/reset.css',
    'element-ui/lib/theme-chalk/index.css',
    'aplayer/dist/APlayer.min.css',
    '@/assets/css/main.css',
    '@/assets/css/markdown/index.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/route'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  router: {
    // scrollBehavior(to, from, savedPosition) {
    //   return { x: 0, y: 0 }
    // }
  },
  axios: {
    proxy: true,
    // baseURL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:7001/' : 'http://cboy.eyuanxing.cn:7001/'
    baseURL: 'http://localhost:7001/'
  },
  proxy: {
    '/blog': 'http://127.0.0.1:7001/',
    '/public/': {
      target: 'http://127.0.0.1:7001/'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/, 'APlayer'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          // loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
