<template>
   <div>
      <el-menu :default-active="$route.path" unique-opened style="height: 100vh" background-color="#fff">
         <div class="sidebar_title">
<!--            <img height="60" src="../../assets/logo1.png"/>-->
         </div>
         <TreeBar :list="userStore.menu"/>
      </el-menu>
   </div>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";
import TreeBar from "@/layout/Sidebar/TreeBar.vue";
import {useUserStore} from "@/stores/user";
const userStore = useUserStore;
const router = useRouter();


</script>

<style scoped>
.sidebar_title {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 60px;
}
</style>
