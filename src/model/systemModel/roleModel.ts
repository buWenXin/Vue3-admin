import type {BasePageDto, BasePageVo} from "@/model/baseModel";

export interface RolePageDto extends BasePageDto {

    /**
     * 角色名称
     */
    name: string,
    /**
     * 角色权限字符串
     */
    roleKey: string,
    /**
     * 角色状态（0正常 1停用）
     */
    status: number,
    /**
     * 角色类型
     */
    type: number,

}

export interface RolePageVo extends BasePageVo {

    id: number,
    /**
     * 角色名称
     */
    name: string,
    /**
     * 角色权限字符串
     */
    roleKey: string,
    /**
     * 角色状态（0正常 1停用）
     */
    status: number,
    /**
     * 角色类型
     */
    type: number
}


export interface RoleUpdateDto {
    /**
     * 角色id
     */
    id: number,
    /**
     * 角色名称
     */
    name: string,
    /**
     * 角色权限字符串
     */
    roleKey: string,
    /**
     * 角色状态（0正常 1停用）
     */
    status: number,
    /**
     * 角色类型
     */
    type: number,
}
