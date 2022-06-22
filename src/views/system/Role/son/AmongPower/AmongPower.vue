<template>
   <el-dialog v-model="dialogVisible" title="菜单权限" width="30%" :destroy-on-close="true" :close-on-click-modal="false">

      <RecursionMenu :data="menuData" :default-data="arrlist" @change="powerChange"/>
      <template #footer>
         <div class="dialog-footer">
            <el-button @click="close">关闭</el-button>
            <el-button type="primary" @click="onSubmit">提交</el-button>
         </div>
      </template>
   </el-dialog>
</template>

<script setup lang="ts">
import {ref} from "vue";

import {ElMessage, ElTree} from "element-plus";
import {AmongMenuDto} from "@/model/systemModel/roleModel";
import {amongMenu} from "@/api/system/roleApi";
import {useAmongPowerFormData} from "@/views/system/Role/son/AmongPower/AmongPower";
import RecursionMenu from "@/views/system/Role/son/RecursionMenu/RecursionMenu.vue";

let arrlist: number[] = [2, 3, 12]

const props = defineProps<{
   //提交后，父页面刷新函数
   getData(): void
}>();
//获取菜单数据
let {getMenuData, loading, menuData} = useAmongPowerFormData();

/*
 * ------------------------------------------------------------<-页面控制->----------------------------------------------------------------------------------
 */
const dialogVisible = ref(false);
let roleId: number = 0;

//打开弹出层
const open = (id: number) => {
   roleId = id;
   dialogVisible.value = true;
   getMenuData(id);

}
//关闭
const close = () => {
   dialogVisible.value = false;
}
defineExpose({
   open
})

const powerChange = (list: number[]) => {
   console.log(list);
}

const onSubmit = () => {

}

</script>

<style scoped>
.dialog-footer button:first-child {
   margin-right: 10px;
}
</style>
