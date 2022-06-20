<template>
   <el-tree-select v-model="value" :data="menuList" accordion :props="node" node-key="id" @current-change="currentChange"/>
</template>

<script setup lang="ts">
import {getMenuList} from "@/api/system/menuApi";
import {ref} from "vue";
import {MenuInfoVo} from "@/model/systemModel/menuModel";

const props = defineProps<{
   value: number
}>();

const emits = defineEmits<{
   (e: "update:value", n: number): void,
}>();

const menuList = ref<Array<MenuInfoVo>>([]);

const node = {
   children: 'children',
   label: 'name',
}
//获取数据
getMenuList().then(res => {
   const menuInfoVo: MenuInfoVo = {
      children: [], componentPath: "", icon: "", id: 0, name: "主目录", parentId: 0, perms: "", routerPath: "", sortInt: 0, status: "", statusName: "", type: 0
   }
   menuInfoVo.children = res.data;
   menuList.value.push(menuInfoVo)
})

/**
 * 选中时触发
 * @param row
 */
const currentChange = (row: MenuInfoVo) => {
   if (row.type == 1) {
      //修改触发事件，进行双向绑定
      emits("update:value", row.id)
   }
}

</script>

<style scoped>

</style>
