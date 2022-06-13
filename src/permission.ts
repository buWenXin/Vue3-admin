import {MyCache} from "@/utils/MyCache";
import {useUserStore} from "@/stores/user";
import type {RouteLocationNormalized} from "vue-router";
import {useRouter} from "vue-router";

const router = useRouter();

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
   let token = MyCache.getItem<string>("token");
   //判断是否登录
   if (token) {
      //如果已经在登录页面，则不理会
      if (to.path == "/login") {
         return from.path
      }
      let userStore = useUserStore();
      //判断是否已经注册动态路由，页面刷新后，注册的路由也会丢失，也会进入判断注册路由
      if (userStore.menu.length == 0) {
         try {
            let res = await userStore.getMenu();
            userStore.registerRouter(router, res);
            return to.path;
         } catch (e) {
            console.log("导航错误");
            return false;
         }
      }
   } else {
      //如果没有登录，并且不在登录页面，则跳转到登录页面
      if (to.path != "/login") {
         return "/login"
      }
   }
})
