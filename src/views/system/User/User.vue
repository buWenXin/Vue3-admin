<template>

   <SearchPage :handle-search="handleSearch" :handle-refresh="handleRefresh">
      <SearchItem :span="3.5" label="账号">
         <el-input v-model="pageDto.userName"/>
      </SearchItem>
      <SearchItem :span="3.5" label="昵称">
         <el-input v-model="pageDto.nickName"/>
      </SearchItem>
   </SearchPage>

   <div class="page_edit">
      <el-button type="primary" @click="openDialog">添加用户</el-button>
   </div>

   <TablePage :table-list="tableData.tableList"
              :total="tableData.total"
              :loading="tableData.loading"
              v-model:page-size="pageDto.pageSize"
              v-model:page-index="pageDto.pageIndex"
              :get-date="getData">
      <el-table-column prop="userName" label="账号" align='center'/>
      <el-table-column prop="nickName" label="用户名称" align='center'/>
      <el-table-column prop="name" label="角色名称" align='center'/>
      <el-table-column prop="name" label="角色名称" align='center'/>
      <el-table-column prop="createBy" label="创建人" align='center'/>
      <el-table-column prop="createTime" label="创建时间" width="170" align='center'/>
      <el-table-column prop="updateBy" label="更新人" align='center'/>
      <el-table-column prop="updateTime" label="更新时间" width="170" align='center'/>
      <el-table-column width="150px" align='center' label="操作">
         <template v-slot:default="scope">
            <DropdownList title="操作菜单">
               <el-dropdown-item class="color_primary">分配角色</el-dropdown-item>
               <el-dropdown-item class="color_primary" @click="handleEdit(scope.row)">修改</el-dropdown-item>
               <el-dropdown-item class="color_primary" @click="logss(scope.row)">查看</el-dropdown-item>
               <el-dropdown-item class="color_danger" @click="logss(scope.row)">删除</el-dropdown-item>
            </DropdownList>
         </template>
      </el-table-column>
   </TablePage>

   <UpdateUser ref="updateUser" :get-data="getData"/>
</template>

<script setup lang="ts">
import {useUserPage} from "@/views/system/User/User";
import UpdateUser from "@/views/system/User/son/UpdateUser.vue";
import {useUserOpen} from "@/views/system/User/son/UpdateUser";
import type {UserPageVo} from "@/model/systemModel/userModel";
import SearchPage from "@/components/page/SearchPage/SearchPage.vue";


//页面use
let {getData, handleRefresh, handleSearch, pageDto, tableData} = useUserPage();
getData();

function logss(row: UserPageVo) {
   console.log(row);
}


let {open} = useUserOpen();

function openDialog() {
   open();
}

function handleEdit(row: UserPageVo) {
   open(row);
}

</script>

<style scoped lang="scss">


</style>
