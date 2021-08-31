/* eslint-disable */
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  interface State {
    isMenuVisible: boolean
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
