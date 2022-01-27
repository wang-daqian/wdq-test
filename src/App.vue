<script setup lang="ts">
import { useHead } from '@vueuse/head'
useHead({
  title: 'Default Title'
})
</script>

<template>
  <div id="app" class="center">
    <p>
      <img alt="Vue logo" src="@/assets/logo.png" />
    </p>
    <h1 class="red">Hello App!</h1>
  </div>
  <router-view></router-view>
</template>

<style>
@import "@/assets/css/import.css";

a {
  color: #42b983;
}
</style>
