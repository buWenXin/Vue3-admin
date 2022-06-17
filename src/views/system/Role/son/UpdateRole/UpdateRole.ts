import {reactive, ref} from "vue";
import type {RoleUpdateDto} from "@/model/systemModel/roleModel";
import type {FormRules} from "element-plus/es";
import {ObjectUtils} from "@/utils/ObjectUtils";


export function useRoleFrom() {
   const roleUpdateDto: RoleUpdateDto = reactive({
      id: 0,
      name: "",
      roleKey: "",
      status: 0,
      type: 0
   });

   //form表单验证:
   const rules = reactive<FormRules>({
      name: [
         {required: true, message: '请输入角色名称', trigger: 'blur'},
      ],
      roleKey: [
         {required: true, message: '请输入角色权限名称', trigger: 'blur'},
      ]
   })

   //初始化的值
   const initialData = ObjectUtils.deepCopy(roleUpdateDto);

   return {
      roleUpdateDto,
      initialData,
      rules
   }
}


