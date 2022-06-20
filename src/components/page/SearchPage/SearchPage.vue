<template>
   <div class="page_Header">
      <el-form>
         <el-row :gutter="15">
            <slot>
            </slot>
            <el-form-item>
               <el-button type="primary" :icon="Search" @click="handleSearch">搜索</el-button>
               <el-button type="warning" :icon="Refresh" @click="handleRefresh">重置</el-button>
            </el-form-item>
         </el-row>
      </el-form>
   </div>
</template>

<script setup lang="ts">
import {Search, Refresh} from '@element-plus/icons-vue';

const props = defineProps<{
   handleSearch(): void;
   handleRefresh(): void,
}>();


</script>


