import {PowerPageDto, PowerPageVo} from "@/model/systemModel/PowerModel";

import {getPowerPage} from "@/api/system/powerApi";
import {reactive, ref} from "vue";
import {useResetData} from "@/common/common";


export function usePowerPageTable() {
   //table请求对象
   const powerPageDto: PowerPageDto = reactive({
      menuId: 0,
      pageIndex: 1,
      pageSize: 10
   });


   //table数据响应对象
   const tableData = ref<Array<PowerPageVo>>([]);

   const tableLoading = ref(false);
   const tableTotal = ref(0);

   //获取table数据
   const getData = () => {
      tableLoading.value = true;
      getPowerPage(powerPageDto).then(res => {
         tableData.value = res.data.records;
         tableTotal.value = res.data.total;
      }).finally(() => {
         tableLoading.value = false;
      })
   }

   //搜索
   const search = () => {
      powerPageDto.pageIndex = 1;
      getData();
   }
   //重置dto对象
   const resetData = useResetData(powerPageDto);
   const reset = () => {
      resetData();
      search();
   }


   return {
      powerPageDto,
      tableData,
      tableLoading,
      tableTotal,
      getData,
      search,
      reset
   }

}





