<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <div>
    <h1 class="red">List</h1>
    <p>
      <BaseLink to="/">Go to Home</BaseLink>
      <br />
      <BaseLink to="/example/item/a">Go to Item A</BaseLink>
      <br />
      <BaseLink to="/example/item/b">Go to Item B</BaseLink>
    </p>
    <br />
    <HelloWorld msg="From List" />
  </div>
</template>

<style scoped>
</style>
