<template>


   <TablePage :get-date="getData"
              :page-index="pageDto.pageIndex"
              :page-size="pageDto.pageSize"
              :table-list="tableData.tableList"
              :total="tableData.total"
              :loading="tableData.loading"
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
import {usePowerPage} from "@/views/system/Power/Power";

let {getData, handleRefresh, handleSearch, pageDto, tableData} = usePowerPage();
getData();
</script>

<style scoped>

</style>
