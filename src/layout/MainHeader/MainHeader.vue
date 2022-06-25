<template>
   <div class="main_header">
      <el-breadcrumb separator="/" class="left_nav">
         <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
         <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="right_setup">
         <div class="icon_item" @click="handleSignOut">
            <el-icon :size="20" style="margin-right: 3px">
               <switch-button/>
            </el-icon>
            <div>退出</div>
         </div>
         <div class="icon_item" @click="handleSetUp">
            <el-icon :size="20" style="margin-right: 3px">
               <tools/>
            </el-icon>
            <div>设置</div>
         </div>
         <div class="icon_item">
            <el-icon :size="20" style="margin-right: 3px">
               <coin/>
            </el-icon>
            <div>清除缓存</div>
         </div>
      </div>

   </div>
</template>

<script setup lang="ts">
import {ElMessageBox} from 'element-plus';
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import type SystemSetup from "@/layout/MainHeader/son/SystemSetup.vue";
import {MyCache} from "@/utils/MyCache";


const systemSetup = ref<InstanceType<typeof SystemSetup> | null>(null);

const router = useRouter();

const route = useRoute();
console.log(route);

function handleSignOut() {
   ElMessageBox.confirm('确定要退出登录吗?', '退出', {
      type: "warning"
   }).then(() => {
      MyCache.removeItem("token");
      MyCache.removeItem("powerKeys");
      MyCache.removeItem("userinfo");
      router.push("/login")
   })
}

//打开设置页面。
const handleSetUp = () => {
   systemSetup.value.open();
}

</script>

<style scoped>
.main_header {
   display: flex;
   width: 100%;
   box-sizing: border-box;
   background-color: #ffffff;
}

.left_nav {
   width: 70%;
   display: flex;
   align-items: center;
   white-space: nowrap;
   overflow-y: auto;
}

.right_setup {
   width: 30%;
   display: flex;
   align-items: center;
   box-sizing: border-box;
   flex-direction: row-reverse;
}

.icon_item {
   display: flex;
   cursor: pointer;
   /*padding-right: 20px;*/
   padding-left: 20px;
}

.icon_item:hover {
   color: #409EFF;
}
</style>
