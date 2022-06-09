import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
/**
 * ------------------------------------------------------------<-element-plus 样式表->----------------------------------------------------------------------------------
 */

import 'element-plus/theme-chalk/dark/css-vars.css';
import 'element-plus/dist/index.css'

app.use(createPinia())
app.use(router)

app.mount('#app')
