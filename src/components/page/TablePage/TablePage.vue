<template>
   <div class="page_Table">
      <el-table :data="tableList" border v-loading="loading" :header-cell-style="{background:'#42b8dd',color:'#fff'}">
         <slot></slot>
      </el-table>
      <div style="margin-top: 10px;display: flex;flex-direction: row-reverse">
         <el-pagination
               v-model:currentPage="pageIndex"
               v-model:page-size="pageSize"
               :page-sizes="[10, 30, 50, 100]"
               layout="total, sizes, prev, pager, next, jumper"
               :total="total"
               @size-change="handleSizeChange"
               @current-change="handleCurrentChange"
         />
      </div>
   </div>
</template>

<script setup lang="ts">

const props = defineProps<{
   /**
    * loading效果
    */
   loading: boolean,
   /**
    * table的数据
    */
   tableList: Array<any>,
   /**
    * 分页查询index
    */
   pageIndex: number,
   /**
    * 分页查询size
    */
   pageSize: number,
   /**
    * table数据的总数
    */
   total: number,
   /**
    * 获取数据函数
    */
   getDate: Function
}>();

//v-model 绑定修改事件
const emits = defineEmits<{
   (e: "update:pageIndex", n: number): void,
   (e: "update:pageSize", n: number): void,
}>();

/**
 * 条数触发事件
 */
const handleSizeChange = (val: number) => {
   emits("update:pageSize", val);
   props.getDate();
}

/**
 * 页数触发事件
 */
const handleCurrentChange = (val: number) => {
   emits("update:pageIndex", val);
   props.getDate();
}

</script>

<style scoped>

</style>
