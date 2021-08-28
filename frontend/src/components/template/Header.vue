<template>
  <header class="header"></header>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header'
})
</script>

<style>
.header {
  grid-area: header;
  background: linear-gradient(to right, #1e469a, #49a7c1);

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
