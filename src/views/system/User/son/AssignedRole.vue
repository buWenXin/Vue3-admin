<template>
   <FormDialog title="分配角色" width="30%" v-model:dialog-visible="controlView" :get-data="getData" :submit-api="allocationRole" :from-dto="formData">
      <template #content>
         <el-checkbox-group v-model="formData.roleId">
            <el-checkbox v-for="item in roleData" :label="item.id">{{ item.name }}</el-checkbox>
         </el-checkbox-group>
      </template>
   </FormDialog>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import {allocationRole, getUserAllocationRole} from "@/api/system/userAPi";
import {usegetRoleAll} from "@/views/system/User/User";
import {RolePageVo} from "@/model/systemModel/roleModel";
import {AllocationRoleDto} from "@/model/systemModel/userModel";

const props = defineProps<{
   getData(): void
}>();

const controlView = ref(false);
//渲染的数据
const roleData = ref<Array<RolePageVo>>([]);

//选中的数据
const formData: AllocationRoleDto = reactive({
   roleId: [],
   userId: 0
});


//打开页面
const open = (userId: number) => {
   controlView.value = true;
   formData.userId = userId;
   //获取用户已分配的角色
   getUserAllocationRole(userId).then(res => {
      formData.roleId = res.data;
   });

   //获取角色
   usegetRoleAll().then(res => {
      roleData.value = res.data.records;
   })

};


defineExpose({
   open
})

</script>

<style scoped>

</style>
