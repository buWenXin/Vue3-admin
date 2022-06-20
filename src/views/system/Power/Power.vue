<template>

   <SearchPage :handle-search="search" :handle-refresh="reset">
      <SearchItem :span="3" label="菜单id">
         <el-input v-model="powerPageDto.menuId"/>
      </SearchItem>
   </SearchPage>

   <TablePage :get-date="getData"
              :table-list="tableData"
              :total="tableTotal"
              :loading="tableLoading"
              v-model:page-index="powerPageDto.pageIndex"
              v-model:page-size="powerPageDto.pageSize"
   >
      <el-table-column prop="menuId" label="所属菜单" align='center'/>
      <el-table-column prop="powerDesc" label="权限描述" align='center'/>
      <el-table-column prop="powerKey" label="权限值" align='center'/>
      <el-table-column prop="createBy" label="创建人" align='center'/>
      <el-table-column prop="createTime" label="创建时间" width="170" align='center'/>
      <el-table-column prop="updateBy" label="更新人" align='center'/>
      <el-table-column prop="updateTime" label="更新时间" width="170" align='center'/>
   </TablePage>

</template>

<script setup lang="ts">
import {usePowerPageTable} from "@/views/system/Power/Power";

let {getData, tableLoading, powerPageDto, tableData, tableTotal, search, reset} = usePowerPageTable();
getData();




</script>

<style scoped>

</style>
