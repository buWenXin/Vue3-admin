/**
 * 用户-分页查询
 */
import {Service} from "@/utils/request";
import type {ResponsePageData} from "@/utils/request";
import type {UserPageDto, UserPageVo, UserSaveDto} from "@/model/systemModel/userModel";


export function getUserPage(data: UserPageDto) {
    return Service.post<ResponsePageData<UserPageVo>>("/system/getUserPage", data)
}


/**
 * 用户新增/修改
 */
export function updateUser(data: UserSaveDto) {
    return Service.post<string>("system/saveUser", data);
}


