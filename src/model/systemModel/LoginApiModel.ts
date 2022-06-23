import type {UserinfoVo} from "@/model/systemModel/userModel";

export interface LoginDto {
   password: string,
   userName: string,
   uuid: string,
   code: string
}

export interface LoginVo {
   token: string,
   userinfo: UserinfoVo,
   powerKeys: Array<string>
}

export interface AuthCodeVo {
   base64Data: string,
   uuid: string
}
