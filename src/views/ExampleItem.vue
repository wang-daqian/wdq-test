<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'

import { computed } from 'vue'

import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const route = useRoute()
const itemId = parseInt(route.params.id as string)

const getItemById = store.getters['example/getItemById']

const itemInfo = computed(() => getItemById(itemId))
</script>

<template>
  <div>
    <h1 class="red">Item {{ itemInfo.id }} : {{ itemInfo.name }}</h1>
    <p>
      <BaseLink to="/">Go to Home</BaseLink>
      <br />
      <BaseLink to="/example/list">Go to List</BaseLink>
    </p>
    <br />
    <HelloWorld :msg="`From Item ${itemInfo.name}`" />
  </div>
</template>

<style scoped>
</style>
