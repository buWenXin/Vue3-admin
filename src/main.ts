import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

import 'element-plus/theme-chalk/dark/css-vars.css'

app.use(createPinia())
app.use(router)

app.mount('#app')
