<template>
  <div class="content"></div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Content'
})
</script>

<style>
.content {
  grid-area: content;
  background-color: #efefef;
  padding: 20px;
}
</style>
