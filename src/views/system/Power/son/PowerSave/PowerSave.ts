import {PowerSaveDto} from "@/model/systemModel/PowerModel";
import {reactive} from "vue";
import {useResetData} from "@/common/common";

export function usePowerFormDto() {
   const powerSaveDto: PowerSaveDto = reactive({
      id: 0, menuId: 0, powerDesc: "", powerKey: "", remake: ""
   });

   const resetData = useResetData(powerSaveDto);

   return {
      powerSaveDto,
      resetData
   }
}
