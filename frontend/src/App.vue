<template>
  <div class="app" :class="{ 'hide-menu': !isMenuVisible }">
    <Header title="Base de Conhecimento" :hideToggle="false" :hideUserDropdown="false" />
    <Menu />
    <Content />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'

import Menu from './components/template/Menu.vue'
import Footer from './components/template/Footer.vue'
import Header from './components/template/Header.vue'
import Content from './components/template/Content.vue'

const store = useStore()

const isMenuVisible = computed(() => store.state.isMenuVisible)
</script>

<style>
* {
  font-family: "Lato", sans-serif;
}

body {
  margin: 0px;
}

.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 300px 1fr;
  grid-template-areas:
    "header header"
    "menu content"
    "menu footer";
}

.app.hide-menu {
  grid-template-areas:
    "header header"
    "content content"
    "footer footer";
}
</style>
