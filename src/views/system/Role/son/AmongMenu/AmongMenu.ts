import {ref} from "vue";
import {MenuInfoVo} from "@/model/systemModel/menuModel";
import {getMenuList} from "@/api/system/menuApi";
import {getRoleMenus} from "@/api/system/roleApi";

/**
 * 获取菜单数据
 */
export function useGetMenuData() {
   const menuData = ref<Array<MenuInfoVo>>([]);
   const loading = ref(false);

   const getMenuData = () => {
      loading.value = true;
      getMenuList().then(res => {
         menuData.value = res.data;
      }).finally(() => {
         loading.value = false;
      })
   }
   return {
      getMenuData,
      loading,
      menuData
   }
}

/**
 * 获取取角色拥有的菜单ids
 */
export function useGetMenuIds() {
   const menuIds = ref<Array<number>>([]);

   function getMenuIds(roleId: number) {
      menuIds.value = [];
      getRoleMenus(roleId).then(res => {
         menuIds.value = res.data;
      })
   }

   return {
      menuIds,
      getMenuIds
   }
}






