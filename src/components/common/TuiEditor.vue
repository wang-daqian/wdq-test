<script setup lang="ts">
import { onMounted, ref } from "vue";

import "@toast-ui/editor/dist/toastui-editor.css";
import Editor from "@toast-ui/editor";

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import '@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';

import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';

const editorRef = ref();
const viewerRef = ref();
const valueHTML = ref('')
const valueMarkdown = ref('# 1\n## 2\n### 3\n| 1 | 2 | 3 | 4 | 5 |\n| --- | --- | --- | --- | --- |\n| a | b | c | d | e |\n| f | @cols=2:g | h | i |\n| j | k | l | @rows=2:m | n |\n| o | p | q | raa<span style=\"color: red\">aaa</span>aa |\n\n\n\n```\nasdasdasd\ndd    dwqd\n    qwdqwd\n```\n\n* qwe\n* t4t\n* i67io\n    * jhtrj\n        * q\n\n\n1. avfsadva\n2. 15\n    1. 515\n    2. 515\n3. 55')

const changeValue = (editor: Editor) => {
  valueHTML.value = editor.getHTML()
  valueMarkdown.value = editor.getMarkdown()
}
onMounted(() => {
  const editor: Editor = new Editor({
    el: editorRef.value,
    previewStyle: 'vertical',
    height: '500px',
    plugins: [colorSyntax, tableMergedCell],
    initialValue: valueMarkdown.value,
    events: {
      change: () => changeValue(editor)
    },
    // toolbarItems: [
    //   ['image'],
    //   ['heading'],
    // ]
  });

  const viewer: Viewer = new Viewer({
    el: viewerRef.value,
    initialValue: valueMarkdown.value,
    plugins: [tableMergedCell]
  });

  // editor.insertToolbarItem({ groupIndex: 0, itemIndex: 0 }, {
  //   name: 'myItem',
  //   tooltip: 'Custom Button',
  //   command: 'bold',
  //   text: '@',
  //   className: 'toastui-editor-toolbar-icons first',
  //   style: { backgroundImage: 'none' }
  // });
})
</script>

<template>
  <div ref="editorRef"></div>
  <br />
  <hr />
  <div ref="viewerRef"></div>
  <br />
  <hr />
  <div v-html="valueHTML"></div>
</template>

<style scoped>
</style>
