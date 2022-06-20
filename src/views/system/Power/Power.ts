import {PowerPageDto, PowerPageVo} from "@/model/systemModel/PowerModel";
import {usePage} from "@/components/page/UsePage";
import {getPowerPage} from "@/api/system/powerApi";


let powerPageDto: PowerPageDto = {
   menuId: 0,
   pageIndex: 1,
   pageSize: 10
}

export function usePowerPage() {
   return usePage<PowerPageDto, PowerPageVo>(powerPageDto, getPowerPage);
}
