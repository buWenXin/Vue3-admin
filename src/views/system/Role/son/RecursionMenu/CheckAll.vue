<template>
   <div>
      <el-checkbox
            v-if="item.children.length>0"
            v-model="checkAll"
            :indeterminate="isIndeterminate"
            @change="handleCheckAllChange"> {{ item.name }}
      </el-checkbox>
      <div v-else>{{ item.name }}</div>
      <div>
         <el-checkbox-group v-model="checkList" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="it in item.children" :label="it.id">{{ it.name }}</el-checkbox>
         </el-checkbox-group>
      </div>
   </div>
</template>

<script setup lang="ts">
import {MenuInfoVo} from "@/model/systemModel/menuModel";
import {inject, Ref, ref, watch} from "vue";

const props = defineProps<{
   item: MenuInfoVo,
}>();


const emits = defineEmits<{
   (e: "changeList", is: boolean, n: Array<number>): void,
}>();


/*
 * ------------------------------------------------------------<-全选->----------------------------------------------------------------------------------
 */
//选中的list
const checkList = ref<Array<number>>([]);
//全选的值
const allList: Array<number> = []
//全选按钮控制
const checkAll = ref(false);
//选中样式
const isIndeterminate = ref(false)

//添加全选的list集合
props.item.children.forEach(item => {
   allList.push(item.id)
})


//全选按钮选中事件
const handleCheckAllChange = (val: boolean) => {
   checkList.value = val ? allList : []
   isIndeterminate.value = false
}

//多选值变化触发事件
function handleCheckedCitiesChange(value: number[]) {
   const checkedCount = value.length
   checkAll.value = checkedCount === allList.length
   isIndeterminate.value = checkedCount > 0 && checkedCount < allList.length
}

//监听checkList变化,告诉父组件要添加还是删除
watch(checkList, (newVal: Array<number>, oldVal: Array<number>) => {
   const repach: Array<number> = []
   newVal.forEach(item => {
      if (oldVal.includes(item)) {
         repach.push(item);
      }
   })
   const newValue = [...newVal];
   const oldValue = [...oldVal];
   //相同的抵消
   repach.forEach(item => {
      newValue.splice(newValue.indexOf(item), 1);
      oldValue.splice(oldValue.indexOf(item), 1)
   })
   //判断是添加还是删除
   if (newValue.length > 0) {
      emits("changeList", true, newValue)
   } else {
      emits("changeList", false, oldValue)
   }
})
/*
 * ------------------------------------------------------------<-默认选中处理->----------------------------------------------------------------------------------
 */
//获取默认勾选数据
const defaultList = inject<Ref<number[]>>("defaultList");
//默认选中的值
const kind: number[] = [];
allList.forEach(item => {
   if (defaultList?.value.includes(item)) {
      kind.push(item)
   }
})
checkList.value = kind;
//判断处理样式
if (kind.length == allList.length) {
   checkAll.value = true;
} else if (kind.length > 0) {
   isIndeterminate.value = true;
}


</script>

<style scoped>

</style>
