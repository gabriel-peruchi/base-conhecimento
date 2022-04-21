<template>
  <aside v-show="isMenuVisible" class="menu"></aside>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'

const store = useStore()

const isMenuVisible = computed(() => store.state.isMenuVisible)
</script>

<style>
.menu {
  grid-area: menu;
  background: linear-gradient(to right, #232526, #414345);

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
