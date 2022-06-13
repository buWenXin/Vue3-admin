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
import { ElMessage, ElMessageBox } from 'element-plus'
import {useRouter} from "vue-router";
import {ref} from "vue";
import SystemSetup from "@/layout/MainHeader/son/SystemSetup.vue";




const systemSetup = ref<InstanceType<typeof SystemSetup> | null>(null);

const router = useRouter();

const open = () => {
   ElMessageBox.confirm(
         'proxy will permanently delete the file. Continue?',
         'Warning',
         {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning',
         }
   )
         .then(() => {
            ElMessage({
               type: 'success',
               message: 'Delete completed',
            })
         })
         .catch(() => {
            ElMessage({
               type: 'info',
               message: 'Delete canceled',
            })
         })
}

function handleSignOut() {
   open();
   // Cache.removeItem("token");
   // router.push("/login")
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
