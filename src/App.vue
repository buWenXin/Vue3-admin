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
import {MyCache} from "@/utils/MyCache";
import {useUserStore} from "@/stores/user";

const size = ref("default");

const item = MyCache.getItem<Array<string>>("powerKeys");


const userStore = useUserStore();
if(item){
   userStore.$state.powerKeys = item;
}

</script>

<style>
body {
   margin: 0 !important;
}
</style>
