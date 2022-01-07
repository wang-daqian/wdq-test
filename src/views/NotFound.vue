<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({ title: 'Not Found' })
</script>

<template>
  <div>
    <h1 class="red">404</h1>
    <p>
      <BaseLink to="/">Go to Home</BaseLink>
    </p>
  </div>
</template>

<style scoped>
</style>
