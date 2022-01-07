<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
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
    <HelloWorld msg="From Main" />
  </div>
</template>

<style scoped>
</style>
