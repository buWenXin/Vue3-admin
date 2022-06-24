import type {BasePageDto, BasePageVo} from "@/model/baseModel";
import {MenuInfoVo} from "@/model/systemModel/menuModel";


/**
 * 用户信息对象
 */
export interface UserinfoVo {
   id: number,
   email: string,
   nickName: string,
   phonenumber: string,
   sex: string,
   userName: string
}

/**
 * 用户分页请求对象
 */
export interface UserPageDto extends BasePageDto {
   userName: string,
   nickName: string,
   userType: number,
   status: number
}

/**
 * 用户分页响应对象
 */
export interface UserPageVo extends BasePageVo {
   id: number,
   userName: string,
   nickName: string,
   status: number,
   /**
    * 头像
    */
   avatar: string,
   /**
    * 用户类型（0管理员，1普通用户）
    */
   userType: number,
}

/**
 * 用户新增/修改
 */
export interface UserSaveDto {
   /**
    * 头像
    */
   avatar: string,
   /**
    * id
    */
   id: number,
   /**
    * 昵称
    */
   nickName: string,
   /**
    * 密码
    */
   password: string,
   /**
    * 用户名
    */
   userName: string,
   /**
    * 用户类型（0管理员，1普通用户）
    */
   userType: number,
}


/**
 * 用户权限
 */
export interface UserPermissionsVo {
   powers: Array<string>,
   menus: Array<MenuInfoVo>
}
