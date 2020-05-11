
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '罗小黑的个人网站',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'referrer', content: 'no-referrer' } // 解决 网络图片 img 403问题
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_1809440_g1hosc3eggk.css'}
    ],
    script: [
      // { src: 'https://at.alicdn.com/t/font_1809440_7f90q2uaj1m.js', async: true, defer: true }
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
    '@/plugins/filter',
    '@/plugins/gravatar',
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
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      return { x: 0, y: 0 };
    }
  },
  server: {
    port: 3000, // default: 5000
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
