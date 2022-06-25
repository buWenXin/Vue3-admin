import {AllocationRoleDto} from "@/model/systemModel/userModel";
import {reactive, ref} from "vue";
import {allocationRole} from "@/api/system/userAPi";
import {RolePageVo} from "@/model/systemModel/roleModel";
import {usegetRoleAll} from "@/views/system/User/User";

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

/**
 * 获取渲染的数据
 */
export function useShowData() {
   //渲染的数据
   const roleData = ref<Array<RolePageVo>>([]);

   /**
    * 获取所有角色
    */
   const getShowData = () => {
      usegetRoleAll().then(res => {
         roleData.value = res.data.records;
      })
   }

   return {
      roleData,
      getShowData
   }
}
