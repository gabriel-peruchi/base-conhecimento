<template>
  <div class="user-dropdown">
    <div class="user-button">
      <span class="d-none d-sm-block">{{ user.name }}</span>
      <div class="user-dropdown-img">
        <img :src="gravatarUrl" alt="User" />
      </div>
      <v-icon size="24px" icon="mdi-chevron-down" />
    </div>
    <div class="user-dropdown-content">
      <a href><v-icon icon="mdi-cog" /> Administração</a>
      <a href><v-icon icon="mdi-logout" /> Sair</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import md5 from 'md5'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'

import { User } from '../../core/types/User'

const store = useStore()

const user = computed<User>(() => store.state.user)
const gravatarUrl = computed<string>(() => {
  const hash = md5(user.value.email.trim().toLowerCase())
  return `https://www.gravatar.com/avatar/${hash}`
})
</script>

<style scoped>
.user-dropdown {
  position: relative;
  height: 100%;
}

.user-button {
  display: flex;
  align-items: center;
  color: white;
  font-weight: 100;
  height: 100%;
  padding: 0px 20px;
}

.user-dropdown:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.user-dropdown-img {
  margin: 0px 10px;
}

.user-dropdown-img > img {
  max-height: 37px;
  border-radius: 5px;
}

.user-dropdown-content {
  position: absolute;
  right: 0px;
  background-color: #f9f9f9;
  min-width: 170px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 1;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
}

.user-dropdown:hover .user-dropdown-content {
  visibility: visible;
  opacity: 1;
}

.user-dropdown-content > a {
  text-decoration: none;
  color: black;
  padding: 10px;
}

.user-dropdown-content > a:hover {
  text-decoration: none;
  color: black;
  background-color: #EDEDED;
}
</style>
