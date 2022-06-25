import {Service} from "@/utils/request";
import type {ResponsePageData} from "@/utils/request";
import type {UserPageDto, UserPageVo, UserSaveDto} from "@/model/systemModel/userModel";
import {AllocationRoleDto} from "@/model/systemModel/userModel";

/**
 * 用户-分页查询
 */
export function getUserPage(data: UserPageDto) {
   return Service.post<ResponsePageData<UserPageVo>>("/system/getUserPage", data)
}


/**
 * 用户新增/修改
 */
export function updateUser(data: UserSaveDto) {
   return Service.post<string>("system/saveUser", data);
}


/**
 * 获取用户已经分配的角色
 */
export function getUserAllocationRole(userId: number) {
   return Service.get<Array<number>>("/system/getUserAllocationRole", {userId});
}


/**
 * 为用户分配角色
 */
export function allocationRole(dto: AllocationRoleDto) {
   Service.post<string>("/system/allocationRole", dto)
}

