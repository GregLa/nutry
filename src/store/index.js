import Vue from 'vue'
import Vuex from 'vuex'
import layout from './modules/layout'
import recipes from './modules/recipes'
import ingredient from './modules/ingredients'

const modules = {
  layout,
  recipes,
  ingredient
}

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production'
})

// Automatically run the `init` action for every module,
// if one exists.
for (const moduleName of Object.keys(modules)) {
  if (modules[moduleName].actions && modules[moduleName].actions.init) {
    store.dispatch(`${moduleName}/init`)
  }
}

export default store
