<template>
   <div class="page_Table">
      <el-table :data="tableList" border v-loading="loading">
         <el-table-column prop="name" label="角色名称" align='center'/>
         <el-table-column prop="createBy" label="创建人" align='center'/>
         <el-table-column prop="createTime" label="创建时间" width="170" align='center'/>
         <el-table-column prop="updateBy" label="更新人" align='center'/>
         <el-table-column prop="updateTime" label="更新时间" width="170" align='center'/>
      </el-table>
      <div style="margin-top: 10px;display: flex;flex-direction: row-reverse">
         <slot></slot>
      </div>
   </div>
</template>

<script setup lang="ts">

import type {RolePageVo} from "@/model/systemModel/roleModel";

defineProps<{
   loading: boolean,
   tableList: Array<RolePageVo>,
}>()

</script>

<style scoped>

</style>
