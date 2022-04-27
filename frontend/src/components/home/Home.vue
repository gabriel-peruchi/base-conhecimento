<template>
  <div class="home">
    <PageTitle
      icon="mdi-home"
      title="Dashboard"
      subtitle="Base de Conhecimento"
    />
    <div class="stats">
      <Stat
        color="#d54d50"
        icon="mdi-folder"
        title="Categorias"
        :value="stats?.categories"
      />
      <Stat
        color="#3bc480"
        icon="mdi-file"
        title="Artigos"
        :value="stats?.articles"
      />
      <Stat
        color="#3282cd"
        icon="mdi-account-group "
        title="Usuários"
        :value="stats?.users"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

import { Stats } from '@/core/types/Stats'
import Stat from '@/components/home/Stat.vue'
import useServices from '@/composables/useServices'
import PageTitle from '@/components/template/PageTitle.vue'

const services = useServices()

const stats = ref<Stats>(null)

const getStats = async () => {
  const data = await services.stats.get()
  stats.value = data
}

onMounted(() => getStats())
</script>

<style scoped>
.stats {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 20px;
}
</style>
