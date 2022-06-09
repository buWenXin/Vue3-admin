<template>
   <div class="home_app">
      <router-view v-slot="{ Component }">
         <transition>
            <component :is="Component"/>
         </transition>
      </router-view>
   </div>
</template>

<script setup lang="ts">

</script>

<style>

</style>
