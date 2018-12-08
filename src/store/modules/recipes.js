import { deepCopy } from '@/utils'
import recipesApi from '@/api/recipes'

const state = {
  recipes: [],
  recipe: {
    name: 'New recipe'
  }
}

const getters = {
  lastRecipes: (state, getters) => {
    return state.recipes
  },

  getRecipe: (state, getters) => (id) => {
    const recipe = state.recipes.find(r => r.id === id)
    return recipe !== undefined ? recipe : null
  },

  getRecipeModel: (state, getters) => {
    return deepCopy(state.recipe)
  }
}

const actions = {
  addRecipe ({ commit }) {
    commit('addRecipe')
  },

  init ({ commit }) {
    recipesApi.getRecipes(recipes => {
      commit('setRecipes', recipes)
    })
  }
}

const mutations = {
  addRecipe (state) {
    state.recipes.shift(deepCopy(state.recipe))
  },

  setRecipes (state, recipes) {
    state.recipes = recipes
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
