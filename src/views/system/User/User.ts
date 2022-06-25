import type {UserPageDto, UserPageVo} from "@/model/systemModel/userModel";
import {getUserPage} from "@/api/system/userAPi";
import {usePage} from "@/components/page/UsePage";
import {getRolePage} from "../../../api/system/roleApi";
import {RolePageDto} from "../../../model/systemModel/roleModel";


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


export function usegetRoleAll() {
   let rolePageDto: RolePageDto = {
      pageIndex: 1,
      name: "",
      pageSize: 10,
      roleKey: "",
      status: -1,
      type: -1
   }
   return getRolePage(rolePageDto);
}




