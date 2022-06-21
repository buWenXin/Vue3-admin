<template>
   <FormDialog title="分配权限" width="30%" v-model:dialog-visible="contrloView" :get-data="getData">

   </FormDialog>
</template>

<script setup lang="ts">
import {ref} from "vue";

const props = defineProps<{
   getData(): void
}>();

const contrloView = ref(false);

const open = () => {
   contrloView.value = true;
}
defineExpose({
   open
})


</script>

<style scoped>

</style>
