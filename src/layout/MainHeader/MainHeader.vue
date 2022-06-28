<template>
   <div class="main_header">
      <div class="left_nav">
         <div class="left_nav_item  ">
            <div>标题</div>
            <el-icon :size="14" class="nav_icon">
               <Close/>
            </el-icon>
         </div>
         <div class="left_nav_item">
            <div>标题</div>
            <el-icon :size="14" class="nav_icon">
               <Close/>
            </el-icon>
         </div>
         <div class="left_nav_item left_nav_item_active ">
            <div>标题</div>
            <el-icon :size="14" class="nav_icon">
               <Close/>
            </el-icon>
         </div>
         <div class="left_nav_item">
            <div>标题</div>
            <el-icon :size="14" class="nav_icon">
               <Close/>
            </el-icon>
         </div>
      </div>

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

<style scoped lang="scss">
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

   .left_nav_item {
      display: flex;
      align-items: center;
      height: 100%;;
      padding: 0 15px;

      .nav_icon {
         margin-left: 5px;
         cursor: pointer;

         &:hover {
            background-color: #7aa2f7;
            color: #fff;
         }
      }
   }

   .left_nav_item_active {
      background-color: #F5F7FA;
      color: #409EFF;
   }
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
   padding-left: 20px;
}

.icon_item:hover {
   color: #409EFF;
}


</style>
