import type {UserinfoVo} from "@/model/systemModel/userModel";

export interface LoginDto {
    password: string,
    userName: string,
}

export interface LoginVo {
    token: string,
    userinfo: UserinfoVo
}

export interface AuthCodeVo {
    base64Data:string,
    uuid:string
}
