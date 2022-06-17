<template>
   <el-dialog v-model="dialogVisible" title="菜单权限" width="28%" :destroy-on-close="true" :close-on-click-modal="false">
      <el-tree
            ref="treeRef"
            :data="menuData"
            show-checkbox
            default-expand-all
            node-key="id"
            highlight-current
            v-loading="loading"
            :default-checked-keys="menuIds"
            :props="defaultProps"/>
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
import {useGetMenuData, useGetMenuIds} from "@/views/system/Role/son/AmongMenu/AmongMenu";

const props = defineProps<{
   //提交后，父页面刷新函数
   getData(): void
}>();
//获取菜单数据
let {getMenuData, loading, menuData} = useGetMenuData();
//获取已经分配的菜单ids
let {getMenuIds, menuIds} = useGetMenuIds();


/*
 * ------------------------------------------------------------<-页面控制->----------------------------------------------------------------------------------
 */
const dialogVisible = ref(false);
let roleId: number = 0;

//打开弹出层
const open = (id: number) => {
   roleId = id;
   dialogVisible.value = true;
   getMenuData();
   getMenuIds(id);
}
//关闭
const close = () => {
   dialogVisible.value = false;
}
defineExpose({
   open
})
/*
 * ------------------------------------------------------------<-树形组件->----------------------------------------------------------------------------------
 */
const defaultProps = {
   children: 'children',
   label: 'name',
}
const treeRef = ref<InstanceType<typeof ElTree>>()

const getCheckedKeys = () => {
   return treeRef.value!.getCheckedKeys(false)
}


/*
 * ------------------------------------------------------------<-表单提交处理->----------------------------------------------------------------------------------
 */

//提交事件,表单验证
const onSubmit = () => {
   const amongMenuDto: AmongMenuDto = {
      menuIds: getCheckedKeys() as Array<number>,
      roleId: roleId
   }
   amongMenu(amongMenuDto).then(res => {
      ElMessage.success("分配成功");
      close();
      props.getData();
   })
}
</script>

<style scoped>
.dialog-footer button:first-child {
   margin-right: 10px;
}
</style>
