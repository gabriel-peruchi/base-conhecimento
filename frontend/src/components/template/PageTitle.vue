<template>
  <div class="page-title">
    <div class="title-content">
      <v-icon size="36px" v-if="icon" :icon="icon" />
      <h1>{{ title }}</h1>
    </div>
    <h2>{{ subtitle }}</h2>
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
.title-content {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.page-title {
  margin-bottom: 20px;
}

.page-title h1 {
  margin: 0;
  margin-left: 5px;
}

.page-title h2 {
  color: #777;
  margin-bottom: 5px;
  font-size: 1.3rem;
  font-weight: 400;
}
</style>
