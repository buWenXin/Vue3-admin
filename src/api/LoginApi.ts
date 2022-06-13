
import {Service} from "@/utils/request";
import type {AuthCodeVo, LoginDto, LoginVo} from "@/model/systemModel/LoginApiModel";


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
