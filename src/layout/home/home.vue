<template>
   <div class="home">
      <div class="sidebar">
         <Sidebar/>
      </div>
      <div class="main">
         <div class="main_header">
            <MainHeader/>
         </div>
         <div class="main_page">
            <RouterView/>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import Sidebar from "@/layout/Sidebar/Sidebar.vue";
import MainHeader from "@/layout/MainHeader/MainHeader.vue";


</script>

<style scoped lang="scss">
.home {
   --sidebar-width: 200px;
   --main-header: 45px;
}

.home {
   box-sizing: border-box;
   height: 100vh;
   width: 100%;
   overflow: hidden;
   display: flex;
   background-color: #F5F7FA;
}


.sidebar {
   width: var(--sidebar-width);
   height: 100vh;
}

.main {
   width: calc(100vw - var(--sidebar-width));
   height: 100vh;
}

.main_header {
   height: var(--main-header);
   padding: 0 10px;
}

.main_page {
   width: 100%;
   height: calc(100vh - var(--main-header));
   box-sizing: border-box;
   padding: 10px;
   overflow: auto
}

</style>
