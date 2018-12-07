import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/recipes',
      name: 'recipes',
      meta: {
        headerDisplayName: 'Recipes list'
      },
      component: () => import('./views/Recipes.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        headerDisplayName: 'About'
      },
      component: () => import('./views/About.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.headerDisplayName) {
    router.app.$store.dispatch('layout/setHeaderText', to.meta.headerDisplayName)
  } else {
    router.app.$store.dispatch('layout/setHeaderText', null)
  }
  next()
})

export default router
