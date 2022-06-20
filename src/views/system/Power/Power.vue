<template>

   <SearchPage :handle-search="search" :handle-refresh="reset">
      <SearchItem :span="3" label="菜单id">
         <el-input v-model="powerPageDto.menuId"/>
      </SearchItem>
   </SearchPage>

   <div class="page_edit">
      <el-button type="primary" @click="createHandle">添加权限</el-button>
   </div>

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
      <el-table-column label="操作" width="130" align='center'>
         <template v-slot:default="scope">
            <el-button type="primary" size="small" @click="updateHandle(scope.row)">修改</el-button>
         </template>
      </el-table-column>
   </TablePage>

   <PowerSave ref="powerSaveRef"></PowerSave>

</template>

<script setup lang="ts">
import {usePowerPageTable} from "@/views/system/Power/Power";
import {PowerPageVo} from "@/model/systemModel/PowerModel";
import PowerSave from "@/views/system/Power/son/PowerSave/PowerSave.vue";
import {ref} from "vue";

let {getData, tableLoading, powerPageDto, tableData, tableTotal, search, reset} = usePowerPageTable();
getData();

const powerSaveRef = ref<InstanceType<typeof PowerSave>>(null);
// 新增权限
const createHandle = () => {
   powerSaveRef.value.open();
}

//修改
const updateHandle = (row: PowerPageVo) => {
   powerSaveRef.value.open(row.id);
}


</script>

<style scoped>

</style>
