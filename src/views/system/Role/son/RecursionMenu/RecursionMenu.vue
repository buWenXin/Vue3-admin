<template>

   <!-- type:0目录 1页面 2按钮权限-->
   <div v-for="item in data">
      <div class="title" v-if="item.type===0">{{ item.name }}</div>
      <div class="page" v-if="item.type===1">
         <CheckAll @changeList="changeList" :item="item"/>
      </div>
      <!--只有是目录,并且有children才进行递归-->
      <RecursionMenu v-if="item.children&&item.type===0" :data="item.children" :check-list="checkList"/>
   </div>

</template>

<script setup lang="ts">
import {MenuInfoVo} from "@/model/systemModel/menuModel";
import CheckAll from "@/views/system/Role/son/RecursionMenu/CheckAll.vue";

const props = defineProps<{
   //递归渲染的数据
   data: Array<MenuInfoVo>,
   defaultData?: Array<number>,
   //选中的值list
   checkList: number[]
}>();

//监听子组件的事件,进行处理
const changeList = (isAdd: boolean, list: Array<number>) => {
   //为真则添加,假则删除
   if (isAdd) {
      props.checkList.push(...list);
   } else {
      list.forEach(item => {
         let indexOf = props.checkList.indexOf(item);
         props.checkList.splice(indexOf, 1)
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
