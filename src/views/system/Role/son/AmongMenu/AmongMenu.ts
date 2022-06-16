import {ref} from "vue";

/*
 * ------------------------------------------------------------<-页面显示控制->----------------------------------------------------------------------------------
 */

const dialogVisible = ref(false);

export function amongMenuOpen() {
   dialogVisible.value = true;
}

function amongMenuClose() {
   dialogVisible.value = false;
}

export function useAmongMenuControl() {
   return {
      dialogVisible,
      amongMenuClose
   }
}

