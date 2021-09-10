import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b116b35c = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _48806c72 = () => interopDefault(import('../pages/archive.vue' /* webpackChunkName: "pages/archive" */))
const _3b022e98 = () => interopDefault(import('../pages/book.vue' /* webpackChunkName: "pages/book" */))
const _e87295ae = () => interopDefault(import('../pages/friend.vue' /* webpackChunkName: "pages/friend" */))
const _b795c972 = () => interopDefault(import('../pages/life.vue' /* webpackChunkName: "pages/life" */))
const _de57b7a4 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _64ec309e = () => interopDefault(import('../pages/project.vue' /* webpackChunkName: "pages/project" */))
const _c5214424 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _25f81eda = () => interopDefault(import('../pages/article/_page.vue' /* webpackChunkName: "pages/article/_page" */))
const _aaa064b4 = () => interopDefault(import('../pages/detailed/_id.vue' /* webpackChunkName: "pages/detailed/_id" */))
const _1790b467 = () => interopDefault(import('../pages/follow/_id.vue' /* webpackChunkName: "pages/follow/_id" */))
const _5d662662 = () => interopDefault(import('../pages/category/_name/_id.vue' /* webpackChunkName: "pages/category/_name/_id" */))
const _71a6fdd2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _b116b35c,
    name: "about"
  }, {
    path: "/archive",
    component: _48806c72,
    name: "archive"
  }, {
    path: "/book",
    component: _3b022e98,
    name: "book"
  }, {
    path: "/friend",
    component: _e87295ae,
    name: "friend"
  }, {
    path: "/life",
    component: _b795c972,
    name: "life"
  }, {
    path: "/login",
    component: _de57b7a4,
    name: "login"
  }, {
    path: "/project",
    component: _64ec309e,
    name: "project"
  }, {
    path: "/register",
    component: _c5214424,
    name: "register"
  }, {
    path: "/article/:page?",
    component: _25f81eda,
    name: "article-page"
  }, {
    path: "/detailed/:id?",
    component: _aaa064b4,
    name: "detailed-id"
  }, {
    path: "/follow/:id?",
    component: _1790b467,
    name: "follow-id"
  }, {
    path: "/category/:name?/:id?",
    component: _5d662662,
    name: "category-name-id"
  }, {
    path: "/",
    component: _71a6fdd2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
