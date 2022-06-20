import {ResponsePageData, Service} from "@/utils/request";
import {PowerPageDto, PowerPageVo, PowerSaveDto} from "@/model/systemModel/PowerModel";

/**
 * 分页查询
 */
export function getPowerPage(data: PowerPageDto) {
   return Service.post<ResponsePageData<PowerPageVo>>("/system/getPowerPage", data);
}


/**
 * 权限-新增/修改
 */
export function savePower(data: PowerSaveDto) {
   return Service.post<string>("/system/savePower", data);
}

/**
 * 权限-删除
 */
export function deletePower(id: number) {
   return Service.get<string>("/system/deletePower", {id});
}
