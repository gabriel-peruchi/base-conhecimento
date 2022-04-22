<template>
  <div class="page-title">
    <h1><v-icon v-if="icon" :icon="icon" />{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <hr/>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from '@vue/runtime-core'

defineProps<{
  icon: string,
  title: string,
  subtitle: string
}>()

</script>

<style>
.page-title h1 {
  margin: 0;
}

.page-title h2 {
  color: #777;
  margin-top: 5px;
  font-size: 1.3rem;
}
</style>