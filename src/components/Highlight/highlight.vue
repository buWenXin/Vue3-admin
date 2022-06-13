<template>
   <div class="code_box">
      <div class="code_copy" @click="copyText">复制代码</div>
      <highlightjs
            language="JavaScript1.5"
            :code="code||'没有参数类型'"
      />
   </div>
</template>
<script>

import 'highlight.js/styles/tokyo-night-dark.css'//主题
import typescript from 'highlight.js/lib/languages/typescript';//支持的语言

import hljs from 'highlight.js/lib/core';

hljs.registerLanguage('typescript', typescript);//语言注册

import hljsVuePlugin from "@highlightjs/vue-plugin";
import {copyText} from "../../utils/MyClipboard";

export default {
   components: {
      highlightjs: hljsVuePlugin.component
   },
   props: {
      code: String,
      language: String
   },
   methods: {
      copyText() {
         copyText(this.code)
      }
   }
}

</script>

<style scoped lang="scss">

.code_box {
   position: relative;
}

.code_copy {
   position: absolute;
   cursor: pointer;
   right: 10px;
   top: 5px;
   color: #EFF7FF;
   z-index: 9999;
}
</style>

