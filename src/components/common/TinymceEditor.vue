<script setup lang="ts">
import { ref } from 'vue'

import Editor from '@tinymce/tinymce-vue'

import '@/assets/tinymce/langs/zh_CN.js'

import '@/assets/tinymce/plugins/code/plugin.min.js'
import '@/assets/tinymce/plugins/image/plugin.min.js'
import '@/assets/tinymce/plugins/axupimgs/plugin.min.js'
import '@/assets/tinymce/plugins/media/plugin.min.js'
import '@/assets/tinymce/plugins/emoticons/plugin.min.js'
import '@/assets/tinymce/plugins/hr/plugin.min.js'
import '@/assets/tinymce/plugins/table/plugin.min.js'

import '@/assets/tinymce/plugins/charmap/plugin.min.js'
import '@/assets/tinymce/plugins/link/plugin.min.js'

import '@/assets/tinymce/plugins/tinymce-plugin/plugin.min.js'

const content = ref('<p>default</p>')

const init = {
  language: 'zh_CN',
  // width: 600,
  height: 430,
  resize: false,
  menubar: false,
  plugins: 'code image axupimgs media emoticons hr table charmap link tinymce-plugin',
  toolbar: [
    'code image axupimgs media emoticons hr table tinymce-plugin',
    'formatselect fontsizeselect | bold italic underline strikethrough subscript | align lineheight | charmap link'
  ]
}

</script>

<template>
  <editor v-model="content" :init="init" />
</template>
<style>
</style>
