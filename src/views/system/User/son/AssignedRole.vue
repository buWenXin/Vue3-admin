<template>
   <FormDialog title="分配角色" width="30%" v-model:dialog-visible="controlView">
      <template #content>
         <el-checkbox-group v-model="checkList">
            <el-checkbox label="Option A"/>
            <el-checkbox label="Option B"/>
            <el-checkbox label="Option C"/>
            <el-checkbox label="disabled"/>
         </el-checkbox-group>
      </template>
   </FormDialog>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {getUserAllocationRole} from "@/api/system/userAPi";

const controlView = ref(false);
//打开页面
const open = () => {
   controlView.value = true;
   getUserAllocationRole(1).then(res => {
      console.log(res.data);
   })
};


const checkList = ref<string[]>([])


defineExpose({
   open
})

</script>

<style scoped>

</style>
