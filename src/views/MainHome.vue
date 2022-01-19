<script setup lang="ts">
import TuiEditor from '@/components/common/TuiEditor.vue'
import { useHead } from '@vueuse/head'
useHead({ title: 'Main Home' })
</script>

<template>
  <div>
    <h1 class="red">Main</h1>
    <p>
      <BaseLink to="https://code.visualstudio.com/">Go to External Link</BaseLink>
      <br />
      <BaseLink to="/example/list">Go to list</BaseLink>
      <br />
      <BaseLink to="/error">Go to 404</BaseLink>
    </p>
    <br />
    <TuiEditor />
  </div>
</template>

<style scoped>
</style>
