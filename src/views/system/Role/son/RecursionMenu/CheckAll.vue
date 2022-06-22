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
import {ref} from "vue";

const props = defineProps<{
   item: MenuInfoVo
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
</script>

<style scoped>

</style>
