<template>
  <header class="header">
    <a class="toggle">
      <font-awesome-icon
        v-if="!hideToggle"
        size="lg"
        :icon="icon"
        @click="toggleMenu"
      />
    </a>
    <h1 class="title">
      {{ title }}
    </h1>
  </header>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',

  props: {
    title: {
      type: String
    },
    hideToggle: {
      type: Boolean
    }
  },

  computed: {
    icon () {
      return 'angle-left'
    }
  },

  methods: {
    toggleMenu () {}
  }
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

.title {
  font-size: 1.2rem;
  color: white;
  font-weight: 100;
  flex-grow: 1;
  text-align: center;
}

.title a {
  color: white;
  text-decoration: none;
}

header.header > a.toggle {
  width: 60px;
  height: 100%;
  color: white;
  justify-self: flex-start;
  text-decoration: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
}

header.header > a.toggle:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
