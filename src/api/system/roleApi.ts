import type {AmongMenuDto, AmongPowerDto, RolePageDto, RolePageVo, RoleUpdateDto} from "@/model/systemModel/roleModel";
import type {ResponsePageData} from "@/utils/request";
import {Service} from "@/utils/request";

/**
 * 角色-分页查询
 */
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

/**
 * 角色-分配权限
 */
export function assignPower(data: AmongPowerDto) {
   return Service.post<null>("/system/assignPower", data);
}

/**
 * 角色-获取角色拥有的按钮权限
 */
export function getRolePowers(roleId: number) {
   return Service.get<Array<number>>("/system/getRolePowers", {roleId});
}
