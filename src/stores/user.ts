//导入defineStore用于创建store
import {defineStore} from 'pinia'

import type {Router} from "vue-router";
import type {MenuInfoVo} from "@/model/systemModel/menuModel";
import {getMenu} from "@/api/system/menuApi";


// import {Router, useRoute, useRouter} from "vue-router";

//Viet中动态使用模块的方法，import.meta.glob是Viet提供的方法，在代码运行时，导入模块
const modules = import.meta.glob('../views/**/*.vue')


//2.创建store，并导出
export const useUserStore = defineStore({
    id: "user",
    //使用箭头函数，可以完整使用类型推断
    state: () => {
        return {
            menu: [] as Array<MenuInfoVo>
        }
    },
    actions: {
        async getMenu(): Promise<Array<MenuInfoVo>> {
            let data = await getMenu();
            if (data) {
                //拼接父路径
                SplicingPath(data.data);
                //将拼接完成的对象，存储都store中
                this.menu = data.data;
                return Promise.resolve(data.data)
            }
            return Promise.reject();
        },

        //递归注册路由
        registerRouter(router: Router, data: MenuInfoVo[]) {
            data.forEach(item => {
                //只有页面才注册路由
                if (item.type == 1) {
                    router.addRoute("home",
                        {
                            path: item.routerPath,
                            name: item.routerPath,
                            meta: {title: item.name},
                            component: modules["../views/" + item.componentPath]
                        }
                    )
                }
                //如果还有子页面，则调用自身递归
                if (item.children.length > 0) {
                    this.registerRouter(router, item.children);
                }
            })
        },
    }
});

//拼接父路径
function SplicingPath(data: MenuInfoVo[], parentPath?: string) {
    //处理可选参数
    if (parentPath == undefined) {
        parentPath = ""
    } else {
        parentPath += "/"
    }
    //遍历数据，进行拼接
    data.forEach(item => {
        let routerPath = parentPath + item.routerPath;
        if (item.type == 1) {
            item.routerPath = routerPath;
        }
        if (item.children.length > 0) {
            //如果有子数据，则调用自身进行递归
            SplicingPath(item.children, routerPath);
        }
    })
}
