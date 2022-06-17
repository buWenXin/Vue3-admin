<template>
   <SearchPage :handle-search="handleSearch" :handle-refresh="handleRefresh">
      <SearchItem :span="3.5" label="名字">
         <el-input v-model="pageDto.name"/>
      </SearchItem>
      <SearchItem :span="3" label="类型">
         <el-input v-model="pageDto.type"/>
      </SearchItem>
   </SearchPage>

   <div class="page_edit">
      <el-button type="primary" @click="addClick">添加</el-button>
   </div>

   <TablePage
         :table-list="tableData.tableList"
         :loading="tableData.loading"
         :total="tableData.total"
         v-model:page-index="pageDto.pageIndex"
         v-model:page-size="pageDto.pageSize"
         :get-date="getData">
      <el-table-column prop="name" label="角色名称" align='center'/>
      <el-table-column prop="type" label="角色类型" align='center' :formatter="typeFormatter"/>
      <el-table-column prop="status" label="角色状态" align='center'/>
      <el-table-column prop="createBy" label="创建人" align='center'/>
      <el-table-column prop="createTime" label="创建时间" width="170" align='center'/>
      <el-table-column prop="updateBy" label="更新人" align='center'/>
      <el-table-column prop="updateTime" label="更新时间" width="170" align='center'/>
      <el-table-column label="操作" width="300" align='center'>
         <template v-slot:default="scope">
            <el-button type="primary" size="small" @click="handleAmongMenu(scope.row)">分配菜单</el-button>
            <el-button type="primary" size="small" @click="handleAmongPower(scope.row)">分配权限</el-button>
            <el-button type="primary" size="small" @click="handleEdit(scope.row)">修改</el-button>
         </template>
      </el-table-column>
   </TablePage>
   <!--新增修改角色-->
   <UpdateRole ref="updateRoleRef" :get-data="getData"/>
   <!--分配菜单-->
   <AmongMenu ref="amongMenuRef" :get-data="getData"/>
</template>

<script setup lang="ts">
import {UseRolePage} from "@/views/system/Role/Role";

import type {RolePageVo} from "@/model/systemModel/roleModel";
import {RoleTypeEnum} from "@/enum/systemEnum";
import {EnumUtils} from "@/utils/Enum";


import AmongMenu from "@/views/system/Role/son/AmongMenu/AmongMenu.vue";
import {ref} from "vue";

let {getData, handleRefresh, handleSearch, pageDto, tableData} = UseRolePage();
getData();


/*
 * ------------------------------------------------------------<-新增/修改->----------------------------------------------------------------------------------
 */
import UpdateRole from "@/views/system/Role/son/UpdateRole/UpdateRole.vue";
import {createFetch, useFetch} from "@vueuse/core";
import {ResponseData} from "@/utils/request";

const updateRoleRef = ref<InstanceType<typeof UpdateRole>>(null);
//新增角色
const addClick = () => {
   updateRoleRef.value.open();
}
//修改角色
const handleEdit = (row: RolePageVo) => {
   updateRoleRef.value.open(row);
}

const typeFormatter = (row: RolePageVo) => {
   return EnumUtils.getEnumDesc(RoleTypeEnum, row.type);
}

/*
 * ------------------------------------------------------------<分配权限和菜单>----------------------------------------------------------------------------------
 */
const amongMenuRef = ref<InstanceType<typeof AmongMenu>>(null);

//分配菜单
const handleAmongMenu = (row: RolePageVo) => {
   amongMenuRef.value.open(row.id);
}

//分配权限
const handleAmongPower = (row: RolePageVo) => {

}

</script>

<style scoped>

</style>
