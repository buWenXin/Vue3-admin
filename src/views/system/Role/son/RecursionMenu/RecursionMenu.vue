<template>

   <div v-for="item in data">
      <div class="title" v-if="item.type===0">{{ item.name }}</div>
      <div class="page" v-if="item.type===1">
         <div>{{ item.name }}</div>

         <el-checkbox-group v-model="checkList" @change="itemChange">
            <el-checkbox v-for="it in item.children" :label="it.id">{{it.name}}</el-checkbox>
         </el-checkbox-group>
      </div>
      <!--只有是目录,并且有children才进行递归-->
      <RecursionMenu v-if="item.children&&item.type===0" :data="item.children"/>
   </div>

</template>

<script setup lang="ts">

import {MenuInfoVo} from "@/model/systemModel/menuModel";
import {ref} from "vue";

const checkList = ref<Array<number>>([])
const props = defineProps<{
   //提交后，父页面刷新函数
   data: Array<MenuInfoVo>
}>();

const itemChange = (val: any) => {
   console.log(val);
}

/*
 * ------------------------------------------------------------<-->----------------------------------------------------------------------------------
 */

</script>

<style scoped>
.title {
   font-weight: bold;
}

.page_box {
   display: flex;
}

.page {
   color: #7aa2f7;
   margin-left: 10px;
}

.power {
   margin-left: 20px;
   display: flex;
   align-items: center;
}
</style>
