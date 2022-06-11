<template>
   <div class="login_page">
      <div class="login_word">
         <div class="login_title">{{ title }}</div>
         <el-form label-width="auto" class="login_from">
            <el-form-item>
               <el-input v-model="from.userName" :prefix-icon="UserFilled"/>
            </el-form-item>
            <el-form-item>
               <el-input v-model="from.password" :prefix-icon="Lock" show-password/>
            </el-form-item>
            <el-form-item>
               <el-input style="width: 60%" v-model="from.password" :prefix-icon="Checked" show-password/>

            </el-form-item>
            <el-form-item>
               <el-checkbox v-model="checked2" label="记住密码" size="large"/>
            </el-form-item>
            <el-form-item>
               <el-button style="width: 100%" type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
         </el-form>
      </div>
   </div>
</template>

<script lang="ts" setup>
import {Lock, Checked, UserFilled} from '@element-plus/icons-vue'

import {reactive, ref} from "vue";

const from = reactive({
   userName: "",
   password: ""
});
const onSubmit = () => {
   console.log("登录");
}
const checked2 = ref(false)
const title = ref(import.meta.env.VITE_TITLE);



</script>

<style scoped>

.login_page {
   width: 100%;
   height: 100vh;
   box-sizing: border-box;
   /*background: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);*/
   background-image: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);
   position: relative;
}

.login_word {
   width: 300px;
   padding: 20px;
   border-radius: 10px;
   background: #ffffff;
   position: absolute;
   top: 200px;
   left: 0;
   right: 0;
   margin: auto;
   height: 300px;
}

.login_title {
   width: 100%;
   display: flex;
   justify-content: center;
   margin-bottom: 20px;
}

.login_from {

}
</style>
