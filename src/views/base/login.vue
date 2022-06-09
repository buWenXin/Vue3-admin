<template>
   <div style="width: 280px;height: 500px;margin:100px auto">
      <el-form label-width="auto">
         <el-form-item label="账号">
            <el-input v-model="from.userName"/>
         </el-form-item>
         <el-form-item label="密码">
            <el-input v-model="from.password" show-password/>
         </el-form-item>
         <el-form-item>
            <div style="width: 100%;display: flex;justify-content: center">
               <el-button style="width: 80%" round type="primary" @click="onSubmit">登录</el-button>
            </div>
         </el-form-item>
      </el-form>
   </div>
</template>

<script lang="ts" setup>
import {reactive} from "vue";

const from = reactive({
   userName: "",
   password: ""
});

const onSubmit = () => {
   console.log("登录");
}
</script>

<style scoped>

</style>
