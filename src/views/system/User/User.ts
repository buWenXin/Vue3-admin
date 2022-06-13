import {UserPageDto, UserPageVo} from "~/api/system/model/userModel";
import {usePage} from "~/components/page/UsePage";
import {getUserPage} from "~/api/system/userAPi";



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




