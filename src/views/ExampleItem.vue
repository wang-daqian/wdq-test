<script setup>
import HelloWorld from '@/components/HelloWorld.vue'

import { useRoute } from 'vue-router'
const route = useRoute()

const itemId = route.params.id
</script>

<template>
  <div>
    <h1 class="red">Item {{ itemId }}</h1>
    <p>
      <BaseLink to="/">Go to Home</BaseLink>
      <br />
      <BaseLink to="/example/list">Go to List</BaseLink>
    </p>
    <br />
    <HelloWorld :msg="`From Item ${itemId}`" />
  </div>
</template>

<style scoped>
</style>
