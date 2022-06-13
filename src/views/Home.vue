<template>
   <div>
      home
      {{ref1}}
   </div>
   <div>
      <router-view v-slot="{ Component }">
         <transition>
            <component :is="Component"/>
         </transition>
      </router-view>
   </div>
</template>

<script lang="ts" setup>
   import {ref} from "vue";
   const ref1 = ref<string>(import.meta.env.VITE_TITLE);
   console.log(import.meta.env.VITE_TEST);
</script>

<style scoped>

</style>
