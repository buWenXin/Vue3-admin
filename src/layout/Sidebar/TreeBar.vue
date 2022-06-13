<template>
   <div>
      <template v-for="item in props.list">
         <el-sub-menu :index="'/home/'+item.routerPath" v-if="item.type===0&&item.children.length>0">
            <template #title>
               <el-icon>
                  <component :is="item.icon"></component>
               </el-icon>
               <span>{{ item.name }}</span>
            </template>
            <template v-if="item.children.length>0">
               <TreeBar :list="item.children" :parent-path="item.routerPath"/>
            </template>
         </el-sub-menu>
         <el-menu-item @click="itemClick(item.routerPath)" :index="'/home/'+item.routerPath" v-if="item.type===1">
            <el-icon>
               <component :is="item.icon"></component>
            </el-icon>
            {{ item.name }}
         </el-menu-item>
      </template>
   </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";



import type {MenuInfoVo} from "@/model/systemModel/menuModel";
import type {MenuHTMLAttributes} from "vue";

const props = defineProps<{
   list: MenuHTMLAttributes | MenuInfoVo[],
}>();

const router = useRouter();


function itemClick(path: string) {
   router.push("/home/" + path);
}
</script>

<style scoped>

</style>
