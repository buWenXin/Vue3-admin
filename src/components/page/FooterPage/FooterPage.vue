<template>
   <div>
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
</template>

<script setup lang="ts">

const props = defineProps<{
   pageIndex: number,
   pageSize: number,
   total: number,
   getDate: Function,
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
