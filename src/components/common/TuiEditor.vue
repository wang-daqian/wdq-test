<script setup lang="ts">
import { onMounted, ref } from "vue";
import "@toast-ui/editor/dist/toastui-editor.css";
import Editor from "@toast-ui/editor";

const editorRef = ref();
const valueInfo = ref('')

const changeValue = (newVal: string) => {
  valueInfo.value = newVal
}
onMounted(() => {
  const editor: any = new Editor({
    el: editorRef.value,
    previewStyle: 'vertical',
    height: '500px',
    theme: 'dark',
    events: {
      change: () => changeValue(editor.getMarkdown())
    },
    toolbarItems:[
      ['image'],
      ['heading'],
    ]
  });
})
</script>

<template>
  <div ref="editorRef"></div>
</template>

<style scoped>
</style>
