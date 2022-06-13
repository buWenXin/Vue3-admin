import type {UserPageDto, UserPageVo} from "@/model/systemModel/userModel";
import {getUserPage} from "@/api/system/userAPi";
import {usePage} from "@/components/page/UsePage";


export function useUserPage() {
    let data: UserPageDto = {
        pageIndex: 1,
        pageSize: 10,
        status: -1,
        userType: -1,
        nickName: "",
        userName: "",
    }
    return usePage<UserPageDto, UserPageVo>(data, getUserPage);
}




