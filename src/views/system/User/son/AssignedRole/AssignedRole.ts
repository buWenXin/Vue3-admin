import {AllocationRoleDto} from "@/model/systemModel/userModel";
import {reactive} from "vue";
import {allocationRole} from "@/api/system/userAPi";

/**
 * 提交分配角色
 */
export function useSubmitForm() {
   //选中的数据
   const formData: AllocationRoleDto = reactive({
      roleId: [],
      userId: 0
   })
   const submitForm = () => {
      return allocationRole(formData);
   }

   return {
      submitForm,
      formData
   }
}
