<template>
   <el-dialog v-model="dialogVisible" title="菜单权限" width="30%" :destroy-on-close="true" :close-on-click-modal="false">
      <RecursionMenu :data="menuData" :check-list="fromData.powerId"/>
      <template #footer>
         <div class="dialog-footer">
            <el-button @click="close">关闭</el-button>
            <el-button type="primary" @click="onSubmit">提交</el-button>
         </div>
      </template>
   </el-dialog>
</template>


<script setup lang="ts">
import {provide, Ref, ref} from "vue";
import {useAmongPowerFormData} from "@/views/system/Role/son/AmongPower/AmongPower";
import RecursionMenu from "@/views/system/Role/son/RecursionMenu/RecursionMenu.vue";
import {assignPower, getRolePowers} from "@/api/system/roleApi";
import {AmongPowerDto} from "@/model/systemModel/roleModel";

const props = defineProps<{
   //提交后，父页面刷新函数
   getData(): void
}>();
//获取菜单数据
let {getMenuData, loading, menuData} = useAmongPowerFormData();


/*
 * ------------------------------------------------------------<-页面控制->----------------------------------------------------------------------------------
 */
//默认选中数据
const defaultList = ref<number[]>([])
//子组件供给数据
provide<Ref<number[]>>("defaultList", defaultList)
//显示控制
const dialogVisible = ref(false);

//提交的dto
const fromData: AmongPowerDto = {
   powerId: [],
   roleId: 0
}

//打开弹出层
const open = (id: number) => {
   getMenuData(id);
   fromData.roleId = id;
   fromData.powerId = [];
   //获取数据的默认值
   getRolePowers(id).then(res => {
      defaultList.value = res.data;
      dialogVisible.value = true;
   })
}

//关闭
const close = () => {
   dialogVisible.value = false;
}

//提交事件
const onSubmit = () => {
   assignPower(fromData).then(res => {
      close();
      props.getData();
   })
}


defineExpose({
   open
})
</script>

<style scoped>
.dialog-footer button:first-child {
   margin-right: 10px;
}
</style>
