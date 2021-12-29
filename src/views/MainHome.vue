<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useHead } from '@vueuse/head'
const store = useStore()
store.dispatch('contracts/fetchContract')

const contract = computed(() => store.state.contracts.contract)

useHead({
  title: computed(() => contract.value && contract.value.contractName)
})

const count = ref(0)
</script>

<template>
  <p>
    BaseLink Test:
    <BaseLink to="https://code.visualstudio.com/">VSCode</BaseLink>
    +
    <BaseLink to="/volar">Volar</BaseLink>
  </p>
  {{ contract }}
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
