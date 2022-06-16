import {ref} from "vue";
import {MenuInfoVo} from "@/model/systemModel/menuModel";
import {getMenuList} from "@/api/system/menuApi";



/*
 * ------------------------------------------------------------<-菜单数据->----------------------------------------------------------------------------------
 */
const menuData = ref<Array<MenuInfoVo>>([]);
function getMenuData() {
   getMenuList().then(res => {
      console.log(res.data);
      menuData.value = res.data;
   })
}

/*
 * ------------------------------------------------------------<-页面显示控制->----------------------------------------------------------------------------------
 */

const dialogVisible = ref(false);

export function amongMenuOpen() {
   getMenuData();
   dialogVisible.value = true;
}

function amongMenuClose() {
   dialogVisible.value = false;
}

export function useAmongMenuControl() {
   return {
      dialogVisible,
      amongMenuClose,
      menuData
   }
}

