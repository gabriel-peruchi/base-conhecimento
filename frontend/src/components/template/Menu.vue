<template>
  <aside class="menu"></aside>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Menu'
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
