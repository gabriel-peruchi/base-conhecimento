import { createStore } from 'vuex'

export default createStore({
  state: {
    isMenuVisible: true
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
  actions: {
  },
  modules: {
  }
})
