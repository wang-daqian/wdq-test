<script setup>
import { useHead } from '@vueuse/head'
useHead({
  title: 'Vite App'
})
</script>

<template>
  <div id="wrap">
    <div>
      <!-- <router-view name="header"></router-view> -->
      <router-view />
      <!-- <router-view name="footer"></router-view> -->
    </div>
    <!-- <loading v-if="loading"></loading> -->
  </div>
</template>

<style>
</style>
