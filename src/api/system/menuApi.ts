
import {Service} from "@/utils/request";
import type {MenuInfoVo, MenuOfDto, MenuUpdateDto} from "@/model/systemModel/menuModel";

/**
 * 获取路由菜单
 */
export function getMenu() {
    return Service.get<Array<MenuInfoVo>>("/getMenu")
}

/**
 * 获取所有菜单
 */
export function getMenuList() {
    return Service.get<Array<MenuInfoVo>>("/system/getMenuList")
}

/**
 * 菜单-新增/修改
 */
export function menuUpdate(menuUpdateDto: MenuUpdateDto) {
    return Service.post<string>("/system/updateMenu", menuUpdateDto);
}

/**
 * 获取目录结构
 */
export function getMenuOf() {
    return Service.get<Array<MenuOfDto>>("/system/getMenuOf")
}

/**
 * 获取角色下的页面权限
 */
export function queryPagePower(id:number) {
   return Service.get<Array<MenuInfoVo>>("/system/queryPagePower",{id})
}
