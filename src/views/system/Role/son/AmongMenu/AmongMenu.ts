import {ref} from "vue";

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
