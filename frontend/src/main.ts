import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import store from './store'

library.add(faAngleLeft)

const app = createApp(App)

app
  .use(store)
  .use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
