<template>
   <el-dialog v-model="dialogVisible" title="菜单权限" width="28%" :destroy-on-close="true" :close-on-click-modal="false">
      <template #footer>
         <div class="dialog-footer">
            <el-button @click="amongMenuClose">关闭</el-button>
            <el-button type="primary" @click="onSubmit" :loading="loading">提交</el-button>
         </div>
      </template>
   </el-dialog>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useAmongMenuControl} from "@/views/system/Role/son/AmongMenu/AmongMenu";

const props = defineProps<{
   //提交后，父页面刷新函数
   getData(): void
}>();


/**
 * ------------------------------------------------------------<-表单提交处理->----------------------------------------------------------------------------------
 */

const loading = ref(false);
//提交事件,表单验证
const onSubmit = () => {

}

//页面显示控制
let {amongMenuClose, dialogVisible} = useAmongMenuControl();


</script>

<style scoped>
.dialog-footer button:first-child {
   margin-right: 10px;
}
</style>
