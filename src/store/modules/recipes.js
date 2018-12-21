import recipesApi from '@/api/recipes'

const state = {
  recipes: []
}

const getters = {
  lastRecipes: (state, getters) => {
    return state.recipes
  },

  getRecipe: (state, getters) => (id) => {
    const recipe = state.recipes.find(r => r.id === id)
    return recipe !== undefined ? recipe : null
  }
}

const actions = {
  addRecipe ({ commit }, recipe) {
    commit('addRecipe', recipe)
  },

  init ({ commit }) {
    recipesApi.getRecipes(recipes => {
      commit('setRecipes', recipes)
    })
  }
}

const mutations = {
  addRecipe (state, recipe) {
    state.recipes.shift(recipe)
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
