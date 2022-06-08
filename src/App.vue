
<template>
   <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125"/>

      <div class="wrapper">
         <HelloWorld msg="You did it!"/>
         <div style="width: 600px;">
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
         </div>
         <el-select v-model="value" clearable placeholder="Select">
            <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
            />
         </el-select>
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

import { ref } from 'vue'

const value = ref('')
const options = [
   {
      value: 'Option1',
      label: 'Option1',
   },
   {
      value: 'Option2',
      label: 'Option2',
   },
   {
      value: 'Option3',
      label: 'Option3',
   },
   {
      value: 'Option4',
      label: 'Option4',
   },
   {
      value: 'Option5',
      label: 'Option5',
   },
]
</script>

<style>
@import '@/assets/base.css';

#app {
   max-width: 1280px;
   margin: 0 auto;
   padding: 2rem;

   font-weight: normal;
}

header {
   line-height: 1.5;
   max-height: 100vh;
}

.logo {
   display: block;
   margin: 0 auto 2rem;
}

a,
.green {
   text-decoration: none;
   color: hsla(160, 100%, 37%, 1);
   transition: 0.4s;
}

@media (hover: hover) {
   a:hover {
      background-color: hsla(160, 100%, 37%, 0.2);
   }
}

nav {
   width: 100%;
   font-size: 12px;
   text-align: center;
   margin-top: 2rem;
}

nav a.router-link-exact-active {
   color: var(--color-text);
}

nav a.router-link-exact-active:hover {
   background-color: transparent;
}

nav a {
   display: inline-block;
   padding: 0 1rem;
   border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
   border: 0;
}

@media (min-width: 1024px) {
   body {
      display: flex;
      place-items: center;
   }

   #app {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 0 2rem;
   }

   header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
   }

   header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
   }

   .logo {
      margin: 0 2rem 0 0;
   }

   nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;
   }
}
</style>
