<template>
   <el-dialog v-model="dialogVisible" title="菜单权限" width="28%" :destroy-on-close="true" :close-on-click-modal="false">
      <el-tree
            ref="treeRef"
            :data="menuData"
            show-checkbox
            default-expand-all
            node-key="id"
            highlight-current
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

let {getMenuData, loading, menuData} = useGetMenuData();

let {getMenuIds, menuIds} = useGetMenuIds();


/*
 * ------------------------------------------------------------<-页面控制->----------------------------------------------------------------------------------
 */
const dialogVisible = ref(false);


const open = (roleId: number) => {
   dialogVisible.value = true;
   getMenuData();
   getMenuIds(roleId);
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
      menuIds: [],
      roleId: 1
   }
   amongMenuDto.menuIds = getCheckedKeys() as Array<number>;
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
