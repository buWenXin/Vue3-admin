<template>
   <el-drawer v-model="visible" size="20%" title="系统设置">
      <div>
         <div style="width: 100%;display: flex;justify-content: center;font-size: 16px;font-weight: bold">导航栏背景色</div>
         <div style="margin-top: 10px">
            <div style="display: flex;justify-content: center;align-content: center">
               <my-radio>
                  <radio-item name="id1" bgcolor="#409EFF"></radio-item>
                  <radio-item name="id2" bgcolor="#409EFF"></radio-item>
                  <radio-item name="id3" bgcolor="#409EFF"></radio-item>
                  <radio-item name="id4" bgcolor="#409EFF"></radio-item>
               </my-radio>
            </div>
         </div>
      </div>

   </el-drawer>
</template>

<script setup lang="ts">
import {ref} from "vue";

const ref1 = ref("id1");
const visible = ref<boolean>(false);


const open = () => {
   visible.value = true;
};
defineExpose({
   open
})
</script>

<style scoped>

</style>
