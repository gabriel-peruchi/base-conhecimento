<template>
  <footer class="footer">
    <span>Copyright <strong>Gabriel Peruchi</strong> © 2021</span>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer'
})
</script>

<style>
.footer {
  grid-area: footer;
  background-color: #ddd;
  color: #333;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
}
</style>
