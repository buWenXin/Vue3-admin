import {usePage} from "@/components/page/UsePage";
import type {RolePageDto, RolePageVo} from "@/model/systemModel/roleModel";
import {getRolePage} from "@/api/system/roleApi";


let rolePageDto: RolePageDto = {
    pageIndex: 1,
    name: "",
    pageSize: 10,
    roleKey: "",
    status: -1,
    type: -1
}

export function UseRolePage() {
    return usePage<RolePageDto, RolePageVo>(rolePageDto, getRolePage);
}




