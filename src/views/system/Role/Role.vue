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
      <el-table-column label="操作" width="230" align='center'>
         <template v-slot:default="scope">
            <el-button type="primary" size="small" @click="handleAmongMenu(scope.row)">分配菜单</el-button>
            <el-button type="primary" size="small" @click="handleEdit(scope.row)">修改</el-button>
         </template>
      </el-table-column>
   </TablePage>
   <UpdateRole ref="updateRoleRef" :get-data="getData"/>
   <AmongMenu :get-data="getData"/>
</template>

<script setup lang="ts">
import {UseRolePage} from "@/views/system/Role/Role";
import UpdateRole from "@/views/system/Role/son/UpdateRole/UpdateRole.vue";
import type {RolePageVo} from "@/model/systemModel/roleModel";
import {RoleTypeEnum} from "@/enum/systemEnum";
import {EnumUtils} from "@/utils/Enum";
import {useRoleOpen} from "@/views/system/Role/son/UpdateRole/UpdateRole";
import {amongMenuOpen, useAmongMenuControl} from "@/views/system/Role/son/AmongMenu/AmongMenu";
import AmongMenu from "@/views/system/Role/son/AmongMenu/AmongMenu.vue";

let {getData, handleRefresh, handleSearch, pageDto, tableData} = UseRolePage();
getData();

/**
 * 打开弹出层
 */
let {open} = useRoleOpen();

const addClick = () => {
   open();
}

const handleEdit = (row: RolePageVo) => {
   open(row)
}

const typeFormatter = (row: RolePageVo) => {
   return EnumUtils.getEnumDesc(RoleTypeEnum, row.type);
}

/*
 * ------------------------------------------------------------<分配权限页面控制>----------------------------------------------------------------------------------
 */

const handleAmongMenu = (row: RolePageVo) => {
   amongMenuOpen();
}

</script>

<style scoped>

</style>
