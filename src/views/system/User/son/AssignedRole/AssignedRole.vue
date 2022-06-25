<template>
   <FormDto title="分配角色" v-model:dialog-visible="controlView" width="30%" :submit-api="submitForm" :from-dto="formData" @success="submitSuccess">
      <el-checkbox-group v-model="formData.roleId">
         <el-checkbox v-for="item in roleData" :label="item.id">{{ item.name }}</el-checkbox>
      </el-checkbox-group>
   </FormDto>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {getUserAllocationRole} from "@/api/system/userAPi";
import {useShowData, useSubmitForm} from "@/views/system/User/son/AssignedRole/AssignedRole";
import FormDto from "@/components/FormDialog/FormDto.vue";

const props = defineProps<{
   getData(): void
}>();

//获取展示数据
let {getShowData, roleData} = useShowData();

//提交表单use
let {formData, submitForm} = useSubmitForm();

const controlView = ref(false);
//打开页面
const open = (userId: number) => {
   controlView.value = true;
   formData.userId = userId;
   //获取用户已分配的角色
   getUserAllocationRole(userId).then(res => {
      formData.roleId = res.data;
   });
   //获取需要的数据
   getShowData();
};

//表单提交成功后回调
const submitSuccess = () => {
   console.log("表单提交成功");
}


defineExpose({
   open
})

</script>

<style scoped>

</style>
