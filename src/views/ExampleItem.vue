<script setup lang="ts">
import TinymceEditor from '@/components/common/TinymceEditor.vue'

import { computed } from 'vue'

import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { useHead } from '@vueuse/head'

const store = useStore()
const route = useRoute()
const itemId = parseInt(route.params.id as string)

const getItemById = store.getters['example/getItemById']

const itemInfo = computed(() => getItemById(itemId))

store.dispatch('example/fetchTest', itemInfo.value)

const title = computed(() => {
  if (itemInfo.value && itemInfo.value.contractName) {
    return 'Item: ' + itemInfo.value.contractName
  } else {
    return 'No Contract Name Item'
  }
})
useHead({ title })
</script>

<template>
  <div>
    <h1 class="red">Item {{ itemInfo.id }} : {{ itemInfo.name }}</h1>
    <h1 class="red">Item contractName : {{ itemInfo.contractName }}</h1>
    <h1 class="red">Item requestName : {{ itemInfo.requestName }}</h1>
    <p>
      <BaseLink to="/">Go to Home</BaseLink>
      <br />
      <BaseLink to="/example/list">Go to List</BaseLink>
    </p>
    <br />
    <TinymceEditor />
  </div>
</template>

<style scoped>
</style>
