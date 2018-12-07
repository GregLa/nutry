const state = {
  headerText: null
}

const getters = {
  headerText: (state, getters) => {
    return state.headerText ? ` - ${state.headerText}` : ''
  }
}

const actions = {
  setHeaderText ({ commit }, headerText) {
    commit('setHeaderText', headerText)
  }
}

const mutations = {
  setHeaderText (state, headerText) {
    state.headerText = headerText
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
