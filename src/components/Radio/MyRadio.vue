<template>
   <div style="display: flex;justify-content: center">
      <slot title="标题" :clsdf="datadClick"></slot>
   </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
const controller = ref("ss");
/**
 * 如果给插槽内容传入数据
 */
const datadClick = (str: string) => {
   controller.value = str;
}
</script>

<style scoped>

</style>
