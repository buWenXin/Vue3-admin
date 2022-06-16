<template>
   <div class="main_header">
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

      <SystemSetup ref="systemSetup"/>
   </div>
</template>

<script setup lang="ts">
import {ElMessage, ElMessageBox} from 'element-plus'
import {useRouter} from "vue-router";
import {ref} from "vue";
import type SystemSetup from "@/layout/MainHeader/son/SystemSetup.vue";
import {MyCache} from "@/utils/MyCache";


const systemSetup = ref<InstanceType<typeof SystemSetup> | null>(null);

const router = useRouter();


function handleSignOut() {
   ElMessageBox.confirm('确定要退出登录吗?', '退出', {
      type: "warning"
   }).then(() => {
      MyCache.removeItem("token");
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
   flex-direction: row-reverse;
   width: 100%;
   align-items: center;
   box-sizing: border-box;
   padding-right: 10px;
}

.icon_item {
   display: flex;
   cursor: pointer;
   padding-right: 20px;
}

.icon_item:hover {
   color: #409EFF;
}
</style>
