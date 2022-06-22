<template>
   <div>
      <el-checkbox
            v-model="checkAll"
            :indeterminate="isIndeterminate"
            @change="handleCheckAllChange"> {{ item.name }}
      </el-checkbox>
      <div>
         <el-checkbox-group v-model="checkList" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="it in item.children" :label="it.id">{{ it.name }}</el-checkbox>
         </el-checkbox-group>
      </div>
   </div>
</template>

<script setup lang="ts">
import {MenuInfoVo} from "@/model/systemModel/menuModel";
import {ref, watch} from "vue";

const props = defineProps<{
   item: MenuInfoVo
}>();

//v-model 绑定修改事件
const emits = defineEmits<{
   (e: "changeList", is: boolean, n: Array<number>): void,
}>();

const checkList = ref<Array<number>>([]);

/*
 * ------------------------------------------------------------<-全选->----------------------------------------------------------------------------------
 */
//全选的值
const allList: Array<number> = []
props.item.children.forEach(item => {
   allList.push(item.id)
})
//全选按钮控制
const checkAll = ref(false)
const isIndeterminate = ref(true)

//全选按钮选中事件
const handleCheckAllChange = (val: boolean) => {
   checkList.value = val ? allList : []
   isIndeterminate.value = false
}
//多选点击事件
const handleCheckedCitiesChange = (value: string[]) => {
   const checkedCount = value.length
   checkAll.value = checkedCount === allList.length
   isIndeterminate.value = checkedCount > 0 && checkedCount < allList.length
}
//监听checkList变化
watch(checkList, (newVal: Array<number>, oldVal: Array<number>) => {

   const repach: Array<number> = []

   newVal.forEach(item => {
      if (oldVal.includes(item)) {
         //有则抵消;
         repach.push(item);
      }
   })

   const newValue = [...newVal];
   const oldValue = [...oldVal];


   repach.forEach(item => {
      let number = newValue.indexOf(item);
      newValue.splice(number, 1);

      let indexOf = oldValue.indexOf(item);
      oldValue.splice(indexOf, 1)

   })


   console.log("-------------------");
   if (newValue.length > 0) {
      console.log("添加:" + newValue);
      //告诉上面,需要添加什么,或者删除什么
      emits("changeList", true, newValue)
   } else {
      console.log("删除:" + oldValue);
      emits("changeList", false, oldValue)
   }


})


</script>

<style scoped>

</style>
