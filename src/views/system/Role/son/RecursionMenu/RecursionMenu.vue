<template>

   <div v-for="item in data">
      <div class="title" v-if="item.type===0">{{ item.name }}</div>
      <div class="page" v-if="item.type===1">
         <CheckAll @changeList="changeList" :item="item"/>
      </div>
      <!--只有是目录,并且有children才进行递归-->
      <RecursionMenu v-if="item.children&&item.type===0" :data="item.children"/>
   </div>

</template>

<script setup lang="ts">
import {MenuInfoVo} from "@/model/systemModel/menuModel";
import CheckAll from "@/views/system/Role/son/RecursionMenu/CheckAll.vue";
import {ref} from "vue";

const props = defineProps<{
   data: Array<MenuInfoVo>
}>();

const checkList = ref<Array<number>>([]);

const changeList = (isAdd: boolean, data: Array<number>) => {
   //为真则添加,假则删除
   if (isAdd) {
      checkList.value.push(...data);
   } else {
      data.forEach(item => {
         let indexOf = checkList.value.indexOf(item);
         checkList.value.splice(indexOf, 1)
      })
   }

}


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
