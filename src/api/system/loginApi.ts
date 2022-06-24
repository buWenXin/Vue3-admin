
import {Service} from "@/utils/request";
import type {AuthCodeVo, LoginDto, LoginVo} from "@/model/systemModel/LoginApiModel";
import {UserPermissionsVo} from "@/model/systemModel/userModel";


/**
 * 登录接口
 */
export function login(data: LoginDto) {
    return Service.post<LoginVo>("/login/login", data);
}

/**
 * 获取验证码
 */
export function getAuthCode() {
    return Service.get<AuthCodeVo>("/login/getImageCode");
}

/**
 * 获取用户的权限
 */
// getUserPermissions
export  function getUserPermissions() {
   return Service.get<UserPermissionsVo>("login/getUserPermissions");
}

