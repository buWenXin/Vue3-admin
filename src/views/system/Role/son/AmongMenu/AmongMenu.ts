import {ref} from "vue";
import {MenuInfoVo} from "@/model/systemModel/menuModel";
import {getMenuList} from "@/api/system/menuApi";
import {getRoleMenus} from "@/api/system/roleApi";


/*
 * ------------------------------------------------------------<-菜单数据->----------------------------------------------------------------------------------
 */
const menuData = ref<Array<MenuInfoVo>>([]);

function getMenuData() {
   loading.value = true;
   getMenuList().then(res => {
      console.log(res.data);
      menuData.value = res.data;
   }).finally(() => {
      loading.value = false;
   })
}

function getMenuIds() {
   getRoleMenus(1).then(res => {
      console.log(res.data);
   })
}

/*
 * ------------------------------------------------------------<-页面显示控制->----------------------------------------------------------------------------------
 */

const dialogVisible = ref(false);
const loading = ref(false);

//打开弹出层
export function amongMenuOpen() {
   getMenuData();
   getMenuIds();
   dialogVisible.value = true;
}

function amongMenuClose() {
   dialogVisible.value = false;
}

export function useAmongMenuControl() {
   return {
      dialogVisible,
      amongMenuClose,
      menuData,
      loading
   }
}

