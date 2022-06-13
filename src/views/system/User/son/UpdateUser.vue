<template>
   <FormDialog :title="title" width="30%" v-model:dialog-visible="visible" :from-dto="userSaveDto" :rules="rules" :get-data="getData"
               :submit-api="updateUser">
      <template #content>
         <el-col :span="12">
            <el-form-item label="账号" prop="userName">
               <el-input v-model="userSaveDto.userName"/>
            </el-form-item>
         </el-col>
         <el-col :span="12">
            <el-form-item label="密码" prop="password">
               <el-input v-model="userSaveDto.password"/>
            </el-form-item>
         </el-col>
         <el-col :span="12">
            <el-form-item label="昵称">
               <el-input v-model="userSaveDto.nickName"/>
            </el-form-item>
         </el-col>
         <el-col :span="12">
            <el-form-item label="类型">
               <el-input v-model="userSaveDto.userType"/>
            </el-form-item>
         </el-col>
      </template>
   </FormDialog>
</template>

<script setup lang="ts">
import {updateUser} from "~/api/system/userAPi";
import {useUserUpdate} from "~/view/system/User/son/UpdateUser";

let {rules, title, userSaveDto, visible} = useUserUpdate();

const props = defineProps<{
   getData(): void
}>();

</script>

<style scoped>
.dialog-footer button:first-child {
   margin-right: 10px;
}
</style>
