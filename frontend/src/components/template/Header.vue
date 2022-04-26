<template>
  <header class="header">
    <a class="toggle" v-if="!hideToggle" @click="toggleMenu">
      <v-icon size="32px" :icon="icon" />
    </a>
    <h1 class="title">
      <router-link to="/">
        {{ title }}
      </router-link>
    </h1>
    <UserDropdown v-if="!hideUserDropdown" />
  </header>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, defineProps } from '@vue/runtime-core'

import UserDropdown from './UserDropdown.vue'

defineProps<{
  title: string
  hideToggle: boolean,
  hideUserDropdown: boolean
}>()

const store = useStore()

const icon = computed<string>(() =>
  store.state.isMenuVisible ? 'mdi-chevron-left' : 'mdi-chevron-down'
)

const toggleMenu = () => store.commit('toggleMenu')
</script>

<style>
.header {
  grid-area: header;
  background: linear-gradient(to right, #1e469a, #49a7c1);

  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 1.2rem;
  color: white;
  font-weight: 100;
  flex-grow: 1;
  text-align: center;
}

.title a {
  color: white;
  text-decoration: none;
}

header.header > a.toggle {
  width: 60px;
  height: 100%;
  color: white;
  justify-self: flex-start;
  text-decoration: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
}

header.header > a.toggle:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
