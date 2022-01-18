<script setup lang="ts">
import { ref } from 'vue'
// import tinymce from "tinymce/tinymce"
// tinymce.init

import Editor from "@tinymce/tinymce-vue"

import '@/assets/tinymce/langs/zh_CN.js'
import 'tinymce/themes/silver/theme'

import 'tinymce/plugins/image'

import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/code'
import 'tinymce/plugins/paste'

const content = ref('<p>default</p>')

const init = {
  language: "zh_CN",
  // width: 600,
  height: 430,
  resize: false,
  menubar: false,
  plugins: 'image media',
  toolbar: ['image media', 'formatselect']
}

</script>

<template>
  <editor v-model="content" :init="init" />
</template>
<style>
</style>
