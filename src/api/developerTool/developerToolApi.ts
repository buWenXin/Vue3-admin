import {Service} from "@/utils/request";

/**
 * 获取接口api
 */
export function getApis() {
    return Service.get<any>("/getApis")
}
