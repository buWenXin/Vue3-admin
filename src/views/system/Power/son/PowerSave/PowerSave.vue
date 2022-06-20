<template>
   <FormDialog v-model:dialog-visible="controlView" width="23%" :title="title" :from-dto="powerSaveDto" :submit-api="savePower" :get-data="props.getData">
      <template #content>
         <el-col :span="24">
            <el-form-item label="所属页面">
               <MenuSelect v-model:value="powerSaveDto.menuId"/>
            </el-form-item>
         </el-col>
         <el-col :span="24">
            <el-form-item label="权限描述">
               <el-input v-model="powerSaveDto.powerDesc"/>
            </el-form-item>
         </el-col>
         <el-col :span="24">
            <el-form-item label="权限值">
               <el-input v-model="powerSaveDto.powerKey"/>
            </el-form-item>
         </el-col>
      </template>
   </FormDialog>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {usePowerFormDto} from "@/views/system/Power/son/PowerSave/PowerSave";
import {savePower} from "@/api/system/powerApi";
import MenuSelect from "@/views/system/Power/son/MenuSelect/MenuSelect.vue";
import {PowerPageVo} from "@/model/systemModel/PowerModel";
import {ObjectUtils} from "@/utils/ObjectUtils";

const props = defineProps<{
   //提交后，父页面刷新函数
   getData(): void
}>();


let {powerSaveDto, resetData} = usePowerFormDto();

const controlView = ref(false);
const title = ref("新增权限");

const open = (row?: PowerPageVo) => {
   resetData();
   controlView.value = true;
   if (row) {
      //修改
      title.value = "修改";
      ObjectUtils.DtoTo(row, powerSaveDto)
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
