<template>
   <el-dropdown trigger="click">
      <div class="el-dropdown-link">
         {{ title }}
         <el-icon class="el-icon--right">
            <arrow-down/>
         </el-icon>
      </div>
      <template #dropdown>
         <el-dropdown-menu>
            <slot></slot>
         </el-dropdown-menu>
      </template>
   </el-dropdown>
</template>


<script setup lang="ts">

const props = defineProps<{
   title: string
}>();

</script>

<style scoped>
.el-dropdown-link {
   cursor: pointer;
   color: var(--el-color-primary);
   display: flex;
   align-items: center;
}
</style>
