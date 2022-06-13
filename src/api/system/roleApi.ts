/**
 * 角色-分页查询
 */
import type {RolePageDto, RolePageVo, RoleUpdateDto} from "@/model/systemModel/roleModel";
import type {ResponsePageData} from "@/utils/request";
import {Service} from "@/utils/request";


export function getRolePage(data: RolePageDto) {
    return Service.post<ResponsePageData<RolePageVo>>("/system/getRolePage", data)
}

/**
 * 角色新增/修改
 */
export function updateRole(roleUpdateDto: RoleUpdateDto) {
    return Service.post<string>("/system/addRole", roleUpdateDto);
}
