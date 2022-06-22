import {ref} from "vue";
import {MenuInfoVo} from "@/model/systemModel/menuModel";
import {getMenuList, queryPagePower} from "@/api/system/menuApi";


export function useAmongPowerFormData() {
   const menuData = ref<Array<MenuInfoVo>>([]);
   const loading = ref(false);

   const getMenuData = (id: number) => {
      loading.value = true;
      queryPagePower(id).then(res => {
         menuData.value = res.data;
         console.log(res.data);
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
