import {reactive, ref} from "vue";
import {getMenuOf} from "@/api/system/menuApi";
import {FormRules} from "element-plus/es";
import {ObjectUtils} from "@/utils/ObjectUtils";
import {MenuOfDto, MenuUpdateDto} from "@/model/systemModel/menuModel";



const visible = ref(false);
const title = ref("新增");
const formData: MenuUpdateDto = reactive({
   id: 0,
   componentPath: "",
   icon: "",
   name: "",
   parentId: 0,
   perms: "",
   routerPath: "",
   status: 0,
   type: 0
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
 * 初始值
 */
const deepCopy = ObjectUtils.deepCopy(formData);

/**
 *重置数据
 */
function reset() {
   ObjectUtils.DtoTo(deepCopy, formData)
}


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
export function getMenuOfs() {
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


/**
 * 打开弹出层函数
 */
function open(row?: any) {
   reset();
   if (row) {
      title.value = "编辑菜单";
      ObjectUtils.DtoTo(row, formData);
   } else {
      title.value = "新增菜单"
   }
   getMenuOfs();
   visible.value = true;
}

export function useMenuOpen() {
   return {
      open
   }
}

export function useMenuFrom() {
   return {
      title,
      visible,
      formData,
      rules,
      menuOfView
   }
}
