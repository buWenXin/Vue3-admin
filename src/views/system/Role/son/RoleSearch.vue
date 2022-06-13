<template>
   <div class="page_Header">
      <el-form inline>
         <el-form-item label="角色名称">
            <el-input v-model="pageDto.name"/>
         </el-form-item>
         <el-form-item label="角色类型">
            <el-input />
         </el-form-item>
         <el-form-item label="角色状态">
            <el-input/>
         </el-form-item>
         <el-form-item label="角色权限字符串">
            <el-input v-model="pageDto.roleKey"/>
         </el-form-item>
         <el-form-item>
            <el-button type="primary" :icon="Search" @click="handleSearch">搜索</el-button>
            <el-button type="warning" :icon="Refresh" @click="handleRefresh">重置</el-button>
         </el-form-item>
      </el-form>
   </div>
</template>

<script setup lang="ts">
import {Search, Refresh} from '@element-plus/icons-vue';
const props = defineProps<{
   handleSearch: Function;
   getPageDto: Function
}>();
const pageDto = props.getPageDto();

const handleRefresh = () => {

}
</script>


