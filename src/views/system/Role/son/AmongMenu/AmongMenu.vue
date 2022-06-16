<template>
   <el-dialog v-model="dialogVisible" title="菜单权限" width="28%" :destroy-on-close="true" :close-on-click-modal="false">
      <el-tree
            ref="treeRef"
            :data="menuData"
            show-checkbox
            default-expand-all
            node-key="id"
            v-loading="loading"
            highlight-current
            :default-checked-keys="menuIds"
            :props="defaultProps"
      />

      <template #footer>
         <div class="dialog-footer">
            <el-button @click="amongMenuClose">关闭</el-button>
            <el-button type="primary" @click="onSubmit" v-loading="loading">提交</el-button>
         </div>
      </template>
   </el-dialog>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useAmongMenuControl} from "@/views/system/Role/son/AmongMenu/AmongMenu";
import {ElMessage, ElTree} from "element-plus";
import {AmongMenuDto} from "@/model/systemModel/roleModel";
import {amongMenu} from "@/api/system/roleApi";

const props = defineProps<{
   //提交后，父页面刷新函数
   getData(): void
}>();

//页面ts
let {amongMenuClose, dialogVisible, menuData, loading, menuIds, roleId} = useAmongMenuControl();


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
      roleId: roleId
   }
   console.log(roleId);
   amongMenuDto.menuIds = getCheckedKeys() as Array<number>;
   amongMenu(amongMenuDto).then(res => {
      ElMessage.success("分配成功");
      amongMenuClose();
      props.getData();
   })
}
</script>

<style scoped>
.dialog-footer button:first-child {
   margin-right: 10px;
}
</style>
