<template>
  <div class="user-admin">
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Nome</th>
          <th class="text-left">Email</th>
          <th class="text-left">Admin</th>
          <th class="text-left">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.admin ? 'Sim' : 'Não' }}</td>
          <td></td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from '@vue/runtime-core'
import { reactive, ref } from '@vue/reactivity'

import { User } from '@/core/types/User'
import useServices from '@/composables/useServices'

const services = useServices()

const mode = ref('save')
const user = reactive({})
const users = ref<User[]>([])

const loadUsers = async () => {
  const allUsers = await services.users.list()
  users.value = allUsers
}

onMounted(loadUsers)
</script>

<style scoped>
</style>
