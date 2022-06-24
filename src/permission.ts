import {App, DirectiveBinding} from "vue";
import {useUserStore} from "@/stores/user";

export default {
   //插件的初始化函数,
   install: (app: App) => {
      const userStore = useUserStore();
      //在插件中注册了一个自定义指令
      app.directive("permission", {
         mounted(el: HTMLElement, bing: DirectiveBinding) {
            // parentNode
            if(!userStore.$state.powerKeys.includes(bing.value)){
               el.parentNode?.removeChild(el);
            }
         }
      })
   }
}
