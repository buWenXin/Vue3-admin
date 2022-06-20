<template>
   <FormDialog v-model:dialog-visible="controlView" width="28%" :title="title">

   </FormDialog>
</template>

<script setup lang="ts">

import {ref} from "vue";


const controlView = ref(false);
const title = ref("新增权限");

const open = (id?: number) => {
   controlView.value = true;
   if (id) {
      //修改
      title.value = "修改"
   } else {
      //新增
      title.value = "新增"
   }
}

defineExpose({
   open
})


</script>

<style scoped>

</style>
