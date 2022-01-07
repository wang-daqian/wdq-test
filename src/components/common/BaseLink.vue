<script setup lang="ts">
import { computed } from 'vue'
import { RouteLocationRaw } from 'vue-router'
const props = defineProps<{
  to: RouteLocationRaw
  activeClass?: string
  inactiveClass?: string
}>()

const isExternalLink = computed(
  () => typeof props.to === 'string' && props.to.startsWith('http')
)

const externalHref = isExternalLink.value ? props.to as string : ''
</script>
<template>
  <a v-if="isExternalLink" v-bind="$attrs" :href="externalHref" target="_blank">
    <slot />
  </a>
  <router-link v-else v-bind="$props" custom v-slot="{ isActive, href, navigate }">
    <a
      v-bind="$attrs"
      :href="href"
      @click="navigate"
      :class="isActive ? activeClass : inactiveClass"
    >
      <slot />
    </a>
  </router-link>
</template>