<template>
   <el-col :span="span" :lg="span+1" :xl="span">
      <el-form-item :label="label">
         <slot></slot>
      </el-form-item>
   </el-col>
</template>

<script setup lang="ts">
const props = defineProps<{
   span: number,
   label: string
}>();

</script>

<style scoped>

</style>
