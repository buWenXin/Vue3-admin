<template>
   <FormDialog :title="title" width="30%" v-model:dialog-visible="visible" :from-dto="roleUpdateDto" :rules="rules" :submit-api="updateRole"
               :get-data="getData">
      <template #content>
         <el-col :span="12">
            <el-form-item label="角色名称" prop="name">
               <el-input v-model="roleUpdateDto.name"></el-input>
            </el-form-item>
         </el-col>
         <el-col :span="12">
            <el-form-item label="权限名称" prop="roleKey">
               <el-input v-model="roleUpdateDto.roleKey"></el-input>
            </el-form-item>
         </el-col>
         <el-col :span="12">
            <el-form-item label="角色状态">
               <el-select v-model="roleUpdateDto.status" placeholder="Select">
                  <el-option
                        v-for="item in roleStatus"
                        :key="item.value"
                        :label="item.desc"
                        :value="item.value"
                  />
               </el-select>
            </el-form-item>
         </el-col>
         <el-col :span="12">
            <el-form-item label="角色类型">
               <el-select v-model="roleUpdateDto.type" class="m-2" placeholder="Select">
                  <el-option label="内部角色" :value="0"/>
                  <el-option label="外部角色" :value="1"/>
               </el-select>
            </el-form-item>
         </el-col>
      </template>
   </FormDialog>
</template>

<script lang="ts" setup>
import {updateRole} from "@/api/system/roleApi";
import {roleStatus} from "@/enum/systemEnum";
import {ref} from "vue";
import {ObjectUtils} from "@/utils/ObjectUtils";
import {useRoleFrom} from "@/views/system/Role/son/UpdateRole/UpdateRole";

const props = defineProps<{
   getData(): void
}>();

//from数据
let {initialData, roleUpdateDto, rules} = useRoleFrom();

/*
 * ------------------------------------------------------------<-页面控制->----------------------------------------------------------------------------------
 */

const visible = ref(false);
const title = ref("新增");
//打开事件
const open = (row?: any) => {
   if (row) {
      title.value = "编辑"
      ObjectUtils.DtoTo(row, roleUpdateDto);
   } else {
      title.value = "新增";
      ObjectUtils.DtoTo(initialData, roleUpdateDto)
   }
   visible.value = true;
};

defineExpose({
   open
})

</script>

<style scoped>

</style>
