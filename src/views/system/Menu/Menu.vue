<template>

   <div class="page_edit">
      <el-button type="primary" @click="addClick">添加菜单</el-button>
   </div>

   <el-table :data="data" border v-loading="loading" :header-cell-style="{background:'#42b8dd',color:'#fff'}" row-key="id" :row-style="rowStyle">
      <el-table-column prop="name" label="菜单名称" align='center'/>
      <el-table-column prop="routerPath" label="路由地址" align='center'/>
      <el-table-column prop="componentPath" width="300" label="组件路径" align='center'/>
      <el-table-column prop="icon" label="菜单icon" align='center'/>
      <el-table-column prop="perms" label="权限标识" align='center'/>
      <el-table-column prop="createBy" label="创建人" align='center'/>
      <el-table-column prop="createTime" label="创建时间" width="170" align='center'/>
      <el-table-column prop="updateBy" label="更新人" align='center'/>
      <el-table-column prop="updateTime" label="更新时间" width="170" align='center'/>
      <el-table-column label="操作" width="130" align='center'>
         <template v-slot:default="scope">
            <el-button type="primary" size="small" @click="handleEdit(scope.row)">修改</el-button>
         </template>
      </el-table-column>
   </el-table>

   <!--新增/修改菜单-->
   <UpdateMenu ref="UpdateMenuRef" :get-date="getData"/>
</template>

<script setup lang="ts">
import {ref} from "vue";
import UpdateMenu from "@/views/system/Menu/son/UpdateMeun/UpdateMeun.vue";
import {getMenuList} from "@/api/system/menuApi";
import type {MenuInfoVo} from "@/model/systemModel/menuModel";


const loading = ref(false);
const data = ref<Array<MenuInfoVo>>([]);
//请求数据
getData();

function getData() {
   getMenuList().then(res => {
      data.value = res.data;
   })
}

/**
 * 控制目录显示的颜色
 */
const rowStyle = (row: any) => {
   if (row.row.type == 0) {
      return {
         color: "#409EFF"
      }
   }
}
/*
 * ------------------------------------------------------------<-新增/修改菜单->----------------------------------------------------------------------------------
 */

const UpdateMenuRef = ref<InstanceType<typeof UpdateMenu>>(null);

/**
 * 添加菜单
 */
const addClick = () => {
   UpdateMenuRef.value.open();
}
/**
 * 修改菜单
 */
const handleEdit = (row: MenuInfoVo) => {
   UpdateMenuRef.value.open(row);
}

</script>

<style scoped>

</style>
