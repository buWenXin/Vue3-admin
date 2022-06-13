<template>
   <template v-for="item in props.list">
      <el-sub-menu :index="item.name" v-if="item.children">
         <template #title>
            <span>{{ item.name }}</span>
         </template>
         <template v-if="item.children.length>0">
            <ApiMenuItem @api-click="apiClick" :list="item.children"/>
         </template>
      </el-sub-menu>
      <el-menu-item v-else @click="apiClick(item)" :index="item.title">
         {{ item.title }}
      </el-menu-item>
   </template>
</template>

<script lang="ts" setup>
import {MenuHTMLAttributes} from "vue";
import {childrens, tagsDto} from "~/api/developerTool/model/ApisModel";

const props = defineProps<{
   list: MenuHTMLAttributes | Array<tagsDto> | Array<childrens>,
}>();

//定义事件类型
const emits = defineEmits<{
   (e: "apiClick", item: childrens): void
}>();

function apiClick(item: childrens) {
   emits("apiClick", item);
}


</script>

<style scoped>

</style>
