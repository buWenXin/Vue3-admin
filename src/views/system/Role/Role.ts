import {RolePageDto, RolePageVo} from "~/api/system/model/RoleModel";
import {getRolePage} from "~/api/system/roleApi";
import {usePage} from "~/components/page/UsePage";
import {ObjectUtils} from "~/utils/ObjectUtils";


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




