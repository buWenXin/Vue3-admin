import {App, DirectiveBinding} from "vue";

export default {
   //插件的初始化函数,
   install: (app: App) => {
      //在插件中注册了一个自定义指令
      app.directive("permission", {
         mounted(el: HTMLElement,bing: DirectiveBinding) {
            console.log("插件启动了");
         }
      })
   }
}
