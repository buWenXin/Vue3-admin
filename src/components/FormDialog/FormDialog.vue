<template>
   <el-dialog v-model="dialogVisible" :title="title" :width="width" :destroy-on-close="true" :close-on-click-modal="false" :before-close="onClose">

      <el-form label-width="auto" :model="fromDto" :rules="rules" ref="ruleFormRef">
         <el-row :gutter="10">
            <slot name="content"></slot>
         </el-row>
      </el-form>

      <template #footer>
         <div class="dialog-footer">
            <el-button @click="close">关闭</el-button>
            <el-button type="primary" @click="onSubmit" :loading="loading">提交</el-button>
         </div>
      </template>
   </el-dialog>
</template>

<script setup lang="ts">
import type {FormInstance} from 'element-plus'
import {ref} from "vue";
import type {ResponseData} from "@/utils/request";
import {ElMessage} from 'element-plus'

const props = defineProps<{
   //标题
   title: string,
   //宽度
   width: string
   //控制显示
   dialogVisible: boolean,
   //from 提交的对象
   fromDto: any,
   //表单验证规则
   rules: any,
   //表单提交函数
   submitApi(data: any): Promise<ResponseData<any>>,
   //提交后，父页面刷新函数
   getData(): void
}>();

/**
 * ------------------------------------------------------------<-表单提交处理->----------------------------------------------------------------------------------
 */

const loading = ref(false);

//from的ref对象
const ruleFormRef = ref<FormInstance>()
//提交事件,表单验证
const onSubmit = () => {
   if (props.rules) {
      ruleFormRef.value?.validate((valid) => {
         if (valid) {
            loading.value = true;
            props.submitApi(props.fromDto).then(res => {
               ElMessage.success(res.msg);
               close();
               props.getData();
            }).finally(() => {
               loading.value = false
            })
         }
      })
   } else {
      loading.value = true;
      props.submitApi(props.fromDto).then(res => {
         ElMessage.success(res.msg);
         close();
         props.getData();
      }).finally(() => {
         loading.value = false
      })
   }
}

/**
 * ------------------------------------------------------------<-关闭页面处理->----------------------------------------------------------------------------------
 */
//自定义事件
const emits = defineEmits<{
   (e: "update:dialogVisible", is: boolean): void
}>();

//监听关闭的回调
function onClose() {
   close();
}

//关闭事件,向外触发
const close = () => {
   emits("update:dialogVisible", false);
}

</script>

<style scoped>
.dialog-footer button:first-child {
   margin-right: 10px;
}
</style>
