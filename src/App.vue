<template>
   <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125"/>
      <div class="wrapper">
         <HelloWorld msg="You did it!"/>
         <div style="width: 600px;">
            <el-button type="primary" @click="three">改变主题色</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
         </div>

         <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
         </nav>
      </div>
   </header>

   <RouterView/>
</template>

<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import {useCssVar} from '@vueuse/core'
import {ref} from "vue";

function testClick() {
   const key = ref('--el-color-success')
   const colorVal = useCssVar(key)
   colorVal.value = "red"
}

import {useDark} from '@vueuse/core';

const isDark = useDark()

function three() {
   isDark.value = !isDark.value;
}


</script>

<style>

</style>
