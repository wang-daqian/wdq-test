<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useHead } from '@vueuse/head'
const store = useStore()
store.dispatch('contracts/fetchContract')

const contract = computed(() => store.state.contracts.contract)
const title = computed(() => store.getters['contracts/contractName'])
useHead({
  title
})

</script>

<template>
  <p>
    BaseLink Test:
    <BaseLink to="https://code.visualstudio.com/">VSCode</BaseLink>+
    <BaseLink to="/volar">Volar</BaseLink>
  </p>
  {{ contract }}
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
