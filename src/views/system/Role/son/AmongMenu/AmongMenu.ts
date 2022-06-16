import {ref} from "vue";
import {MenuInfoVo} from "@/model/systemModel/menuModel";
import {getMenuList} from "@/api/system/menuApi";
import {getRoleMenus} from "@/api/system/roleApi";
import {AmongMenuDto} from "@/model/systemModel/roleModel";


/*
 * ------------------------------------------------------------<-菜单数据->----------------------------------------------------------------------------------
 */
const menuData = ref<Array<MenuInfoVo>>([]);

/**
 * 获取菜单数据
 */
function getMenuData() {
   loading.value = true;
   getMenuList().then(res => {
      menuData.value = res.data;
   }).finally(() => {
      loading.value = false;
   })
}

const menuIds = ref<Array<number>>([]);

/**
 * 获取角色拥有的菜单ids
 */
function getMenuIds(roleId: number) {
   menuIds.value = [];
   getRoleMenus(roleId).then(res => {
      menuIds.value = res.data;
   })
}


/*
 * ------------------------------------------------------------<-页面显示控制->----------------------------------------------------------------------------------
 */

const dialogVisible = ref(false);
const loading = ref(false);
let roleId: number = 0;


//打开弹出层
export function amongMenuOpen(id: number) {
   getMenuData();
   getMenuIds(id);
   roleId = id;
   console.log(roleId);
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
      loading,
      menuIds,
      roleId
   }
}

