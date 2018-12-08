import ingredientsApi from '@/api/ingredients'
import kindOf from 'kind-of'

const state = {
  ingredients: []
}

const getters = {
  getIngredients: (state, getters) => (ids) => {
    if (kindOf(ids) === 'array') {
      return state.ingredients.filter(i => ids.includes(i.id))
    } else {
      return []
    }
  }
}

const actions = {
  init ({ commit }) {
    ingredientsApi.getIngredients(ingredients => {
      commit('setIngredients', ingredients)
    })
  }
}

const mutations = {
  setIngredients (state, ingredients) {
    state.ingredients = ingredients
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
