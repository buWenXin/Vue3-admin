<template>
   <FormDialog :title="title" width="33%" v-model:dialog-visible="visible" :from-dto="formData" :submit-api="menuUpdate" :rules="rules" :get-data="getDate">
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
         <el-col :span="12">
            <el-form-item label="排序">
               <el-input v-model="formData.sortInt"></el-input>
            </el-form-item>
         </el-col>
         <el-col :span="12">
            <el-form-item label="权限标识">
               <el-input v-model="formData.perms"></el-input>
            </el-form-item>
         </el-col>
         <el-col :span="24">
            <el-form-item label="组件路径">
               <el-input v-model="formData.componentPath"></el-input>
            </el-form-item>
         </el-col>
      </template>
   </FormDialog>
</template>

<script lang="ts" setup>
import {MenuTypeEnum, StatusEnum} from "@/enum/systemEnum";
import {menuUpdate} from "@/api/system/menuApi";
import {ref} from "vue";
import {ObjectUtils} from "@/utils/ObjectUtils";
import {useMenuUpdateData, useMenuUpdateForm} from "@/views/system/Menu/son/UpdateMeun/UpdateMeun";

const props = defineProps<{
   getDate(): void
}>();

/**
 * 提交form
 */
let {formData, resetData, rules} = useMenuUpdateForm();
/**
 * 获取数据
 */
let {getMenuOfs, menuOfView} = useMenuUpdateData();


/*
 * ------------------------------------------------------------<-页面控制->----------------------------------------------------------------------------------
 */
const visible = ref(false);
const title = ref("新增");

/**
 * 打开弹出层函数
 */
function open(row?: any) {
   resetData();
   if (row) {
      title.value = "编辑菜单";
      ObjectUtils.DtoTo(row, formData);
   } else {
      title.value = "新增菜单"
   }
   getMenuOfs();
   visible.value = true;
}

defineExpose({
   open
})


</script>

<style scoped>

</style>
