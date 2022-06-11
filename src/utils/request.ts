import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import axios from 'axios';

import {ElMessage} from 'element-plus'
import {MyCache} from "@/utils/MyCache";

/**
 * 后端统一响应类型
 */
export interface ResponseData<T = any> {
    data: T;
    msg: string,
    code: number,
}

/**
 * 分页统一响应类型
 */
export interface ResponsePageData<T> {
    records: Array<T>,
    total: number,
    size: number,
    current: number,
}

//设置全局配置对象

let config: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_API_PATH,
    timeout: 23000,
}

//创建axios实例
const axiosInstance: AxiosInstance = axios.create(config);


/**
 * 添加请求拦截器:主要作用为请求添加token
 * 无感刷新token：在响应拦截器中拦截，判断token 返回过期后，调用刷新token接口
 */
axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
    //为请求添加token
    const item = MyCache.getItem<string>("token");
    if (item != null) {
        config.headers = {
            "token": item
        }
    }
    return config;
});

/**
 * 添加响应拦截器：处理响应，200正常通过，401token认证异常，其他则提示错误信息。
 *
 */
axiosInstance.interceptors.response.use((res: AxiosResponse<ResponseData<any>>): Promise<AxiosResponse<ResponseData<any>>> => {
    if (res.data.code == 200) {
        return Promise.resolve(res);
    } else if (res.data.code == 401) {//token失效
        MyCache.removeItem("token");
        location.reload();//刷新页面
        return Promise.reject()
    } else {
        ElMessage.error(res.data.msg)
        return Promise.reject()
    }
}, () => {
    ElMessage.error("无法连接到服务器");
    return Promise.reject();
})


/**
 * 使用统一返回值类型 ResponseData
 */
export class Service {

    static async get<T>(url: string, data?: any,): Promise<ResponseData<T>> {
        let res = await axiosInstance.get<ResponseData<T>>(url, {params: data});
        return Promise.resolve(res.data);
    }

    static async post<T>(url: string, data: any,): Promise<ResponseData<T>> {
        let res = await axiosInstance.post<ResponseData<T>>(url, data);
        return Promise.resolve(res.data);
    }

}

