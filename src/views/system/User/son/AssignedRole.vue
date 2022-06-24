<template>
   <FormDialog title="分配角色" width="30%" v-model:dialog-visible="controlView">

   </FormDialog>
</template>

<script setup lang="ts">
import {ref} from "vue";
const controlView = ref(false);
//打开页面
const open = () => {
   controlView.value = true;
}

defineExpose({
   open
})

</script>

<style scoped>

</style>
