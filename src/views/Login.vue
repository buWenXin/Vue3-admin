<template>
   <div class="login_page">
      <div class="login_text">
         <div class="text">总有一天你将破蛹而出，成长得比人们期待的还要美丽。</div>
         <div class="text">但这个过程会很痛，会很辛苦，有时候还会觉得灰心。</div>
         <div class="text">面对着汹涌而来的现实，觉得自己渺小无力。</div>
         <div class="text">但这，也是生命的一部分。做好现在你能做的，然后，一切都会好的。 加油!</div>
      </div>

      <div class="login_word">
         <div class="login_title">{{ title }}</div>
         <el-form label-width="auto" class="login_from" :model="loginDto" :rules="rules" ref="ruleFormRef">
            <el-form-item prop="userName">
               <el-input v-model="loginDto.userName" :prefix-icon="UserFilled"/>
            </el-form-item>
            <el-form-item prop="password">
               <el-input v-model="loginDto.password" :prefix-icon="Lock" show-password/>
            </el-form-item>
            <el-form-item prop="code">
               <div style="display: flex;width: 100%;">
                  <el-input style="width: 55%" v-model="loginDto.code" :prefix-icon="Checked"/>
                  <img @click="getCode" class="login_imgCode" :src="authCodeVo.base64Data" alt="验证码"/>
               </div>
            </el-form-item>
            <el-form-item>
               <el-checkbox v-model="storage" label="记住密码" size="large"/>
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
import {getAuthCode, login} from "@/api/system/loginApi";
import type {AuthCodeVo, LoginDto} from "@/model/systemModel/LoginApiModel";
import type {FormInstance, FormRules} from "element-plus";
import {MyCache} from "@/utils/MyCache";
import {useRouter} from "vue-router";
import {useUserStore} from "@/stores/user";

const router = useRouter();

const title = ref(import.meta.env.VITE_TITLE);

/**
 * ------------------------------------------------------------<-登录表单->----------------------------------------------------------------------------------
 */
const loginDto: LoginDto = reactive({
   code: "",
   password: "",
   userName: "",
   uuid: ""
});
//form表单验证:
const rules = reactive<FormRules>({
   userName: [
      {required: true, message: '请输入账号', trigger: 'blur'},
   ],
   password: [
      {required: true, message: '请输入用户密码', trigger: 'blur'},
   ],
   code: [
      {required: true, message: '请输入验证码', trigger: 'blur'},
   ],
})
//from的ref对象
const ruleFormRef = ref<FormInstance>()

const userStore = useUserStore();


//提交事件,表单验证
const onSubmit = () => {
   ruleFormRef.value?.validate((valid) => {
      if (valid) {
         login(loginDto).then(res => {
            MyCache.setItem("token", res.data.token);
            MyCache.setItem("userinfo", res.data.userinfo);
            MyCache.setItem("powerKeys", res.data.powerKeys);
            //存储到pinia
            userStore.$state.powerKeys = res.data.powerKeys;
            
            //如果选择记住密码，则在登录后存储密码到本地
            storageAuth();
            router.push("/home/index");
         }).catch(() => {
            getCode();
         })
      }
   })
}
/**
 * ------------------------------------------------------------<-获取图片验证码->----------------------------------------------------------------------------------
 */
const authCodeVo = ref<AuthCodeVo>({
   base64Data: "",
   uuid: ""
});
getCode();

function getCode() {
   getAuthCode().then(res => {
      authCodeVo.value = res.data;
      loginDto.uuid = res.data.uuid;
   });
}

/**
 * ------------------------------------------------------------<-存储账号密码->----------------------------------------------------------------------------------
 */
const storage = ref(false)
const item = MyCache.getItem<LoginDto>("auth");
if (item != null) {
   storage.value = true;
   loginDto.userName = item.userName;
   loginDto.password = item.password;
}

function storageAuth() {
   //如果选择记住密码，则在登录后存储密码到本地
   if (storage.value) {
      MyCache.setItem("auth", loginDto);
   } else {
      MyCache.removeItem("auth");
   }
}


</script>

<style scoped>

.login_page {
   width: 100%;
   height: 100vh;
   box-sizing: border-box;
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

.login_imgCode {
   width: 45%;
   height: 30px;
   cursor: pointer;
}

.login_from {

}

.login_text {
   color: #ffffff;
   position: absolute;
   width: 450px;
   top: 600px;
   left: 0;
   right: 0;
   margin: auto;
}

.text {
   line-height: 2em;
}
</style>
