<template>
  <div class="stat">
    <div class="stat-icon">
      <v-icon size="60px" :icon="icon" :style="style" />
    </div>
    <div class="stat-info">
      <span class="stat-title">{{ title }}</span>
      <span class="stat-value">{{ value }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from '@vue/runtime-core'

const propsData = defineProps<{
  icon: string
  title: string
  color: string
  value: number
}>()

const style = computed(() => `color: ${propsData.color || '#000'}`)
</script>

<style>
.stat {
  flex: 1;
  display: flex;
  flex-direction: row;

  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;

  border-radius: 8px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.stat-icon {
  display: flex;
  align-items: center;
}

.stat-info {
  /* Takes up all the space */
  flex: 1;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}

.stat-title {
  font-size: 1rem;
}

.stat-value {
  font-size: 2.3rem;
}
</style>
