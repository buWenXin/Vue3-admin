<template>
   <FormDialog :title="title" width="30%" v-model:dialog-visible="visible" :from-dto="formData" :submit-api="menuUpdate" :rules="rules" :get-data="getDate">
      <template #content>
         <el-col :span="12">
            <el-form-item label="上级菜单">
               <el-tree-select v-model="formData.parentId" :data="menuOfView" accordion check-strictly/>
            </el-form-item>
         </el-col>
         <el-col :span="12">
            <el-form-item label="菜单类型">
               <el-select v-model="formData.type">
                  <el-option
                        v-for="item in MenuTypeEnum"
                        :key="item.value"
                        :label="item.desc"
                        :value="item.value"
                  />
               </el-select>
            </el-form-item>
         </el-col>
         <el-col :span="12">
            <el-form-item label="菜单名称" prop="name">
               <el-input v-model="formData.name"></el-input>
            </el-form-item>
         </el-col>
         <el-col :span="12">
            <el-form-item label="菜单状态">
               <el-select v-model="formData.status">
                  <el-option
                        v-for="item in StatusEnum"
                        :key="item.value"
                        :label="item.desc"
                        :value="item.value"
                  />
               </el-select>
            </el-form-item>
         </el-col>
         <el-col :span="12">
            <el-form-item label="菜单icon" prop="icon">
               <el-input v-model="formData.icon"></el-input>
            </el-form-item>
         </el-col>
         <el-col :span="12">
            <el-form-item label="菜单路由" prop="routerPath">
               <el-input v-model="formData.routerPath"></el-input>
            </el-form-item>
         </el-col>
         <el-col :span="24">
            <el-form-item label="权限标识">
               <el-input v-model="formData.perms"></el-input>
            </el-form-item>
         </el-col>
         <el-col :span="24">
            <el-form-item label="组件路1径">
               <el-input v-model="formData.componentPath"></el-input>
            </el-form-item>
         </el-col>
      </template>
   </FormDialog>
</template>

<script lang="ts" setup>
import {useMenuFrom} from "@/views/system/Menu/son/UpdateMeun/UpdateMeun";
import {MenuTypeEnum, StatusEnum} from "@/enum/systemEnum";
import {menuUpdate} from "@/api/system/menuApi";


let {formData, title, visible, rules, menuOfView} = useMenuFrom();
const props = defineProps<{
   getDate(): void
}>();


</script>

<style scoped>

</style>
