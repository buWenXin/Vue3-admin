import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
/**
 * ------------------------------------------------------------<-element-plus 配置->----------------------------------------------------------------------------------
 */
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'element-plus/dist/index.css'
import "@/style/BasePage.scss"
//注册icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(createPinia())
app.use(router);

app.mount('#app')
