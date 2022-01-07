<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useHead } from '@vueuse/head'

useHead({ title: 'Example List' })

const store = useStore()

const list = computed(() => store.state.example.list)
const oddList = computed(() => store.getters['example/getOddList'])
const evenList = computed(() => store.getters['example/getEvenList'])

const newItemName = ref('')

const addItem = () => {
  if (newItemName.value === '') {
    alert('Please input Item Name.')
  } else {
    store.commit('example/ADD_ITEM', newItemName.value)
  }
}

const delItem = (id: number) => { store.commit('example/DEL_ITEM', id) }
</script>

<template>
  <div>
    <h1 class="red">List</h1>
    <p>
      <BaseLink :to="{ name: 'MainHome' }">Go to Home</BaseLink>
      <br />

      <template v-for="item in list" :key="`all_item_${item.id}`">
        <BaseLink :to="{ name: 'ExampleItem', params: { id: item.id } }">Go to Item {{ item.name }}</BaseLink>
        <button type="button" @click.prevent="delItem(item.id)">Del Item</button>
        <br />
      </template>
    </p>
    <br />
    <div class="red_border">
      New Item Name:
      <input type="text" v-model="newItemName" />
      <br />
      <button type="button" @click.prevent="addItem">Add Item</button>
    </div>
    <br />
    <h1 class="red">Odd Number List</h1>
    <div v-for="item in oddList" :key="`odd_${item.id}`">{{ item.id }} : {{ item.name }}</div>
    <br />
    <h1 class="red">Even Number List</h1>
    <div v-for="item in evenList" :key="`even_${item.id}`">{{ item.id }} : {{ item.name }}</div>
    <br />
    <HelloWorld msg="From List" />
  </div>
</template>

<style scoped>
</style>
