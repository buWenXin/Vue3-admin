<template>
   <el-config-provider :locale="zhCn" :size="size">
      <div class="home_app">
         <router-view v-slot="{ Component }">
            <transition>
               <component :is="Component"/>
            </transition>
         </router-view>
      </div>
   </el-config-provider>
</template>

<script lang="ts" setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import {ref} from "vue";
const size = ref("default");

</script>

<style>
body {
   margin: 0 !important;
}
</style>
