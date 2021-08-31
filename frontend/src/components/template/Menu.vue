<template>
  <aside v-show="showMenu" class="menu"></aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Menu',

  computed: {
    showMenu () {
      return this.$store.state.isMenuVisible
    }
  }
})
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
