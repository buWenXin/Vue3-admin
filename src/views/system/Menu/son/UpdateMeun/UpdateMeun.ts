import {reactive, ref} from "vue";
import {getMenuOf} from "@/api/system/menuApi";
import {FormRules} from "element-plus/es";

import {MenuOfDto, MenuUpdateDto} from "@/model/systemModel/menuModel";
import {useResetData} from "@/common/common";


export function useMenuUpdateForm() {
   const formData: MenuUpdateDto = reactive({
      id: 0,
      componentPath: "",
      icon: "",
      sortInt: 0,
      name: "",
      parentId: 0,
      perms: "",
      routerPath: "",
      status: 0,
      type: 1
   });
   /**
    * form表单验证规则
    */
   const rules = reactive<FormRules>({
      name: [
         {required: true, message: "请输入菜单名称", trigger: "blur"}
      ],
      routerPath: [
         {required: true, message: "请输入路由路径", trigger: "blur"}
      ],
      icon: [
         {required: true, message: "请输入菜单icon", trigger: "blur"}
      ]
   });


   /**
    * 重置数据
    */
   const resetData = useResetData(formData);

   return {
      formData,
      rules,
      resetData
   }
}


export function useMenuUpdateData() {
   /**
    * 暴露的响应式目录数据
    */
   const menuOfView = ref<Array<MenuOfView>>([]);

   /**
    * 展示的目录数据结构
    */
   interface MenuOfView {
      value: number,
      label: string,
      children: Array<MenuOfView>
   }

   /**
    * 获取目录数据
    */
   function getMenuOfs() {
      //获取目录结构
      getMenuOf().then(res => {
         menuOfView.value = [
            {
               label: "主目录",
               value: 0,
               children: dataTo(res.data),
            }
         ];
      })
   }

   /**
    * 处理 目录数据
    */
   function dataTo(data: Array<MenuOfDto>) {
      let list: Array<MenuOfView> = [];
      data.forEach(item => {
         const dto: MenuOfView = {
            label: item.name,
            value: item.id,
            children: [],
         }
         if (item.children.length > 0) {
            dto.children = dataTo(item.children);
         }
         list.push(dto);
      })
      return list;
   }

   return {
      getMenuOfs,
      menuOfView
   }
}














