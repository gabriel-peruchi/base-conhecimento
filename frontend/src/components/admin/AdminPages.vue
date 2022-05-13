<template>
  <div class="admin-pages">
    <PageTitle
      icon="mdi-cog"
      title="Administração do Sistema"
      subtitle="Cadastros & Cia"
    />
    <div class="admin-pages-tabs">
      <v-card flat>
        <v-tabs v-model="tab">
          <v-tab value="articles">Artigos</v-tab>
          <v-tab value="categories">Categorias</v-tab>
          <v-tab value="users">Usuários</v-tab>
        </v-tabs>

        <v-window v-model="tab">
          <v-window-item value="articles">
            <ArticleAdmin />
          </v-window-item>

          <v-window-item value="categories">
            <CategoryAdmin />
          </v-window-item>

          <v-window-item value="users">
            <UserAdmin />
          </v-window-item>
        </v-window>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity'

import UserAdmin from '@/components/admin/UserAdmin.vue'
import PageTitle from '@/components/template/PageTitle.vue'
import ArticleAdmin from '@/components/admin/ArticleAdmin.vue'
import CategoryAdmin from '@/components/admin/CategoryAdmin.vue'

const tab = ref('articles')
</script>

<style scoped>
</style>
