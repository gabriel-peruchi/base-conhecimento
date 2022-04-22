import { createStore } from 'vuex'

export default createStore({
  state: {
    isMenuVisible: true,
    user: {
      name: 'User mock',
      email: 'mock@test.com.br'
    }
  },

  mutations: {
    toggleMenu (state, isVisible?: boolean) {
      if (isVisible === undefined) {
        state.isMenuVisible = !state.isMenuVisible
      } else {
        state.isMenuVisible = isVisible
      }
    }
  },

  actions: {},

  modules: {}
})
