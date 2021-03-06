import {BasePageDto, BasePageVo} from "@/model/baseModel";


export interface PowerPageDto extends BasePageDto {
   menuId: number,
}


export interface PowerPageVo extends BasePageVo {
   id: number,
   isDelete: boolean,
   menuId: number,
   menuName:string,
   powerDesc: string,
   powerKey: string,
   remake: string,
}

export interface PowerSaveDto {
   id: number,
   menuId: number,
   menuName:string,
   powerDesc: string,
   powerKey: string,
   remake: string,
}
