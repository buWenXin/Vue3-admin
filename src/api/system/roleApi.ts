/**
 * 角色-分页查询
 */
import type {AmongMenuDto, RolePageDto, RolePageVo, RoleUpdateDto} from "@/model/systemModel/roleModel";
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

/**
 * 角色-分配菜单
 */
export function amongMenu(amongMenuDto: AmongMenuDto) {
   return Service.post<string>("/system/amongMenu", amongMenuDto)
}

/**
 * 获取角色下的菜单
 */
export function getRoleMenus(roleid: number) {
   return Service.get<Array<number>>("/system/getRoleMenus", {roleid});
}
