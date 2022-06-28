<template>
   <div>
      <el-menu :default-active="$route.path" unique-opened style="height: 100vh" background-color="#fff">
         <div class="sidebar_title">
<!--            <img height="60" src="../../assets/logo1.png"/>-->
            {{title}}
         </div>
         <TreeBar :list="userStore.menu"/>
      </el-menu>
   </div>
</template>
<!--EFF7FF-->

<script setup lang="ts">
import TreeBar from "@/layout/Sidebar/TreeBar.vue";
import {useUserStore} from "@/stores/user";
import {ref} from "vue";
const userStore = useUserStore();
const title = ref(import.meta.env.VITE_TITLE);
</script>

<style scoped>
.sidebar_title {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 60px;
}
</style>
